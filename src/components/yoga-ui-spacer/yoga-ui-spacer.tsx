import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "yoga-ui-spacer",
  styleUrl: "yoga-ui-spacer.scss",
  shadow: true
})
export class YogaUiSpacer {
  /**
   * Padding
   */
  @Prop() p: number;
  /**
   * Padding left and padding right
   */
  @Prop() px: number;
  /**
   * Padding top and padding bottom
   */
  @Prop() py: number;
  /**
   * Margin
   */
  @Prop() m: number;
  /**
   * Margin left and padding right
   */
  @Prop() mx: number;
  /**
   * Margin top and padding bottom
   */
  @Prop() my: number;

  render() {
    return (
      <Host
        class={{
          [`p-${this.p}`]: !!this.p,
          [`px-${this.px}`]: !!this.px,
          [`py-${this.py}`]: !!this.py,
          [`m-${this.m}`]: !!this.m,
          [`mx-${this.mx}`]: !!this.mx,
          [`my-${this.my}`]: !!this.my,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
