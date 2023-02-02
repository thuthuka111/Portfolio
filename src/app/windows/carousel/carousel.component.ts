import { Component } from '@angular/core';

interface Media {
  mediaUrl: string,
  description?: string,
  image: boolean,
}

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent {
  mediaArr: Media[] = [
    { mediaUrl: 'src/app/assets/images/image.jpg', description: 'little desc', image: true },
    { mediaUrl: 'src/app/assets/images/image.jpg', description: 'little desc', image: true },
    { mediaUrl: 'src/app/assets/images/image.jpg', description: 'little desc', image: true },
  ]
}
