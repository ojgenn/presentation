import { ElementTypes } from './enums';

export interface AppData {
  canvas: Canvas;
  slides: Array<Slides>;
  token: string;
}

export interface Canvas {
  display_width: number;
  display_height: number;
}

export interface Slides {
  delay: number;
  elements: Array<Elements>;
  token: string;
}

export interface Elements {
  type: ElementTypes;
  layout: Layout;
  token: string;
  style?: {
    'background-color': string
  };
  media?: Media;
  html: string;
}

export interface Layout {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

export interface Media {
  mime: string;
  token: string;
}
