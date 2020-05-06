import { text } from "@storybook/addon-knobs";
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
  `<yoga-ui-button>${text("label", "I am a Button")}</yoga-ui-button>`;
