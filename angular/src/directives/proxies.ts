/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { ProxyCmp } from './angular-component-lib/utils';

import { Components } from '@bongaui/core';




export declare interface BongaButton extends Components.BongaButton {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['color', 'expand']
})
@Component({
  selector: 'bonga-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['color', 'expand']
})
export class BongaButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
