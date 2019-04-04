import { Component, OnInit } from '@angular/core';
import { DataPersistenceService } from 'src/app/services/data-persistence.service';
import { Router } from '@angular/router';
import { Game } from 'src/app/models/game';
import { GamesService } from 'src/app/services/games.service';
import { ImageService } from 'src/app/services/image.service';
import { JsonString } from 'src/app/models/jsonstring';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private dataTransfer: DataPersistenceService, private router: Router, private gameService: GamesService, private imageService: ImageService, private userService: UserService) { }

  myStorage = window.localStorage;
  username: string = "Admin";
  games: Game[];
  image: any;
  readonly imageType: string = 'data:image/PNG;base64,';
  word: string = "";
  gameId: string = "";
  userUsername: string = "";
  message: string;

  banUser() {
    let u: User = null;
    for (let g of this.games) {
      if (g.users[0].username == this.userUsername) {
        u = g.users[0];
        break;
      } else if (g.users[1].username == this.userUsername) {
        u = g.users[1];
        break;
      }
    }
    if (u == null) {
      this.message = "User not found.";
    } else {
      u.admin = "ban";
      this.userService.updateUser(u, u.uId).subscribe(res => {
        this.message = res.username + " was banned.";
      },
      err => {
        this.message = "Unable to ban user.";
      });
    }
  }

  hide() {
    this.image = null;
  }

  onSubmit() {
    this.gameService.deleteGame(this.gameId).subscribe(res => {
      this.message = "Game deleted."
      this.retrieveGames();
    },
      err => {
        if (err.status == 404) {
          this.message = "Record not found.";
        }
        else {
          this.message = "Unable to delete game.";
        }
      })
  }

  ngOnInit() {
    this.dataTransfer.checkForAdmin();
    this.retrieveGames();
  }

  viewImage(game: Game) {
    console.log(game.picture);
    this.getImage(game.picture);
    this.word = game.word;
  }

  getImage(image: string) {
    this.imageService.getImage(image)
      .subscribe((data: JsonString) => {
        this.image = this.imageType + data.content;
      })
  }

  retrieveGames() {
    this.gameService.getAllGames().subscribe((games: Game[]) => {
      this.games = games;
    })
  }
  logout() {
    this.myStorage.setItem("username", "");
    this.myStorage.setItem("userId", "");
    this.myStorage.setItem("admin", "");
    this.router.navigate(["/login"]);
  }
}
