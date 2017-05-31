import { Component, OnInit, HostBinding, HostListener, ViewEncapsulation, ContentChildren, QueryList, ElementRef, AfterContentInit } from '@angular/core';

import { SlideComponent } from '../slide/slide.component';

@Component({
  selector: 'ml-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlideshowComponent implements OnInit, AfterContentInit {
  @HostBinding('class.ml-slideshow') _class_slideshow = true;
  @ContentChildren(SlideComponent) slides: QueryList<SlideComponent>;
  
  current_slide_idx: number = 0;
  num_slides: number = 0;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.num_slides = this.slides.length;
    this.slides.forEach((el, idx, arr) => {
      console.log('Slide', idx, el);
      el._style_z_index = this.num_slides - idx;
    })
  }

  @HostListener('window:keypress', ['$event'])
  onKeyPress(event) {
    console.log("KEY PRESS", event);
    let slide = this.slides.find((el, idx, arr) => idx === this.current_slide_idx);
    switch(event.key) {
      case 'A': case 'a':
        if(this.current_slide_idx < this.num_slides && this.current_slide_idx > 0) {
          this.current_slide_idx--;
          slide = this.slides.find((el, idx, arr) => idx === this.current_slide_idx);
          slide._style_transform = "translate(0%,0%)";
        }
        break;
      case 'D': case 'd':
        if(this.current_slide_idx < this.num_slides - 1 && this.current_slide_idx >= 0) {
          slide._style_transform = "translate(-100%,0%)";
          ++this.current_slide_idx;
        }
        break;
      default:
    }
  }
}
