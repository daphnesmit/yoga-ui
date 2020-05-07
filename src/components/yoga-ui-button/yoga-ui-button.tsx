import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "yoga-ui-button",
  styleUrl: "yoga-ui-button.scss",
  shadow: true
})
export class YogaUiButton {
  /**
   * Button label
   */
  @Prop() variant = "primary";
  /**
   * Button is disabled
   */
  @Prop() disabled: boolean;

  render() {
    return (
      <button
        disabled={this.disabled}
        class={{
          [`button button--${this.variant}`]: true,
          "is--disabled": this.disabled
        }}
      >
        <span>
          <slot></slot>
        </span>
      </button>
    );
  }
}
