import { Component, h, Prop } from "@stencil/core";

import plus from "../../assets/svg/icon/plus.svg";
import training from "../../assets/svg/icon/training.svg";
import award from "../../assets/svg/icon/award.svg";
import calendar from "../../assets/svg/icon/calendar.svg";
import filter from "../../assets/svg/icon/filter.svg";
import heartbeat from "../../assets/svg/icon/heartbeat.svg";
import layout from "../../assets/svg/icon/layout.svg";
import lightning from "../../assets/svg/icon/lightning.svg";
import people from "../../assets/svg/icon/people.svg";
import stats from "../../assets/svg/icon/stats.svg";

import trainingIllustration from "../../assets/svg/training-illustration.svg";
import logo from "../../assets/svg/yoga-ui-logo.svg";

const icons = {
  plus,
  award,
  training,
  calendar,
  filter,
  heartbeat,
  layout,
  lightning,
  people,
  stats,
  trainingIllustration,
  logo
};
export type IconOption = keyof typeof icons;

@Component({
  tag: "yoga-ui-icon",
  styleUrl: "yoga-ui-icon.scss",
  shadow: true
})
export class YogaUiIcon {
  /**
   * The icon to render. For example `calendar`
   */
  @Prop() icon!: IconOption;
  /**
   * The icon width
   */
  @Prop() width: string;
  /**
   * The icon height
   */
  @Prop() height: string;
  /**
   * The icon color. Will render a modifier class, so if you send 'primary' it will become: `icon--primary`
   */
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
