import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { JsonString } from 'src/app/models/jsonstring';

@Component({
  selector: 'app-play-guess',
  templateUrl: './play-guess.component.html',
  styleUrls: ['./play-guess.component.css']
})
export class PlayGuessComponent implements OnInit {

  //banana in a box notation to check whether guess matches word || Removes the need for a button
  constructor(private imageService: ImageService) { }

  ngOnInit() {
    this.getImage(this.imageName);
  }

  imageName: string = "rises";
  image: any;
  readonly imageType: string = 'data:image/PNG;base64,';


  getImage(image: string) {
    this.imageService.getImage(image)
      .subscribe((data: JsonString) => {
        this.image = this.imageType + data.content;
      })
  }

}
