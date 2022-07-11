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
  webDesInView = false;
  graphicDesInView = false;
  webDevInView = false;
  inScrollingMotion = false;

  ngOnInit(): void {
    this.fakeBody = document.querySelector(".fake-body");
    let prewindowScrollHeight = document.getElementById("prewindow").scrollHeight;
    let scrollTimeout: any;
    let thissy = this;

    this.fakeBody.addEventListener("scroll", () => {
      if (this.fakeBody.scrollTop + window.innerHeight >= prewindowScrollHeight) {
        this.scrollTo('wedDesignWindow');
      }
    });
  }

  scrollTo(section: string): void {
    this.windowInView = section;

    if (!this.inScrollingMotion) {
      this.inScrollingMotion = true;
      
      // set the current window to notInView

      $('#fakeBody').animate({
        scrollTop: document.getElementById(section).offsetTop
      }, 600, 'swing', () => {
        setTimeout(() => {
          this.inScrollingMotion = false;
          
          if (section !== 'prewindow')
            this.fakeBody.classList.add('disable-scrolling');
          else
            this.fakeBody.classList.remove('disable-scrolling');

            // set the current window to inView
        }, 600);
      });
    }
  }

}
