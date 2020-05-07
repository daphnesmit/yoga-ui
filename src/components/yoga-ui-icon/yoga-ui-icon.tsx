import { Component, h, Prop } from "@stencil/core";

import plus from "../../assets/svg/icon/plus.svg";
import training from "../../assets/svg/training.svg";

const icons = {
  plus,
  training
};

@Component({
  tag: "yoga-ui-icon",
  styleUrl: "yoga-ui-icon.scss",
  shadow: true
})
export class YogaUiIcon {
  @Prop() icon!: string;
  @Prop() width: string;
  @Prop() height: string;
  @Prop() color: string;

  render() {
    const icon = icons[this.icon] || "plus";
    return (
      <div
        class={{
          icon: true,
          [`icon--${this.color}`]: !!this.color
        }}
        style={{
          width: this.width || "14px",
          height: this.height || "14px"
        }}
        role="presentation"
        aria-hidden="true"
        innerHTML={icon}
      />
    );
  }
}
