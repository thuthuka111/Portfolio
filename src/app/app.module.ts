import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { WindowsModule } from './windows/windows.module'

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategoryComponent } from './category/category.component';
import { WindowHostComponent } from './window/window.component';
import { FullscreenViewerComponent } from './fullscreen-viewer/fullscreen-viewer.component';
import { WindowDirective } from './window.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CategoryComponent,
    WindowHostComponent,
    FullscreenViewerComponent,
    WindowDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    WindowsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
