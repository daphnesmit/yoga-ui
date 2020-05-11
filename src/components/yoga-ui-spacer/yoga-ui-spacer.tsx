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
   * Padding top
   */
  @Prop() pt: number;
  /**
   * Padding bottom
   */
  @Prop() pb: number;
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
   * Margin top
   */
  @Prop() mt: number;
  /**
   * Margin bottom
   */
  @Prop() mb: number;
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
          [`pt-${this.pt}`]: !!this.pt,
          [`pb-${this.pb}`]: !!this.pb,
          [`px-${this.px}`]: !!this.px,
          [`py-${this.py}`]: !!this.py,
          [`m-${this.m}`]: !!this.m,
          [`mt-${this.mt}`]: !!this.mt,
          [`mb-${this.mb}`]: !!this.mb,
          [`mx-${this.mx}`]: !!this.mx,
          [`my-${this.my}`]: !!this.my,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
