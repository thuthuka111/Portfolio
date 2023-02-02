import { Component } from '@angular/core';
import { FullscreenViewerService } from '../fullscreen-viewer-service.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'fullscreen-viewer',
  templateUrl: './fullscreen-viewer.component.html',
  styleUrls: ['./fullscreen-viewer.component.sass']
})
export class FullscreenViewerComponent {

  constructor(private fullscreenService: FullscreenViewerService) {
    this.media$.subscribe((mediaIGuess) => {
      console.log(mediaIGuess);
    });
  }

  fullscreen$ = this.fullscreenService.fullscreen$;
  media$ = this.fullscreenService.media$;

  fullscreenMinimize() {
    this.fullscreenService.fullscreen$.next(false);
  }

  clickedImage(event: Event) {
    event.stopPropagation();
  }
}
