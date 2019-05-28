import { Component, Input } from '@angular/core';
import { Canvas, Elements, Slides } from '../commons/interfaces';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms * 1000));
}

const DEFAULT_DELAY = 10;

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

  slideElements: Array<Elements>;

  async slide(slidesArray: Array<Slides>) {
    if (slidesArray && slidesArray.length > 0) {
      const length = slidesArray.length;
      for (let i = 0; length; i++) {
        this.slideElements = slidesArray[i].elements;
        const delay = slidesArray[i].delay || DEFAULT_DELAY;
        if (i >= length - 1) {
          i = -1;
        }
        await sleep(DEFAULT_DELAY);
      }
    }
  }

}
