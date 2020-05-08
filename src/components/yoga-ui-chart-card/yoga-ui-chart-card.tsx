import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "yoga-ui-chart-card",
  styleUrl: "yoga-ui-chart-card.scss",
  shadow: true
})
export class YogaUiChartCard {
  @Prop() category: string;
  render() {
    return (
      <yoga-ui-card class="chart-card">
        <div class="chart-card__header">
          <yoga-ui-category>{this.category}</yoga-ui-category>
          <yoga-ui-clickable class="chart-card__handle">
            <yoga-ui-dots-handle />
          </yoga-ui-clickable>
        </div>
        <slot></slot>
      </yoga-ui-card>
    );
  }
}
