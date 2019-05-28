import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationCanvasComponent } from './presentation-canvas.component';

describe('PresentationCanvasComponent', () => {
  let component: PresentationCanvasComponent;
  let fixture: ComponentFixture<PresentationCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentationCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentationCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
