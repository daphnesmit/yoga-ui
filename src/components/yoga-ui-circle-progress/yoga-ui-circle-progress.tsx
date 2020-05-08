import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "yoga-ui-circle-progress",
  styleUrl: "yoga-ui-circle-progress.scss",
  shadow: true
})
export class YogaUiCircleProgress {
  @Prop() percentage: string = "0";
  @Prop() color: string = "#7B4FFF";
  render() {
    return (
      <Host>
        <div
          style={{
            width: `100%`,
            height: `100%`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            background: `conic-gradient(${this.color} ${
              this.percentage
            }%, 0, #ecf0f1 ${(100 - parseInt(this.percentage)).toString()}%)`,
            borderRadius: `50%`
          }}
        >
          <div
            style={{
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              backgroundColor: `#fff`,
              height: `calc(100% - 16px)`,
              width: `calc(100% - 16px)`,
              borderRadius: `50%`,
              boxShadow: `0px 0px 7px 0px rgba(0, 0, 0, 0.1)`
            }}
          >
            <span
              style={{
                fontFamily: `"Helvetica Neue", Helvetica, Arial, Verdana, sans-serif`,
                fontSize: `3rem`,
                fontWeight: `bold`,
                color: "#6B6974"
              }}
            >
              {this.percentage}
            </span>
          </div>
        </div>
      </Host>
    );
  }
}
