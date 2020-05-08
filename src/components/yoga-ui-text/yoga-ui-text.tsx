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
  @Prop() as: Text = "span";
  @Prop() styleAs: Text;
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
