import readme from "./readme.md";
import { text } from "@storybook/addon-knobs";

export default {
  title: "Category",
  parameters: {
    notes: {
      markdown: readme
    },
    jest: ["yoga-ui-category"]
  }
};

export const example = () =>
  `<yoga-ui-category>${text("category", "Category")}</yoga-ui-category>`;
