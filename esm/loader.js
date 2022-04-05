import { p as promiseResolve, b as bootstrapLazy } from './index-1cecd04b.js';

/*
 Stencil Client Patch Esm v2.14.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["bonga-button",[[1,"bonga-button",{"color":[513],"expand":[513]}]]]], options);
  });
};

export { defineCustomElements };
