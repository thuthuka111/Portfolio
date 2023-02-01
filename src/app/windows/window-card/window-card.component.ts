import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

interface Media {
  mediaURL: string,
  description?: string,
  image: boolean,
}

@Component({
  selector: 'general-card',
  templateUrl: './window-card.component.html',
  styleUrls: ['./window-card.component.sass']
})
export class WindowCardComponent implements AfterViewInit {
  @ViewChild('media_platform') mediaPlatformEl: ElementRef<HTMLElement> | undefined;
  @ViewChild('text_platform') textPlatformEl: ElementRef<HTMLElement> | undefined;

  @ViewChild('media_shadow') mediaShadowEl: ElementRef<HTMLElement> | undefined;
  @ViewChild('text_shadow') textShadowEl: ElementRef<HTMLElement> | undefined;

  @ViewChild('media_container') mediaContainerEl: ElementRef<HTMLElement> | undefined;

  @Input() colour: string | undefined;
  @Input() shadowColour: string | undefined;
  @Input() text: string;
  @Input() media: Media[];
  @Input() reverse: boolean | string | undefined;
  @Input() widthDif: number | undefined;
  @Input() heightDif: number | undefined;

  ngAfterViewInit() {
    if (this.mediaContainerEl.nativeElement) {
      if (this.widthDif) {
        let baseWidth = 600;

        baseWidth += this.widthDif;
        this.mediaContainerEl.nativeElement.style.width = `${baseWidth}px`;
      }

      if (this.heightDif) {
        let baseHeight = 500;

        baseHeight += this.heightDif;
        this.mediaContainerEl.nativeElement.style.height = `${baseHeight}px`;
      }
    }

    if (this.mediaPlatformEl.nativeElement && this.textPlatformEl.nativeElement && this.colour) {
      this.textPlatformEl.nativeElement.style.backgroundColor = this.colour;
      this.mediaPlatformEl.nativeElement.style.backgroundColor = this.colour;
    }

    if (this.mediaShadowEl.nativeElement && this.textShadowEl.nativeElement && this.shadowColour) {
      this.mediaShadowEl.nativeElement.style.backgroundColor = this.shadowColour;
      this.textShadowEl.nativeElement.style.backgroundColor = this.shadowColour;
    }
  }
}
