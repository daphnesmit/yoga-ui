import { Component, Host, h, Prop, Watch } from "@stencil/core";

import { grid } from "../../utils/grid";

@Component({
  tag: "yoga-ui-col",
  styleUrl: "yoga-ui-col.scss",
  shadow: true
})
export class YogaUiCol {
  @Prop() cols: string | number;

  componentWillLoad() {
    this.parseColsProp(this.cols);
  }

  getColumnClassesByBreakpoint(col, i) {
    const firstColumnClass = `col-${col}`;
    if (!i) {
      return firstColumnClass;
    }
    return col && `col-${grid.breakpoints[i - 1]}-${col}`;
  }
  
  getColumnClasses() {
    return this.cols && Array.isArray(this.cols)
      ? this.cols.map(this.getColumnClassesByBreakpoint).join(" ")
      : `col-${this.cols}`;
  }

  @Watch("cols")
  parseColsProp(cols: string | number) {
    if (cols && typeof cols === "string") this.cols = JSON.parse(cols);
  }
  render() {
    return (
      <Host class={this.getColumnClasses()}>
        <slot></slot>
      </Host>
    );
  }
}
