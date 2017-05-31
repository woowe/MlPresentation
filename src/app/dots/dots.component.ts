import { Component, OnInit, ViewChild, HostBinding, Input, ElementRef, NgZone, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ml-dots',
  templateUrl: './dots.component.html',
  styleUrls: ['./dots.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DotsComponent implements OnInit, AfterViewInit {
  @HostBinding('class.ml-dots') _class_dots = true;
  @Input() num_dots = 150;
  @Input() max_dist = 200;

  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('source') image: ElementRef;

  points = [];

  ctx: any;
  c_w: number;
  c_h: number;
  r: number;

  constructor(private _zone: NgZone) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.c_w = this.ctx.canvas.width;
    this.c_h = this.ctx.canvas.height;
    this.r = 2;

    for(var i = 0; i < this.num_dots; ++i) {
      this.points.push({
        x: Math.random() * (this.c_w - 2*this.r) + 2*this.r,
        y: Math.random() * (this.c_h - 2*this.r) + 2*this.r,
        vx: Math.random() * 4 - 2,
        vy: Math.random() * 4 - 2,
        nearest: []
      });
    }

    this._zone.runOutsideAngular(() => this.dots());
  }

  dist(p1, p2) {
    return Math.sqrt((p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y));
  }

  dots() {
    for(var i = 0; i < this.num_dots; ++i) {
      let point = this.points[i];
      if(point.x - this.r < 0 || point.x + this.r > this.c_w) {
        point.vx *= -1;
      }

      if(point.y - this.r < 0 || point.y + this.r > this.c_h) {
        point.vy *= -1;
      }

      point.x += point.vx;
      point.y += point.vy;

      point.nearest = [];
      for(var j = 0; j < this.num_dots; ++j) {
        let other = this.points[j];
        var dist = this.dist(point, other);
        if(dist < this.max_dist) {
          point.nearest.push({p: other, dist});
        }
      }

    }

    this.ctx.fillStyle = "#000";
    this.ctx.rect(0, 0, this.c_w, this.c_h);
    this.ctx.fill();
    this.ctx.drawImage(this.image.nativeElement, 0, 0);
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    for(var i = 0; i < this.num_dots; ++i) {
      let point = this.points[i];

      for(var j = 0; j < point.nearest.length; ++j) {
        let other = point.nearest[j];
        this.ctx.strokeStyle = "rgba(255, 255, 255, " + (1/other.dist * 5)  + ")";
        this.ctx.beginPath();
        this.ctx.moveTo(point.x, point.y);
        this.ctx.lineTo(other.p.x, other.p.y);
        // this.ctx.endPath();
        this.ctx.stroke();
      }
      
      this.ctx.beginPath();
      this.ctx.arc(point.x, point.y, this.r, 0, 2 * Math.PI);
      this.ctx.fill();
    }

    window.requestAnimationFrame(() => this.dots());
  }

}
