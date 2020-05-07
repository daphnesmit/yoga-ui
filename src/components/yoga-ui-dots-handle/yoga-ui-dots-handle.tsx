import { Component, h } from "@stencil/core";

@Component({
  tag: "yoga-ui-dots-handle",
  styleUrl: "yoga-ui-dots-handle.scss",
  shadow: true
})
export class YogaUiDotsHandle {
  render() {
    return (
      <div class="dot">
        <span class="dot__item" />
      </div>
    );
  }
}
