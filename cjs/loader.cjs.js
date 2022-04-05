'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-09b0a9a6.js');

/*
 Stencil Client Patch Esm v2.14.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["bonga-button.cjs",[[1,"bonga-button",{"color":[513],"expand":[513]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
