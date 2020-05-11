import readme from "./readme.md";
import { select, number } from "@storybook/addon-knobs";

export default {
  title: "Icon",
  parameters: {
    notes: {
      markdown: readme
    },
    jest: ["yoga-ui-icon"]
  }
};

export const example = () =>
  `<yoga-ui-icon icon="${select(
    "variant",
    [
      "plus",
      "award",
      "training",
      "calendar",
      "filter",
      "heartbeat",
      "layout",
      "lightning",
      "people",
      "stats"
    ],
    "award"
  )}" 
  width="${number("width", 16)}px"
  height="${number("height", 16)}px"/>
  `;
