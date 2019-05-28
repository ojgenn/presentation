import { Component, Input, OnInit } from '@angular/core';
import { Elements } from '../commons/interfaces';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
})
export class TextComponent implements OnInit {

  @Input() htmlText: Elements['html'];

  constructor() {}

  ngOnInit() {
  }

}
