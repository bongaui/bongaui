import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget as react } from '@stencil/react-output-target';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'bonga',
  outputTargets: [
    /* react({
      componentCorePackage: 'components-react',
      proxiesFile: './frameworks/components-react/src/index.ts',
      includeDefineCustomElements: true,
    }), */
    angularOutputTarget({
      componentCorePackage: '@bongaui/core',
      directivesProxyFile: '../angular/src/directives/proxies.ts',
      directivesArrayFile: '../angular/src/directives/proxies-list.txt',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
      copy: [
        {
          src: '../scripts/custom-elements',
          dest: 'components',
          warn: true,
        },
      ],
      includeGlobalScripts: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [sass()],
};
