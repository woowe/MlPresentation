import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextToSvgComponent } from './text-to-svg.component';

describe('TextToSvgComponent', () => {
  let component: TextToSvgComponent;
  let fixture: ComponentFixture<TextToSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextToSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextToSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
