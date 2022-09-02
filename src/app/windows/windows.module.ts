import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebDesignComponent } from './web-design/web-design.component';
import { GraphicDesignComponent } from './graphic-design/graphic-design.component';
import { WebDevComponent } from './web-dev/web-dev.component';

import { ModalContainerComponent } from '.././modal-container/modal-container.component';

@NgModule({
  declarations: [
    WebDesignComponent,
    GraphicDesignComponent,
    WebDevComponent,
    ModalContainerComponent,
  ],
  exports: [
    WebDesignComponent,
    GraphicDesignComponent,
    WebDevComponent,
    ModalContainerComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class WindowsModule { }
