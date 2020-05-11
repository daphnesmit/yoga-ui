import { select } from "@storybook/addon-knobs";
import readme from "./readme.md";

export default {
  title: "Heading",
  parameters: {
    notes: {
      markdown: readme
    },
    jest: ["yoga-ui-heading"]
  }
};

export const example = () =>
  `<yoga-ui-heading 
    as="${select("element", ["h1", "h2", "h3", "h4", "h5", "h6"], "h1")}" 
    variant="${select("variant", ["medium", "bold", "dark"], "")}">Heading</yoga-ui-heading> `;
