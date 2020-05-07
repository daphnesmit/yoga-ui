import { Component, Event, h, EventEmitter } from "@stencil/core";

@Component({
  tag: "yoga-ui-cta",
  styleUrl: "yoga-ui-cta.scss",
  shadow: true
})
export class YogaUiCta {
  @Event() ctaButtonClick: EventEmitter;

  handleButtonClick() {
    this.ctaButtonClick.emit();
  }
  
  render() {
    return (
      <yoga-ui-card>
        <div class="cta">
          <yoga-ui-icon
            icon="trainingIllustration"
            width="170px"
            height="auto"
          />
          <yoga-ui-heading class="cta__heading" as="h3" styleAs="h2">
            Make progress
          </yoga-ui-heading>
          <span class="cta__text">with training plan</span>
          <yoga-ui-button class="cta__button" onClick={this.handleButtonClick}>
            Buy plan
          </yoga-ui-button>
        </div>
      </yoga-ui-card>
    );
  }
}
