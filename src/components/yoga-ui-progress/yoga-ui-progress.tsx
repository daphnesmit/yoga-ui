import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "yoga-ui-progress",
  styleUrl: "yoga-ui-progress.scss",
  shadow: true
})
export class YogaUiProgress {
  @Prop() percentage!: string;
  render() {
    return (
      <div class="progress">
        <span class="progress__fill" style={{ width: `${this.percentage}%` }}></span>
      </div>
    );
  }
}
