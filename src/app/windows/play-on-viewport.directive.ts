import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[playOnViewport]'
})
export class PlayOnViewportDirective {

  constructor(private el: ElementRef<HTMLVideoElement>) {
    if (el.nativeElement.tagName == 'VIDEO') {
      let intersectionObserverOptions = {
        threshold: 1.0
      };
      let obvserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting)
            this.el.nativeElement.play();
          else
            this.el.nativeElement.pause();
        });
      }, intersectionObserverOptions);

      obvserver.observe(this.el.nativeElement);
    } else {
      console.error("playOnViewport directive can only be used on video Elements")
    }
  }
}
