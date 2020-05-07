import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "yoga-ui-card",
  styleUrl: "yoga-ui-card.scss",
  shadow: true
})
export class YogaUiCard {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
