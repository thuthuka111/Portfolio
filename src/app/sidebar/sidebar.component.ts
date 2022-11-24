import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('isExtended', [
      state('extended', style({
        flexBasis: '100%',
      })),
      state('collapsed', style({
        flexBasis: '85%',
      })),
      transition('extended <=> collapsed', [
        animate('0.4s ease-in-out'),
      ])
    ]),
    trigger('textDisplayed', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', keyframes([
          style({ opacity: 0, offset: 0 }),
          style({ opacity: 1, offset: 0.3 }),
          style({ opacity: 1, offset: 0.75 }),
          style({ opacity: 0, offset: 1 }),
        ])),
      ]),
      transition(':leave', [
        animate('400ms', style({ opacity: 0 }))
      ]),
    ]),
    trigger('textColour', [
      state('light', style({ color: 'white' })),
      state('dark', style({ color: '#6B6B6B' })),
      transition('light <=> dark', [animate('0.4s ease-in-out')]),
    ]),
    trigger('backgroundColour', [
      state('light', style({ backgroundColor: 'white' })),
      state('dark', style({ backgroundColor: '#6B6B6B' })),
      transition('light <=> dark', [animate('0.4s ease-in-out')]),
    ]),
  ]
})
export class SidebarComponent implements OnInit {
  @Input() windows: Array<{ name: string, inView: boolean, scrolling: boolean }> = [];

  @Output() scrollToSection = new EventEmitter<string>();

  theme: string = "light";

  constructor() { }

  ngOnInit(): void {
    console.log(this.windows);
  }

  scrollTo(window: any): void {
    // Do some themming logic
    this.scrollToSection.emit(window.id);
  }

}
