import { text, select } from "@storybook/addon-knobs";
import readme from "./readme.md";

export default {
  title: "Button",
  parameters: {
    notes: {
      markdown: readme,
    },
    jest: ["yoga-ui-button"]
  },
};

export const example = () =>
  `<yoga-ui-button variant="${select('variant', ["primary", "secondary"], "primary")}">${text("label", "I am a Button")}</yoga-ui-button>`;
