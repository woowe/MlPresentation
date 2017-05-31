import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, query, style, group } from '@angular/animations';

import * as TextToSvg from 'text-to-svg';

@Component({
  selector: 'ml-text-to-svg',
  templateUrl: './text-to-svg.component.html',
  styleUrls: ['./text-to-svg.component.scss']
})
export class TextToSvgComponent implements OnInit {
  @Input() text: string;
  @Input() fontPath: string;
  @Input() fontSize = 72;
  @Input() attributes: any = {};

  textToSvg: any;
  text_paths: any[] = [];
  height = 0;

  svg_options: any = {
    x: 0,
    y: 0,
    anchor: 'top',
    attributes: {
      fill: 'black',
      stroke: 'black'
    }
  };

  constructor() {}

  ngOnInit() {
    this.svg_options.fontSize = this.fontSize;
    this.svg_options.attributes = {...this.svg_options.attributes, ...this.attributes};

    if (this.fontPath) {
      TextToSvg.load(this.fontPath, (err, textToSvg) => {
        this.generateSvgs(textToSvg);
      });
    }
  }

  generateSvgs(textToSvg) {
    this.text_paths = [];
    for (let i = 0; i < this.text.length; ++i) {
      const text_path: string = textToSvg.getD(this.text[i], this.svg_options);
      const metrics: any = textToSvg.getMetrics(this.text[i], this.svg_options);
      this.text_paths.push({
        width: metrics.width,
        height: metrics.height,
        d: text_path
      });
      // console.log(text_path);
    }
  }

}
