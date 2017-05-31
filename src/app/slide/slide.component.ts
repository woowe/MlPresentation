import { Component, OnInit, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ml-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  @HostBinding('class.ml-slide') _class_slide = true;
  @HostBinding('style.zIndex') _style_z_index = 0;
  @HostBinding('style.transform') _style_transform = "translate(0%, 0%)";
  @HostBinding('style.position') _style_position = "absolute";
  @HostBinding('style.transition') _style_transition = "transform 0.4s ease";

  constructor() { }

  ngOnInit() {
  }

}
