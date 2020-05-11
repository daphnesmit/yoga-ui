import { text } from "@storybook/addon-knobs";
import readme from "./readme.md";

export default {
  title: "Card",
  parameters: {
    notes: {
      markdown: readme
    },
    jest: ["yoga-ui-card"]
  }
};

export const example = () =>
  `
  <yoga-ui-card category="Gear" has-handle="true">
    <yoga-ui-heading as="h3" style-as="h2">${text("title", "This is a heading")}</yoga-ui-heading>
    <yoga-ui-text as="p">${text("label", "This is the card contents")}</yoga-ui-text>
    <yoga-ui-progress percentage="70"/>
  </yoga-ui-card>
    
  `;
