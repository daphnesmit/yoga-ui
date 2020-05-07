import { r as registerInstance, h, H as Host } from './index-c7e43cc7.js';

const yogaUiRowCss = ":host{display:grid;grid-template-columns:repeat(12, [col-start] 1fr);grid-gap:var(--grid-padding)}";

const YogaUiRow = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
YogaUiRow.style = yogaUiRowCss;

export { YogaUiRow as yoga_ui_row };
