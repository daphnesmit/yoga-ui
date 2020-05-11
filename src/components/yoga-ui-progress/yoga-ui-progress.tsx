import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "yoga-ui-progress",
  styleUrl: "yoga-ui-progress.scss",
  shadow: true
})
export class YogaUiProgress {
  /**
   * The percentage of the circle that should be filled, for example 75%
   */
  @Prop() percentage!: string;
  render() {
    return (
      <div class="progress">
        <span class="progress__fill" style={{ width: `${this.percentage}%` }}></span>
      </div>
    );
  }
}
