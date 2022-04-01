import { applyPolyfills, defineCustomElements } from '@bongaui/core/loader';

export const appInitialize = () => {
  return (): any => {
    if (typeof (window as any) !== 'undefined') {
      return applyPolyfills().then(() => {
        return defineCustomElements(window);
      });
    }
  };
};
