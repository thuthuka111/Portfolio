import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

interface Media {
  mediaURL: string,
  description?: string,
  image: boolean,
}

@Injectable({
  providedIn: 'root'
})
export class FullscreenViewerService {

  fullscreen$ = new BehaviorSubject<boolean>(false);
  media$ = new BehaviorSubject<Media[]>([]);

  newFullscreenContext(mediaArr: Media[]) {
    this.fullscreen$.next(true);
    this.media$.next(mediaArr);
  }
}
