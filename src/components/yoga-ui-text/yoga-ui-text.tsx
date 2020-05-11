import { Component, h, Prop } from "@stencil/core";

type Text =
  | "p"
  | "small"
  | "strong"
  | "em"
  | "span"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "label";
@Component({
  tag: "yoga-ui-text",
  styleUrl: "yoga-ui-text.scss",
  shadow: true
})
export class YogaUiText {
  /**
   * The element to use for the text. Defaults to `span`
   */
  @Prop() as: Text = "span";
  /**
   * The style to use for the text. Example: Style a p as a span by adding styleAs
   */
  @Prop() styleAs: Text;
  /**
   * The text variant. Will render a modifier class, so if you send 'primary' it will become: `text--primary`
   */
  @Prop() variant: string;

  render() {
    return (
      <this.as
        class={{
          [`${this.styleAs}`]: !!this.styleAs,
          [`text--${this.variant}`]: !!this.variant
        }}
      >
        <slot></slot>
      </this.as>
    );
  }
}
