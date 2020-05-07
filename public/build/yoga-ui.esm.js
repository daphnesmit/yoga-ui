import { p as patchBrowser, b as bootstrapLazy } from './index-c7e43cc7.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["yoga-ui-button",[[1,"yoga-ui-button",{"variant":[1],"disabled":[4]}]]],["yoga-ui-col",[[1,"yoga-ui-col",{"cols":[8]}]]],["yoga-ui-container",[[1,"yoga-ui-container"]]],["yoga-ui-row",[[1,"yoga-ui-row"]]]], options);
});
