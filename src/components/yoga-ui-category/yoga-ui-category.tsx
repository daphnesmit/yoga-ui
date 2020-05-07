import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "yoga-ui-category",
  styleUrl: "yoga-ui-category.scss",
  shadow: true
})
export class YogaUiCategory {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
