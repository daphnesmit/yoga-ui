// my-component.stories.js
import readme from "./readme.md";

// export default {
//   title: "My Component",
//   parameters: {
//     markdown: readme,
//   },
// };

export default {
  /**
   * Notes is an optional string which will be displayed in the "Notes"
   * tab for your component. It is recommended to use the generated readme,
   * however any string should suffice. This supports markdown.
   */
  notes: readme,
  /**
   * The knobs object lets you configure different knobs for
   * different @Props on your component. This lets you pick
   * the "type" of knob and lets you pass additional arguments.
   *
   * NOTE: the "label" is generated for you. If you want to change
   * this you will need to update the stencil story generator.
   *
   * NOTE: if your property has the word "date" in it, a date knob
   * will be used. If your property has the work "color" init, a color
   * knob will be used.
   *
   * NOTE: you can refernce @Props using camelCase or kebab-case.
   */

  knobs: {
    // This willresult in the following call to knobs:
    // knobs.color('poorly-named-prop', 'rgba(000, 111, 222, 1)');
    first: {
      type: "text",
      args: "Millie"
    },
  },
  /**
   * The states array is a list of additional states to display your
   * component. This is kind of a lightweight version of the "chapters".
   * Each state can have a title, description, and props.
   */
  states: [],
};

// export const Default = () => `
//   <my-component first="Millie" middle="Bobby" last="Brown"></my-component>
// `;
