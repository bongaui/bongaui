import { p as promiseResolve, b as bootstrapLazy } from './index-1cecd04b.js';

/*
 Stencil Client Patch Browser v2.14.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["bonga-button",[[1,"bonga-button",{"color":[513],"expand":[513]}]]]], options);
});
