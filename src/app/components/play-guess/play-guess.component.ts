import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { JsonString } from 'src/app/models/jsonstring';
import { DataPersistenceService } from 'src/app/services/data-persistence.service';

@Component({
  selector: 'app-play-guess',
  templateUrl: './play-guess.component.html',
  styleUrls: ['./play-guess.component.css']
})
export class PlayGuessComponent implements OnInit {

  //banana in a box notation to check whether guess matches word || Removes the need for a button
  constructor(private imageService: ImageService, private dataTransfer: DataPersistenceService) { }

  myStorage = window.localStorage;

  ngOnInit() {
    this.dataTransfer.checkForUser();
    if (this.myStorage.getItem("imageName") != null && this.myStorage.getItem("imageName") != "") {
      this.getImage(this.imageName);
    }
  }

  imageName: string = "dams";
  image: any;
  readonly imageType: string = 'data:image/PNG;base64,';


  getImage(image: string) {
    this.imageService.getImage(image)
      .subscribe((data: JsonString) => {
        this.image = this.imageType + data.content;
      })
  }

}
