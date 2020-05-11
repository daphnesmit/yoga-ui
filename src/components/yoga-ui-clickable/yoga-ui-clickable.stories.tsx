import readme from "./readme.md";

export default {
  title: "Clickable",
  parameters: {
    notes: {
      markdown: readme
    },
    jest: ["yoga-ui-clickable"]
  }
};

export const example = () =>
  `
  <yoga-ui-clickable>
    Click this
  </yoga-ui-clickable>
  `;
