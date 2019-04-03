import { Component, OnInit } from '@angular/core';
import { DataPersistenceService } from 'src/app/services/data-persistence.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  constructor(private userService: UserService, private dataTransfer: DataPersistenceService) { }

  ngOnInit() {
    this.dataTransfer.checkForUser();
    this.fillTable();
   }
   i:number;
   size: number;
 rank: number=1;
   users: User[] = [];
   players: User[]=[];
   temp :User;
   swap: boolean;
   fillTable() {
     this.userService.getAllUsers()
       .subscribe((allUsers) => {
         this.users = allUsers;
       
         this.size=this.users.length;
        //  console.log(this.size);
        // console.log(this.users);
   do{
       this.swap=false;
        for(this.i=0;this.i<this.size-1;this.i++){
          if(this.users[this.i].wins==null){
           this.users[this.i].wins=0;
          }
         if(this.users[this.i+1].wins==null){
                this.users[this.i+1].wins=0;
              }
         if(this.users[this.i].gamesPlayed==null){
               this.users[this.i].gamesPlayed=0;
              }
         if(this.users[this.i+1].gamesPlayed==null){
                    this.users[this.i+1].gamesPlayed=0;
                  }
        if(this.users[this.i].points==null){
                   this.users[this.i].points=0;
                  }
        if(this.users[this.i+1].points==null){
                        this.users[this.i+1].points=0;
                      }
         
         if (this.users[this.i].points<this.users[this.i+1].points)
         {
             this.temp=this.users[this.i];
             this.users[this.i]=this.users[this.i+1];
             this.users[this.i+1]=this.temp;
             this.swap=true;
              }
          }
         }while (this.swap)
            if(this.size>10){
              for(this.i=0;this.i<10;this.i++){
               this.players[this.i]= this.users[this.i];
            }
           }else{
             for(this.i=0;this.i<this.size;this.i++){
               this.players[this.i]= this.users[this.i];
           }
     
       
     }
   });
   }

}
