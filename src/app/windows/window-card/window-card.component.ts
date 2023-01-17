import { Component, Input } from '@angular/core';

interface Media {
  mediaUrl: string,
  description?: string,
  image: boolean,
}

@Component({
  selector: 'general-card',
  templateUrl: './window-card.component.html',
  styleUrls: ['./window-card.component.sass']
})
export class WindowCardComponent {
  @Input() text: string;
  @Input() media: Media[];
  @Input() reverse: boolean | undefined;
}
