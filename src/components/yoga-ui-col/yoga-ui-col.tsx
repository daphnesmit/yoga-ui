import { Component, Host, h, Prop, Watch } from "@stencil/core";

import { grid } from "../../utils/grid";

@Component({
  tag: "yoga-ui-col",
  styleUrl: "yoga-ui-col.scss",
  shadow: true
})
export class YogaUiCol {
  /**
   * The JSON stringified colums per breakpoint. Example: `cols="[12,6,4]"`
   */
  @Prop() cols: string | number;
  /**
   * The parsed cols to use in JSX. Computed value.
   */
  @Prop({ mutable: true }) parsedCols: number[];

  componentWillLoad() {
    this.parseColsProp(this.cols);
  }

  getColumnClassesByBreakpoint(col: number, i: number) {
    const firstColumnClass = `col-${col}`;
    if (!i) {
      return firstColumnClass;
    }
    return col && `col-${grid.breakpoints[i - 1]}-${col}`;
  }

  getColumnClasses() {
    return this.parsedCols && this.parsedCols.length
      ? this.parsedCols.map(this.getColumnClassesByBreakpoint).join(" ")
      : `col-${this.cols}`;
  }

  @Watch("cols")
  parseColsProp(cols: string | number) {
    if (cols && typeof cols === "string") this.parsedCols = JSON.parse(cols);
  }
  render() {
    return (
      <Host class={this.getColumnClasses()}>
        <slot></slot>
      </Host>
    );
  }
}
