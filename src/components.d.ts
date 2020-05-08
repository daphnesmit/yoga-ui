/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface YogaUiButton {
        "disabled": boolean;
        "endIcon": string;
        "iconSize": string;
        "startIcon": string;
        "variant": string;
    }
    interface YogaUiCard {
    }
    interface YogaUiCategory {
    }
    interface YogaUiChartCard {
        "category": string;
    }
    interface YogaUiCircleProgress {
        "color": string;
        "percentage": string;
    }
    interface YogaUiClickable {
    }
    interface YogaUiCol {
        "cols": string | number;
    }
    interface YogaUiContainer {
    }
    interface YogaUiCta {
    }
    interface YogaUiDotsHandle {
    }
    interface YogaUiHeading {
        "as": Heading;
        "spaceBottom": number;
        "styleAs": Heading;
        "variant": string;
    }
    interface YogaUiIcon {
        "color": string;
        "height": string;
        "icon": string;
        "width": string;
    }
    interface YogaUiProgress {
        "percentage": string;
    }
    interface YogaUiRow {
    }
    interface YogaUiSection {
    }
    interface YogaUiText {
        "as": Text;
        "styleAs": Text;
        "variant": string;
    }
}
declare global {
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLYogaUiButtonElement extends Components.YogaUiButton, HTMLStencilElement {
    }
    var HTMLYogaUiButtonElement: {
        prototype: HTMLYogaUiButtonElement;
        new (): HTMLYogaUiButtonElement;
    };
    interface HTMLYogaUiCardElement extends Components.YogaUiCard, HTMLStencilElement {
    }
    var HTMLYogaUiCardElement: {
        prototype: HTMLYogaUiCardElement;
        new (): HTMLYogaUiCardElement;
    };
    interface HTMLYogaUiCategoryElement extends Components.YogaUiCategory, HTMLStencilElement {
    }
    var HTMLYogaUiCategoryElement: {
        prototype: HTMLYogaUiCategoryElement;
        new (): HTMLYogaUiCategoryElement;
    };
    interface HTMLYogaUiChartCardElement extends Components.YogaUiChartCard, HTMLStencilElement {
    }
    var HTMLYogaUiChartCardElement: {
        prototype: HTMLYogaUiChartCardElement;
        new (): HTMLYogaUiChartCardElement;
    };
    interface HTMLYogaUiCircleProgressElement extends Components.YogaUiCircleProgress, HTMLStencilElement {
    }
    var HTMLYogaUiCircleProgressElement: {
        prototype: HTMLYogaUiCircleProgressElement;
        new (): HTMLYogaUiCircleProgressElement;
    };
    interface HTMLYogaUiClickableElement extends Components.YogaUiClickable, HTMLStencilElement {
    }
    var HTMLYogaUiClickableElement: {
        prototype: HTMLYogaUiClickableElement;
        new (): HTMLYogaUiClickableElement;
    };
    interface HTMLYogaUiColElement extends Components.YogaUiCol, HTMLStencilElement {
    }
    var HTMLYogaUiColElement: {
        prototype: HTMLYogaUiColElement;
        new (): HTMLYogaUiColElement;
    };
    interface HTMLYogaUiContainerElement extends Components.YogaUiContainer, HTMLStencilElement {
    }
    var HTMLYogaUiContainerElement: {
        prototype: HTMLYogaUiContainerElement;
        new (): HTMLYogaUiContainerElement;
    };
    interface HTMLYogaUiCtaElement extends Components.YogaUiCta, HTMLStencilElement {
    }
    var HTMLYogaUiCtaElement: {
        prototype: HTMLYogaUiCtaElement;
        new (): HTMLYogaUiCtaElement;
    };
    interface HTMLYogaUiDotsHandleElement extends Components.YogaUiDotsHandle, HTMLStencilElement {
    }
    var HTMLYogaUiDotsHandleElement: {
        prototype: HTMLYogaUiDotsHandleElement;
        new (): HTMLYogaUiDotsHandleElement;
    };
    interface HTMLYogaUiHeadingElement extends Components.YogaUiHeading, HTMLStencilElement {
    }
    var HTMLYogaUiHeadingElement: {
        prototype: HTMLYogaUiHeadingElement;
        new (): HTMLYogaUiHeadingElement;
    };
    interface HTMLYogaUiIconElement extends Components.YogaUiIcon, HTMLStencilElement {
    }
    var HTMLYogaUiIconElement: {
        prototype: HTMLYogaUiIconElement;
        new (): HTMLYogaUiIconElement;
    };
    interface HTMLYogaUiProgressElement extends Components.YogaUiProgress, HTMLStencilElement {
    }
    var HTMLYogaUiProgressElement: {
        prototype: HTMLYogaUiProgressElement;
        new (): HTMLYogaUiProgressElement;
    };
    interface HTMLYogaUiRowElement extends Components.YogaUiRow, HTMLStencilElement {
    }
    var HTMLYogaUiRowElement: {
        prototype: HTMLYogaUiRowElement;
        new (): HTMLYogaUiRowElement;
    };
    interface HTMLYogaUiSectionElement extends Components.YogaUiSection, HTMLStencilElement {
    }
    var HTMLYogaUiSectionElement: {
        prototype: HTMLYogaUiSectionElement;
        new (): HTMLYogaUiSectionElement;
    };
    interface HTMLYogaUiTextElement extends Components.YogaUiText, HTMLStencilElement {
    }
    var HTMLYogaUiTextElement: {
        prototype: HTMLYogaUiTextElement;
        new (): HTMLYogaUiTextElement;
    };
    interface HTMLElementTagNameMap {
        "my-component": HTMLMyComponentElement;
        "yoga-ui-button": HTMLYogaUiButtonElement;
        "yoga-ui-card": HTMLYogaUiCardElement;
        "yoga-ui-category": HTMLYogaUiCategoryElement;
        "yoga-ui-chart-card": HTMLYogaUiChartCardElement;
        "yoga-ui-circle-progress": HTMLYogaUiCircleProgressElement;
        "yoga-ui-clickable": HTMLYogaUiClickableElement;
        "yoga-ui-col": HTMLYogaUiColElement;
        "yoga-ui-container": HTMLYogaUiContainerElement;
        "yoga-ui-cta": HTMLYogaUiCtaElement;
        "yoga-ui-dots-handle": HTMLYogaUiDotsHandleElement;
        "yoga-ui-heading": HTMLYogaUiHeadingElement;
        "yoga-ui-icon": HTMLYogaUiIconElement;
        "yoga-ui-progress": HTMLYogaUiProgressElement;
        "yoga-ui-row": HTMLYogaUiRowElement;
        "yoga-ui-section": HTMLYogaUiSectionElement;
        "yoga-ui-text": HTMLYogaUiTextElement;
    }
}
declare namespace LocalJSX {
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface YogaUiButton {
        "disabled"?: boolean;
        "endIcon"?: string;
        "iconSize"?: string;
        "startIcon"?: string;
        "variant"?: string;
    }
    interface YogaUiCard {
    }
    interface YogaUiCategory {
    }
    interface YogaUiChartCard {
        "category"?: string;
    }
    interface YogaUiCircleProgress {
        "color"?: string;
        "percentage"?: string;
    }
    interface YogaUiClickable {
    }
    interface YogaUiCol {
        "cols"?: string | number;
    }
    interface YogaUiContainer {
    }
    interface YogaUiCta {
        "onOnButtonClick"?: (event: CustomEvent<any>) => void;
    }
    interface YogaUiDotsHandle {
    }
    interface YogaUiHeading {
        "as": Heading;
        "spaceBottom"?: number;
        "styleAs"?: Heading;
        "variant"?: string;
    }
    interface YogaUiIcon {
        "color"?: string;
        "height"?: string;
        "icon": string;
        "width"?: string;
    }
    interface YogaUiProgress {
        "percentage": string;
    }
    interface YogaUiRow {
    }
    interface YogaUiSection {
    }
    interface YogaUiText {
        "as"?: Text;
        "styleAs"?: Text;
        "variant"?: string;
    }
    interface IntrinsicElements {
        "my-component": MyComponent;
        "yoga-ui-button": YogaUiButton;
        "yoga-ui-card": YogaUiCard;
        "yoga-ui-category": YogaUiCategory;
        "yoga-ui-chart-card": YogaUiChartCard;
        "yoga-ui-circle-progress": YogaUiCircleProgress;
        "yoga-ui-clickable": YogaUiClickable;
        "yoga-ui-col": YogaUiCol;
        "yoga-ui-container": YogaUiContainer;
        "yoga-ui-cta": YogaUiCta;
        "yoga-ui-dots-handle": YogaUiDotsHandle;
        "yoga-ui-heading": YogaUiHeading;
        "yoga-ui-icon": YogaUiIcon;
        "yoga-ui-progress": YogaUiProgress;
        "yoga-ui-row": YogaUiRow;
        "yoga-ui-section": YogaUiSection;
        "yoga-ui-text": YogaUiText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "yoga-ui-button": LocalJSX.YogaUiButton & JSXBase.HTMLAttributes<HTMLYogaUiButtonElement>;
            "yoga-ui-card": LocalJSX.YogaUiCard & JSXBase.HTMLAttributes<HTMLYogaUiCardElement>;
            "yoga-ui-category": LocalJSX.YogaUiCategory & JSXBase.HTMLAttributes<HTMLYogaUiCategoryElement>;
            "yoga-ui-chart-card": LocalJSX.YogaUiChartCard & JSXBase.HTMLAttributes<HTMLYogaUiChartCardElement>;
            "yoga-ui-circle-progress": LocalJSX.YogaUiCircleProgress & JSXBase.HTMLAttributes<HTMLYogaUiCircleProgressElement>;
            "yoga-ui-clickable": LocalJSX.YogaUiClickable & JSXBase.HTMLAttributes<HTMLYogaUiClickableElement>;
            "yoga-ui-col": LocalJSX.YogaUiCol & JSXBase.HTMLAttributes<HTMLYogaUiColElement>;
            "yoga-ui-container": LocalJSX.YogaUiContainer & JSXBase.HTMLAttributes<HTMLYogaUiContainerElement>;
            "yoga-ui-cta": LocalJSX.YogaUiCta & JSXBase.HTMLAttributes<HTMLYogaUiCtaElement>;
            "yoga-ui-dots-handle": LocalJSX.YogaUiDotsHandle & JSXBase.HTMLAttributes<HTMLYogaUiDotsHandleElement>;
            "yoga-ui-heading": LocalJSX.YogaUiHeading & JSXBase.HTMLAttributes<HTMLYogaUiHeadingElement>;
            "yoga-ui-icon": LocalJSX.YogaUiIcon & JSXBase.HTMLAttributes<HTMLYogaUiIconElement>;
            "yoga-ui-progress": LocalJSX.YogaUiProgress & JSXBase.HTMLAttributes<HTMLYogaUiProgressElement>;
            "yoga-ui-row": LocalJSX.YogaUiRow & JSXBase.HTMLAttributes<HTMLYogaUiRowElement>;
            "yoga-ui-section": LocalJSX.YogaUiSection & JSXBase.HTMLAttributes<HTMLYogaUiSectionElement>;
            "yoga-ui-text": LocalJSX.YogaUiText & JSXBase.HTMLAttributes<HTMLYogaUiTextElement>;
        }
    }
}
