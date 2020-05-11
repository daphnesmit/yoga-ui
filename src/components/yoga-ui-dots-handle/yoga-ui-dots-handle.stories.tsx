import readme from "./readme.md";

export default {
  title: "Dots handle",
  parameters: {
    notes: {
      markdown: readme
    },
    jest: ["yoga-ui-dots-handle"]
  }
};

export const example = () =>
  `<yoga-ui-dots-handle />
  `;
