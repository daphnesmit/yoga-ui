import { r as registerInstance, h, H as Host } from './index-c7e43cc7.js';

const yogaUiContainerCss = ":host{display:block;margin:auto;padding:0 var(--grid-container-padding);max-width:var(--grid-container-width)}";

const YogaUiContainer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
YogaUiContainer.style = yogaUiContainerCss;

export { YogaUiContainer as yoga_ui_container };
