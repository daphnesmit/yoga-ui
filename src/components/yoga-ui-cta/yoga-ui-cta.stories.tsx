import readme from "./readme.md";
import { text } from "@storybook/addon-knobs";

export default {
  title: "Cta",
  parameters: {
    notes: {
      markdown: readme
    },
    jest: ["yoga-ui-cta"]
  }
};

export const example = () =>
  `<yoga-ui-cta>${text('text', 'I am a CTA')}</yoga-ui-cta>`;
