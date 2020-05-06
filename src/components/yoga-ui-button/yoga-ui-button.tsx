import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "yoga-ui-button",
  styleUrl: "yoga-ui-button.css",
  shadow: true
})
export class YogaUiButton {
  /**
   * Button label
   */
  // @Prop() label: string;
  /**
   * Button is disabled
   */
  @Prop() disabled: boolean;

  render() {
    return (
      <Host
        disabled={this.disabled}
        class={{
          "is--disabled": this.disabled
        }}
      >
        <span><slot/></span>
      </Host>
    );
  }
}
