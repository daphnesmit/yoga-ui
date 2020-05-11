import { number } from "@storybook/addon-knobs";
import readme from "./readme.md";

export default {
  title: "Progress",
  parameters: {
    notes: {
      markdown: readme
    },
    jest: ["yoga-ui-progress"]
  }
};

export const example = () =>
  `<yoga-ui-progress percentage="${number("percentage", 70)}" /> `;
