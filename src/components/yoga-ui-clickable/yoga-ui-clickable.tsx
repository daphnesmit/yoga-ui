import { Component, h } from "@stencil/core";

@Component({
  tag: "yoga-ui-clickable",
  styleUrl: "yoga-ui-clickable.scss",
  shadow: true
})
export class YogaUiClickable {
  render() {
    return (
      <button type="button" class="clickable">
        <slot></slot>
      </button>
    );
  }
}
