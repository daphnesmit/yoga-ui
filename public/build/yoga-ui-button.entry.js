import { r as registerInstance, h } from './index-c7e43cc7.js';

const yogaUiButtonCss = ".button{display:inline-block;text-align:center;line-height:1.3;user-select:none;position:relative;cursor:pointer;border:0;border-radius:4px;padding:14px 24px;font-size:1rem;outline:none;transition:background-color 200ms ease-out}.button:disabled{color:var(--color-grey-medium);background-color:var(--color-secondary-light);cursor:not-allowed}.button--primary{color:var(--color-white);background-color:var(--color-primary)}.button--primary:not(:disabled):hover{background-color:var(--color-primary-light)}.button--primary:not(:disabled):hover:active{background-color:var(--color-primary-dark)}.button--secondary{color:var(--color-grey-dark);background-color:var(--color-secondary-light);transition:background-color 200ms ease-out, box-shadow 200ms ease-out;box-shadow:inset 0 0 0 1px var(--color-secondary-light)}.button--secondary:not(:disabled):hover{background-color:transparent;color:var(--color-primary);box-shadow:inset 0 0 0 1px var(--color-primary)}.button--secondary:not(:disabled):hover:active{background-color:var(--color-primary);color:var(--color-white)}";

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
