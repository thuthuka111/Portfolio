import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  ngOnInit(): void {
    let fakeBody = document.querySelector(".fake-body");
    let prewindowScrollHeight = document.getElementById("prewindow").scrollHeight;
    fakeBody.addEventListener("scroll", () => {
      if (fakeBody.scrollTop + window.innerHeight >= prewindowScrollHeight) {
        document.getElementById("prewindow").scrollIntoView(true);
      }
    });
  }

}
