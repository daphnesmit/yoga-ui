import { Component, h, Prop } from "@stencil/core";

type Heading = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

@Component({
  tag: "yoga-ui-heading",
  styleUrl: "yoga-ui-heading.scss",
  shadow: true
})
export class YogaUiHeading {

  /**
   * The element to use for the heading.
   */
  @Prop() as!: Heading;
  /**
   * The style to use for the heading. Example: Style a h2 as a h1 by adding styleAs
   */
  @Prop() styleAs: Heading;
  /**
   * The heading variant. Example: medium, bold or dark
   */
  @Prop() variant: string;
  /**
   * Add margin bottom to the heading.
   */
  @Prop() spaceBottom: number;
  /**
   * Center the text on mobile
   */
  @Prop() centerMobile: boolean;

  render() {
    return (
      <this.as
        class={{
          [`${this.styleAs}`]: !!this.styleAs,
          [`heading--${this.variant}`]: !!this.variant,
          [`heading--center-mobile`]: !!this.centerMobile
        }}
        style={{
          marginBottom: `${this.spaceBottom}px`
        }}
      >
        <slot></slot>
      </this.as>
    );
  }
}
