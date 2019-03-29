import { Component, OnInit, ViewChild} from '@angular/core';
import { CanvasWhiteboardComponent } from 'ng2-canvas-whiteboard';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-play-draw',
  templateUrl: './play-draw.component.html',
  styleUrls: ['./play-draw.component.css']
})
export class PlayDrawComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  image: string = "";

  @ViewChild('canvasWhiteboard') canvasWhiteboard: CanvasWhiteboardComponent;

  print(){
    this.canvasWhiteboard.generateCanvasData((generatedData: string) => {
          console.log(generatedData);
          this.image = generatedData;
      }, "image/png", 1);
      const fd = new FormData();
      fd.append('image', this.image, "test-image");
      this.http.post('https://16fcc55b-1bab-4153-938f-743595374287.mock.pstmn.io/image', fd).subscribe(res=>{console.log(res)});
  }
  word:string = "Word to Draw"
}