import { CommonModule } from '@angular/common';
import { appInitialize } from './app-initialize';

import { ModuleWithProviders, APP_INITIALIZER, NgModule } from '@angular/core';

import { BongaButton } from './directives/proxies';

const DECLARATIONS = [BongaButton];

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
  imports: [CommonModule],
})
export class BongaUIModule {
  static forRoot(): ModuleWithProviders<BongaUIModule> {
    return {
      ngModule: BongaUIModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: appInitialize,
          multi: true,
        },
      ],
    };
  }
}
