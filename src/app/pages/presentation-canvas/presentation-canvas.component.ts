import { Component, Input } from '@angular/core';
import { Canvas, Slides } from '../commons/interfaces';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

@Component({
  selector: 'app-presentation-canvas',
  templateUrl: './presentation-canvas.component.html',
  styleUrls: ['./presentation-canvas.component.scss'],
})
export class PresentationCanvasComponent {

  @Input() width: Canvas['display_width'];
  @Input() height: Canvas['display_height'];

  @Input() set slides(slides: Array<Slides>) {
    this.slide(slides).catch();
  }

  async slide(slidesArray: Array<Slides>) {
    console.log(slidesArray);
    if (slidesArray && slidesArray.length > 0) {
      const length = slidesArray.length;
      for (let i = 0; length; i++) {
        console.log(slidesArray[i]);
        if (i >= length - 1) {
          i = -1;
        }
        await sleep(5000);
      }
    }
  }

}
