import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  selector: 'modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css'],
  animations: [
    trigger('isInView', [
      state('inView', style({
        opacity: 1,
      })),
      state('notInView', style({
        opacity: 0,
      })),
      transition('inView <=> notInView', [
        animate('0.3s ease-in-out'),
      ]),
    ]),
  ]
})
export class ModalContainerComponent implements OnInit {
  _modalDisplay = false;
  transition = false;
  @Input() set modalDisplay(value: boolean) {
    if (value) {
      this.transition = true;
      this._modalDisplay = true;
    } else {
      this.transition = false;
      setTimeout(() => { this._modalDisplay = false; }, 300);
    }

  }
  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.close.emit();
  }
}
