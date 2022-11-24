import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModalContainerComponent } from './modal-container/modal-container.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'portfolio';
  fakeBody: HTMLElement;
  showContactModal = false;

  windowInView = 'prewindow';
  windows = [
    { name: 'home', inView: true, scrolling: true, id: "prewindow", below: '', above: '' },
    { name: 'Web Development', inView: false, scrolling: false, id: "webDevWindow", marginLeft: '', below: '7%', background: 'radial-gradient(#9199A1, #5B6164)', above: '' },
    { name: 'Web Design', inView: false, scrolling: false, id: "wedDesignWindow", marginLeft: '-16%', background: 'radial-gradient(#B2876E, #9C5323)', below: '', above: '' },
    { name: 'Graphic Design', inView: false, scrolling: false, id: "graphicDesignWindow", marginLeft: '-27%', background: 'radial-gradient(#d6eef6, #e5d7f4)', below: '', above: '' },
  ];
  categories = this.windows.slice(1);
  windowMap = new Map();

  inScrollingMotion = false;

  constructor() {
    for (let i = 1; i < this.windows.length; i++) {
      this.windows[i].above = this.windows[i - 1].id;
      this.windows[i].below = this.windows[(i + 1) % this.windows.length].id;
    }

    for (let i = 0; i < this.windows.length; i++) {
      this.windowMap.set(this.windows[i].id, i);
    }

    $.extend($.easing, {//commment out for offline working
      easeInOutQuint: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
      }
    });
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.fakeBody = document.getElementById('fakeBody');
    let prewindowScrollHeight = document.getElementById("prewindow").scrollHeight;

    this.fakeBody.addEventListener("scroll", () => { // disabled because the property isnt the right height when rendering
      if (!this.inScrollingMotion && this.windowInView == 'prewindow' && this.fakeBody.scrollTop + window.innerHeight >= prewindowScrollHeight) {
        this.scrollTo(this.windows[1].id);
      }
    });
  }

  scrollTo(section: string): void { // comment out for offline working
    // this.windowInView = section;

    if (!this.inScrollingMotion) {
      this.inScrollingMotion = true;

      // set the current window to notInView
      this.windows[this.windowMap.get(this.windowInView)].inView = false;
      this.windows[this.windowMap.get(this.windowInView)].scrolling = false;

      setTimeout(() => {// allow window to collapse
        $('#fakeBody').animate({
          scrollTop: document.getElementById(section).offsetTop
        }, 700, 'easeInOutQuint', () => {
          this.windowInView = section;
          this.inScrollingMotion = false;
        });
        setTimeout(() => {
          console.log("entering " + section);

          // set the current window to inView
          this.windows[this.windowMap.get(section)].inView = true;
          this.windows[this.windowMap.get(section)].scrolling = true;

        }, 350);
      }, 200);

    }
  }

  scrollToCategories(): void {
    $('#fakeBody').animate({
      scrollTop: document.getElementById("categories").offsetTop - 100
    }, 700, 'easeInOutQuint');
  }

  toggleContactModal(): void {
    if (!this.showContactModal) {
      this.windows[0].scrolling = false;
      this.showContactModal = true;
    } else {
      this.windows[0].scrolling = true;
      this.showContactModal = false;
    }
  }

}
