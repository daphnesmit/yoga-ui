import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "yoga-ui-spacer",
  styleUrl: "yoga-ui-spacer.scss",
  shadow: true
})
export class YogaUiSpacer {
  @Prop() p: number;
  @Prop() px: number;
  @Prop() py: number;
  @Prop() m: number;
  @Prop() mx: number;
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
