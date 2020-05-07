import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "yoga-ui-button",
  styleUrl: "yoga-ui-button.scss",
  shadow: true
})
export class YogaUiButton {
  @Prop() variant = "primary";
  @Prop() disabled: boolean;
  @Prop() startIcon: string;
  @Prop() endIcon: string;
  @Prop() iconSize: string;

  getIconColor() {
    return this.disabled ? "grey-medium" : "primary";
  }

  getIconSize() {
    return this.iconSize || "8px";
  }

  render() {
    return (
      <button
        disabled={this.disabled}
        class={{
          [`button button--${this.variant}`]: true,
          "is--disabled": this.disabled
        }}
      >
        <div class="button__wrapper">
          {this.startIcon && (
            <div class="button__icon button__icon--start">
              <yoga-ui-icon
                icon={this.startIcon}
                width={this.getIconSize()}
                height={this.getIconSize()}
              />
            </div>
          )}
          <span>
            <slot></slot>
          </span>
          {this.endIcon && (
            <div class="button__icon button__icon--start">
              <yoga-ui-icon
                icon={this.endIcon}
                width={this.getIconSize()}
                height={this.getIconSize()}
              />
            </div>
          )}
        </div>
      </button>
    );
  }
}
