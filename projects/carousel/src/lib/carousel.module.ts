import { NgModule, ModuleWithProviders, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NgxMatCarouselComponent } from './carousel.component';
import { NgxMatCarouselSlideComponent } from './carousel-slide/carousel-slide.component';
import {
  HammerGestureConfig,
  HAMMER_GESTURE_CONFIG,
  HammerModule
} from '@angular/platform-browser';

@Injectable()
export class NgxMatCarouselHammerConfig extends HammerGestureConfig {
  overrides = {
    pinch: { enable: false },
    rotate: { enable: false }
  };
}
@NgModule({
  declarations: [NgxMatCarouselComponent, NgxMatCarouselSlideComponent],
  imports: [CommonModule, MatButtonModule, MatIconModule, HammerModule],
  exports: [NgxMatCarouselComponent, NgxMatCarouselSlideComponent]
})
export class NgxMatCarouselModule {
  static forRoot(): ModuleWithProviders<NgxMatCarouselModule> {
    return {
      ngModule: NgxMatCarouselModule,
      providers: [
        { provide: HAMMER_GESTURE_CONFIG, useClass: NgxMatCarouselHammerConfig }
      ]
    };
  }
}
