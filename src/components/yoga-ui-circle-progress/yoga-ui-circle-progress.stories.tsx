import { number, boolean } from "@storybook/addon-knobs";
import readme from "./readme.md";

export default {
  title: "Circle Progress",
  parameters: {
    notes: {
      markdown: readme
    },
    jest: ["yoga-ui-circle-progress"]
  }
};

export const example = () =>
  `<yoga-ui-circle-progress  animate-text="${boolean("animate text", true)}" percentage="${number("percentage", 75)}"/>`;
