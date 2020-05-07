import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "yoga-ui-chart-card",
  styleUrl: "yoga-ui-chart-card.css",
  shadow: true
})
export class YogaUiChartCard {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
