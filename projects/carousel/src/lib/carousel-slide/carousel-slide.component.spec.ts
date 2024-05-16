import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatCarouselSlideComponent } from './carousel-slide.component';

describe('NgxMatCarouselSlideComponent', () => {
  let component: NgxMatCarouselSlideComponent;
  let fixture: ComponentFixture<NgxMatCarouselSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatCarouselSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatCarouselSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
