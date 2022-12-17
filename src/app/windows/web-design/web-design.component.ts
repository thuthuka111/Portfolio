import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'web-design',
  templateUrl: './web-design.component.html',
  styleUrls: ['./web-design.component.css', '../common-styles.css']
})
export class WebDesignComponent implements OnInit {
  showHippyModal = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleHippyModal(): void {
    if (!this.showHippyModal) {
      this.showHippyModal = true;
    } else {
      this.showHippyModal = false;
    }
  }
}
