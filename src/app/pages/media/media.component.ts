import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Elements, Slides } from '../commons/interfaces';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss'],
})
export class MediaComponent {
  @ViewChild('mediaBlock') mediaBlock: ElementRef;

  @Input() set media(media: Elements['media']) {
    console.log(media);
    const mimeArr = media.mime.split('/');
    this.type = mimeArr[0];
    this.ext = mimeArr[1];
    this.token = media.token;
    this.mime = media.mime;
  }

  type;
  ext;
  token;
  mime;


}
