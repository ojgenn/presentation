import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PresentationCanvasComponent } from './pages/presentation-canvas/presentation-canvas.component';
import { SlideComponent } from './pages/slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    PresentationCanvasComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
