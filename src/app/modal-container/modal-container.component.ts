import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'modal-container',
  templateUrl: './modal-container.component.html',
  styleUrls: ['./modal-container.component.css']
})
export class ModalContainerComponent implements OnInit {
  @Output() close = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(): void {
    this.close.emit();
  }
}
