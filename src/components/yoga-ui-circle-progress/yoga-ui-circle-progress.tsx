import {
  Element,
  Event,
  State,
  Component,
  h,
  Prop,
  EventEmitter,
  Listen
} from "@stencil/core";

@Component({
  tag: "yoga-ui-circle-progress",
  styleUrl: "yoga-ui-circle-progress.scss",
  shadow: true
})
export class YogaUiCircleProgress {
  @Element() private element: HTMLElement;

  /**
   * The percentage of the circle that should be filled, for example 75%
   */
  @Prop() percentage: number = 0;

  /**
   * If `true`, the text inside the circle will animate and count up. Defaults to `false`.
   */
  @Prop() animateText: boolean = false;

  @State() circle: HTMLElement;
  @State() text: HTMLElement;

  @Event() loadEvent: EventEmitter;

  private setupVars() {
    const {
      element: { shadowRoot }
    } = this;

    this.circle = shadowRoot.querySelector("[js-hook-circle]");
    this.text = shadowRoot.querySelector("[js-hook-text]");
  }

  animate(from, start) {
    const now = new Date().getTime() - start;
    const progress = now / 700;
    const result =
      this.percentage > from
        ? Math.floor((this.percentage - from) * progress + from)
        : Math.floor(from - (from - this.percentage) * progress);
    if (this.animateText) {
      this.text.innerHTML = progress < 1 ? `${result}` : `${this.percentage}`;
    }
    if (progress < 1) requestAnimationFrame(() => this.animate(from, start));
  }

  circleAnimation() {
    this.circle.style.strokeDasharray = this.percentage * 4.65 + " 999";

    const from = +this.text.dataset.progress;
    const start = new Date().getTime();

    this.text.setAttribute("data-progress", `${this.percentage}`);
    requestAnimationFrame(() => this.animate(from, start));
  }

  componentDidLoad() {
    this.setupVars();
    this.loadEvent.emit();
  }

  @Listen("loadEvent")
  init() {
    setTimeout(() => requestAnimationFrame(() => this.circleAnimation()), 1000);
  }

  render() {
    return (
      <div class="circle-progress">
        <svg
          class="circle-progress__container"
          width="180px"
          height="180px"
          xmlns="http://www.w3.org/2000/svg"
          js-hook-container
        >
          <circle
            class="circle-progress__inner"
            cx="90"
            cy="90"
            r="66"
            js-hook-inner
          ></circle>
          <circle
            class="circle-progress__circle"
            cx="90"
            cy="90"
            r="82"
            js-hook-circle
          ></circle>
        </svg>
        <div class="circle-progress__text" data-progress="0" js-hook-text>
          {this.animateText ? 0 : this.percentage}
        </div>
      </div>
    );
  }
}
