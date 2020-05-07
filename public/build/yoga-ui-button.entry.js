import { r as registerInstance, h } from './index-c7e43cc7.js';

const yogaUiButtonCss = ".button{display:inline-block;text-align:center;line-height:1.3;user-select:none;position:relative;cursor:pointer;border:0;border-radius:4px;padding:14px 24px;font-size:1rem}.button:disabled{background-color:var(--color-secondary-light)}.button--primary{color:var(--color-white);background-color:var(--color-primary)}.button--primary:hover{background-color:var(--color-primary-light)}.button--primary:hover:active{background-color:var(--color-primary-dark)}";

const YogaUiButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Button label
         */
        this.variant = "primary";
    }
    render() {
        return (h("button", { disabled: this.disabled, class: {
                [`button button--${this.variant}`]: true,
                "is--disabled": this.disabled
            } }, h("span", null, h("slot", null))));
    }
};
YogaUiButton.style = yogaUiButtonCss;

export { YogaUiButton as yoga_ui_button };
