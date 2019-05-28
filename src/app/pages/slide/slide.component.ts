import { Component, Input } from '@angular/core';
import { Elements } from '../commons/interfaces';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {

  @Input() set slideElements(slideElements: Array<Elements>) {
    console.log(slideElements);
  }
  constructor() { }

}
