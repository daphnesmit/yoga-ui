import { Component, Event, h } from "@stencil/core";

@Component({
  tag: "yoga-ui-cta",
  styleUrl: "yoga-ui-cta.scss",
  shadow: true
})
export class YogaUiCta {
  @Event() onButtonClick: (event: MouseEvent) => void;

  render() {
    return (
      <yoga-ui-card>
        <div class="cta">
          <yoga-ui-icon
            icon="trainingIllustration"
            width="170px"
            height="auto"
          />
          <yoga-ui-heading class="cta__heading" as="h3" style-as="h2">
            Make progress
          </yoga-ui-heading>
          <yoga-ui-text class="cta__text">with training plan</yoga-ui-text>
          <yoga-ui-button class="cta__button" onClick={this.onButtonClick}>
            Buy plan
          </yoga-ui-button>
        </div>
      </yoga-ui-card>
    );
  }
}
