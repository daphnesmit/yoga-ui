import { Component, Host, h, Prop } from "@stencil/core";

type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

@Component({
  tag: "yoga-ui-heading",
  styleUrl: "yoga-ui-heading.scss",
  shadow: true
})
export class YogaUiHeading {
  @Prop() as!: Heading;
  @Prop() styleAs: Heading;
  @Prop() variant: string;

  render() {
    return (
      <Host>
        <this.as
          class={{
            [`${this.styleAs}`]: !!this.styleAs,
            [`heading--${this.variant}`]: !!this.variant
          }}
        >
          <slot></slot>
        </this.as>
      </Host>
    );
  }
}
