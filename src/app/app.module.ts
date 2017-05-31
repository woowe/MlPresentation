import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SlideComponent } from './slide/slide.component';
import { DotsComponent } from './dots/dots.component';
import { TextToSvgComponent } from './text-to-svg/text-to-svg.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    SlideComponent,
    DotsComponent,
    TextToSvgComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
