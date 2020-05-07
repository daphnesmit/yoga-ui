import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "yoga-ui-row",
  styleUrl: "yoga-ui-row.scss",
  shadow: true
})
export class YogaUiRow {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
