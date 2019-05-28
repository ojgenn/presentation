import { Component, Input } from '@angular/core';
import { Elements } from '../commons/interfaces';
import { ElementTypes } from '../commons/enums';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent {

  @Input() slideElements: Array<Elements>;
  elementTypes = ElementTypes;

}
