import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css'],
  animations: [
    trigger('isInView', [
      state('inView', style({
        width: '100%',
        height: '100%',
      })),
      state('notInView', style({
        width: '78%',
        height: '75%',
      })),
      transition('inView <=> notInView', [
        animate('0.3s ease-in-out'),
      ]),
    ]),

  ]
})
export class WindowComponent implements OnInit {
  @Input('view') isInView: boolean;// make string that can be 4 things
  @Input() name: string
  @Input() backgroundClass: string;
  @Input() scrolling: boolean = false;

  @Output() hitTop = new EventEmitter<void>();
  @Output() hitBottom = new EventEmitter<void>();

  atTop = true;
  atBottom = false;

  constructor() { }

  ngOnInit(): void {
  }

  checkScrollHit(): void {
    let eventElement = document.getElementById(`${this.name}-container`);
    if (eventElement.scrollTop + eventElement.clientHeight >= eventElement.scrollHeight - 5) { // close enough to bottom
      // HIT BOTTOM!
      if (this.atBottom)
        this.atBottom = false;
      else {
        this.hitBottom.emit();
        this.atBottom = true;
      }

    } else if (eventElement.scrollTop == 0) {
      // HIT TOP!
      if (this.atTop)
        this.atTop = false;
      else {
        this.hitTop.emit();
        this.atTop = true;
      }
    }
  }
}
