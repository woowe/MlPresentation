import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SlideComponent } from './slide/slide.component';
import { DotsComponent } from './dots/dots.component';

@NgModule({
  declarations: [
    AppComponent,
    SlideshowComponent,
    SlideComponent,
    DotsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
