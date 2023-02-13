import { Injectable, Type } from '@angular/core';
import { GraphicDesignComponent } from './windows/graphic-design/graphic-design.component';
import { GraphicsEngineComponent } from './windows/graphics-engine/graphics-engine.component';
import { MultimediaComponent } from './windows/multimedia/multimedia.component';
import { NetworkingComponent } from './windows/networking/networking.component';
import { WebDesignComponent } from './windows/web-design/web-design.component';
import { WebDevComponent } from './windows/web-dev/web-dev.component';

export class WindowItemComponent {
  constructor(public component: Type<any>) { }
}

export interface WindowComponent { }

export interface Window {
  name: string,
  id: string,
  component?: WindowItemComponent,
  marginLeft?: string,// could attach this to the category card instead
  background?: string,
  scrolling?: boolean,
  inView?: boolean,
  below?: string,
  above?: string,
  enabled: boolean,
  borderColor?: string,
  backgroundClass?: string,
}

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  windows: Window[] = [
    {
      name: 'Web Development',
      id: "webDevWindow",
      component: new WindowItemComponent(WebDevComponent),
      marginLeft: '',
      background: 'radial-gradient(#9199A1, #5B6164)',
      enabled: true,
      backgroundClass: 'grey-background',
      borderColor: '#0F0B04'
    },
    {
      name: "Computer Graphics",
      id: "computerGraphicsWindow",
      component: new WindowItemComponent(GraphicsEngineComponent),
      marginLeft: '-20%',
      background: 'radial-gradient(#56B560, #232623)',
      enabled: true,
      backgroundClass: 'black-background',
      borderColor: '#0BA81A',
    },
    {
      name: "Networking",
      id: "networkingWindow",
      component: new WindowItemComponent(NetworkingComponent),
      marginLeft: '-27%',
      background: 'radial-gradient(#1c8db3, #2e3ca1)',
      enabled: true,
      backgroundClass: 'blue-wavy-background',
      borderColor: 'rgb(95 195 199)',
    },
    {
      name: 'Web Design',
      id: "wedDesignWindow",
      component: new WindowItemComponent(WebDesignComponent),
      marginLeft: '-16%',
      background: 'radial-gradient(#B2876E, #9C5323)',
      enabled: true,
      backgroundClass: 'brown-background',
      borderColor: '#6D491C',
    },
    {
      name: 'Graphic Design',
      id: "graphicDesignWindow",
      component: new WindowItemComponent(GraphicDesignComponent),
      marginLeft: '-27%',
      background: 'radial-gradient(#d6eef6, #e5d7f4)',
      enabled: false,
      backgroundClass: 'pastelle-background',
      borderColor: '#B5E9F9',
    },
    {
      name: 'Multimedia',
      id: "multimediaWindow",
      component: new WindowItemComponent(MultimediaComponent),
      marginLeft: '-20%',
      background: 'radial-gradient(rgb(94 178 115), #d83eb7)',
      enabled: false,
      backgroundClass: 'grid-background',
      borderColor: '#D60EAA',
    },
  ];

  getWindows(): Window[] {
    this.windows.filter(window => window.enabled).forEach((window, index, windowArr) => {
      if (index == 0) {
        window.above = 'prewindow';
        window.below = windowArr[1].id;
      } else if (index == windowArr.length - 1) {
        window.above = windowArr[windowArr.length - 1].id;
        window.below = 'prewindow';
      } else {
        window.above = windowArr[index - 1].id;
        window.below = windowArr[index + 1].id;
      }
      window.scrolling = false;
      window.inView = false;
    });

    return this.windows.filter(window => window.enabled);
  }

  constructor() { }
}
