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
        animate('0.4s'),
      ]),
    ]),

  ]
})
export class WindowComponent implements OnInit {
  @Input('view') isInView: boolean;// make string that can be 4 things
  @Input() name: string
  @Input() backgroundClass: string;
  @Input('scrolling') set setter(value: boolean) {
    if (document.getElementById(this.name + '-container')) {
      if (value) {
        document.getElementById(this.name + '-container').classList.remove('disable-scrolling');
      } else {
        document.getElementById(this.name + '-container').classList.add('disable-scrolling');
      }
    }
  }

  @Output() hitTop = new EventEmitter<void>();
  @Output() hitBottom = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  checkScrollHit(): void {
    let eventElement = document.getElementById(`${this.name}-container`);
    if (eventElement.scrollTop + eventElement.clientHeight >= eventElement.scrollHeight - 5) { // close enough to bottom
      // HIT BOTTOM!
      this.hitBottom.emit();

    } else if (eventElement.scrollTop == 0) {
      // HIT TOP!
      this.hitTop.emit();
    }
  }
}
