import { Component, h, Prop, Watch } from "@stencil/core";

interface Item {
  name: string;
  color: string;
}
@Component({
  tag: "yoga-ui-chart-legend",
  styleUrl: "yoga-ui-chart-legend.scss",
  shadow: true
})
export class YogaUiChartLegend {
  @Prop() items: string;
  @Prop() parsedItems: Item[];

  componentWillLoad() {
    if (typeof this.items === "string") this.parseItemsProp(this.items);
  }

  @Watch("items")
  parseItemsProp(items: string) {
    this.parsedItems = JSON.parse(items);
  }

  render() {
    console.log(this.parsedItems);
    return (
      <ul class="chart-legend">
        {this.parsedItems.map((item: Item) => (
          <li
            class={{
              "chart-legend__item": true,
              [`chart-legend__item--${item.color}`]: !!item.color
            }}
          >
            <span class="chart-legend__item-name">{item.name}</span>
          </li>
        ))}
      </ul>
    );
  }
}
