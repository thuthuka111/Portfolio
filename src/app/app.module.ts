import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { WindowsModule } from './windows/windows.module'

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CategoryComponent } from './category/category.component';
import { WindowComponent } from './window/window.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    CategoryComponent,
    WindowComponent,
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
