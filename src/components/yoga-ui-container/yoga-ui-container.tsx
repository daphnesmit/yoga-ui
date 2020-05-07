import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "yoga-ui-container",
  styleUrl: "yoga-ui-container.scss",
  shadow: true
})
export class YogaUiContainer {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
