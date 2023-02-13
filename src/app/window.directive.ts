import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[windowHost]'
})
export class WindowDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
