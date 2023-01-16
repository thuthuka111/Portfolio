import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebDesignComponent } from './web-design/web-design.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { WebDevComponent } from './web-dev/web-dev.component';
import { GraphicsEngineComponent } from './graphics-engine/graphics-engine.component';

import { ModalContainerComponent } from '.././modal-container/modal-container.component';
import { MultimediaComponent } from './multimedia/multimedia.component';
import { MultimediaCardComponent } from './multimedia/multimedia-card/multimedia-card.component';
import { WindowCardComponent } from './window-card/window-card.component';

@NgModule({
  declarations: [
    WebDesignComponent,
    GraphicDesignComponent,
    WebDevComponent,
    ModalContainerComponent,
    GraphicsEngineComponent,
    MultimediaComponent,
    MultimediaCardComponent,
    WindowCardComponent,
  ],
  exports: [
    WebDesignComponent,
    GraphicDesignComponent,
    WebDevComponent,
    ModalContainerComponent,
    GraphicsEngineComponent,
    MultimediaComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class WindowsModule { }
