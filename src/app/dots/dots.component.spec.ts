import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DotsComponent } from './dots.component';

describe('DotsComponent', () => {
  let component: DotsComponent;
  let fixture: ComponentFixture<DotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
