import { Component, Event, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "yoga-ui-card",
  styleUrl: "yoga-ui-card.scss",
  shadow: true
})
export class YogaUiCard {
  /**
   * Adds a category 
   */
  @Prop() category: string;

   /**
   * If `true`, it will show a dots-handle button on the right. Defaults to `false`
   */
  @Prop() hasHandle: boolean;
  @Event() handleClick: (event: MouseEvent) => void;

  render() {
    return (
      <Host>
        {(this.category || this.hasHandle) && (
          <div class="card__header">
            {this.category && (
              <yoga-ui-category>{this.category}</yoga-ui-category>
            )}
            {this.hasHandle && (
              <yoga-ui-clickable
                onClick={this.handleClick}
                class="card__handle"
              >
                <yoga-ui-dots-handle />
              </yoga-ui-clickable>
            )}
          </div>
        )}
        <div class="card__body">
          <slot />
        </div>
      </Host>
    );
  }
}
