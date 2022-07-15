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
    trigger('content', [
      state('inView', style({
        transform: 'translateY(0)',
        opacity: '100%',
      })),
      state('above', style({
        opacity: '0%',
      })),
      state('below', style({
        opacity: '0%',
      })),
      transition('below => inView', [
        style({ transform: 'translateY(13%)' }),
        animate('0.5s ease-in'),
      ]),
      transition('above => inView', [
        style({ transform: 'translateY(-13%)' }),
        animate('0.5s ease-in'),
      ]),
      transition('inView => below', [
        style({ transform: 'translateY(-13%)' }),
        animate('0.5s ease-out'),
      ]),
      transition('inView => above', [
        style({ transform: 'translateY(13%)' }),
        animate('0.5s ease-out'),
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

  contentState = "below";
  stateSet = false;

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

  stateChange(): void {
    if(this.stateSet) {
      this.contentState = "inView";
    } else {
      this.stateSet = true;
    }
  }
}
