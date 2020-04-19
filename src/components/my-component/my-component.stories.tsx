import { text } from "@storybook/addon-knobs";
import readme from "./readme.md";

export default {
  title: "My Component",
  parameters: {
    notes: {
      markdown: readme,
    },
    jest: ["my-component"]
  },
};

export const example = () =>
  `<my-component first="${text("first", "Millie")}" middle="Bobby" last="Brown"></my-component>`;
