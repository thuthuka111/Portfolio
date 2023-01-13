import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
  query,
  animateChild,
} from '@angular/animations';

@Component({
  selector: 'window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.css'],
  animations: [
    trigger('navigatePrompt', [
      state('hidden', style({
        backgroundColor: '#f0f8ff00',
      })),
      state('prompt', style({
        backgroundColor: '#f0f8ff24',
      })),
      transition('hidden <=> prompt', [
        animate('0.3s ease-in'),
      ]),
    ]),
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
        group([
          query('@content', animateChild()),
          animate('0.3s ease-in-out'),
        ]),
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
export class WindowComponent implements AfterViewInit {
  @Input('view') isInView: boolean;// make string that can be 4 things
  @Input() name: string
  @Input() backgroundClass: string;
  @Input() borderColor: string;
  @Input() scrolling: boolean = false;

  @Output() hitTop = new EventEmitter<void>();
  @Output() hitBottom = new EventEmitter<void>();

  topButtonState: 'hidden' | 'prompt' = 'hidden';
  bottomButtonState: 'hidden' | 'prompt' = 'hidden';

  contentState = "below";
  stateSet = false;

  constructor() { }

  ngAfterViewInit(): void {
    let eventElement = document.getElementById(`${this.name}-container`);
    let timer;
    let thissy = this;

    eventElement.addEventListener('wheel', () => {
      clearTimeout(timer);
      timer = setTimeout(function () {
        if (eventElement.scrollTop == 0) {
          // thissy.goUp();
          thissy.topButtonState = 'prompt';
          setTimeout(() => {
            thissy.topButtonState = 'hidden';
          }, 1000);
        }
        if (eventElement.scrollTop + eventElement.clientHeight >= eventElement.scrollHeight - 5) {
          // thissy.goDown();
          thissy.bottomButtonState = 'prompt';
          setTimeout(() => {
            thissy.bottomButtonState = 'hidden';
          }, 1000);
        }
      }, 130);

    });
  }

  stateChange(): void {
    if (this.isInView) {
      this.contentState = "inView";
    } else {
      this.stateSet = true;
    }
  }

  goUp(): void {
    this.contentState = "below";
    this.hitTop.emit();
  }

  goDown(): void {
    this.contentState = "above";
    this.hitBottom.emit();
  }
}
