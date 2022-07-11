import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  fakeBody: HTMLElement;

  windowInView = 'prewindow';
  windows = [
    { name: 'prewindow', inView: false, scrolling: true },
    { name: 'WebDesign', inView: false, scrolling: false },
    { name: 'GraphicDesign', inView: false, scrolling: false },
    { name: 'WebDevelopment', inView: false, scrolling: false },
  ];
  windowMap = new Map();

  inScrollingMotion = false;

  constructor() {
    this.windowMap.set('prewindow', 0);
    this.windowMap.set('wedDesignWindow', 1);
    this.windowMap.set('graphicDesignWindow', 2);
    this.windowMap.set('webDevWindow', 3);
  }

  ngOnInit(): void {
    this.fakeBody = document.querySelector(".fake-body");
    let prewindowScrollHeight = document.getElementById("prewindow").scrollHeight;

    this.fakeBody.addEventListener("scroll", () => {
      if (!this.inScrollingMotion && this.windowInView == 'prewindow' && this.fakeBody.scrollTop + window.innerHeight >= prewindowScrollHeight) {
        this.scrollTo('wedDesignWindow');
      }
    });
  }

  scrollTo(section: string): void {
    // this.windowInView = section;

    if (!this.inScrollingMotion) {
      this.inScrollingMotion = true;

      // set the current window to notInView
      this.windows[this.windowMap.get(this.windowInView)].inView = false;
      this.windows[this.windowMap.get(this.windowInView)].scrolling = false;

      setTimeout(() => {// allow window to collapse
        $('#fakeBody').animate({
          scrollTop: document.getElementById(section).offsetTop
        }, 700, 'swing', () => {
          setTimeout(() => {
            console.log("entering " + section);
            this.inScrollingMotion = false;

            // set the current window to inView
            this.windows[this.windowMap.get(section)].inView = true;
            this.windows[this.windowMap.get(section)].scrolling = true;

            this.windowInView = section;
          }, 300);
        });
      }, 400);

    }
  }

}
