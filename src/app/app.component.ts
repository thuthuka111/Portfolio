import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModalContainerComponent } from './modal-container/modal-container.component';
import { WindowService, Window } from './window.service';

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
  homeBodyScroling = true;
  windows: Window[] = [];
  windowMap = new Map<string, Window>();

  inScrollingMotion = false;

  constructor(private windowService: WindowService) {
    $.extend($.easing, {//commment out for offline working
      easeInOutQuint: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
      }
    });
  }

  ngOnInit(): void {
    this.windows = this.windowService.getWindows();
    this.windows.forEach((window) => {
      this.windowMap.set(window.id, window);
    });
  }

  ngAfterViewInit(): void {
    this.fakeBody = document.getElementById('fakeBody');
    let prewindowScrollHeight = document.getElementById("prewindow").scrollHeight;

    this.fakeBody.addEventListener("scroll", () => { // disabled because the property isnt the right height when rendering
      if (!this.inScrollingMotion && this.windowInView == 'prewindow' && this.fakeBody.scrollTop + window.innerHeight >= prewindowScrollHeight) {
        this.scrollTo(this.windows[0].id);// map
      }
    });
  }

  scrollTo(section: string): void { // comment out for offline working
    // this.windowInView = section;

    if (!this.inScrollingMotion) {
      this.inScrollingMotion = true;

      // set the current window to notInView
      if (this.windowInView == 'prewindow') {
        this.homeBodyScroling = false;
      } else {
        this.windowMap.get(this.windowInView).inView = false;
        this.windowMap.get(this.windowInView).scrolling = false;
      }
      // for good timings
      let windowJump: number = Math.min(2, Math.abs(this.windows.indexOf(this.windowMap.get(section)) - this.windows.indexOf(this.windowMap.get(this.windowInView))));

      setTimeout(() => {// allow window to collapse
        $('#fakeBody').animate({
          scrollTop: document.getElementById(section).offsetTop
        }, windowJump * 700, 'easeInOutQuint', () => {
          this.windowInView = section;
          this.inScrollingMotion = false;
        });
        setTimeout(() => {
          console.log("entering " + section);

          // set the current window to inView
          if (section == 'prewindow') {
            this.homeBodyScroling = true;
          } else {
            this.windowMap.get(section).inView = true;
            this.windowMap.get(section).scrolling = true;
          }
          // this.currentWindow = this.windowMap.get(section);
        }, (windowJump * 700) - 350);
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

  openLink(link: string): void {
    window.open(link, "_blank");
  }

}
