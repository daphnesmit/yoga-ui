import {
  Element,
  Event,
  Component,
  Method,
  h,
  EventEmitter,
  Prop,
  Watch
} from "@stencil/core";

@Component({
  tag: "yoga-ui-modal",
  styleUrl: "yoga-ui-modal.scss"
})
export class YogaUiModal {
  @Element()
  element: HTMLElement;

  @Event()
  modalClosed: EventEmitter;

  @Event()
  modalOpened: EventEmitter;

  @Prop()
  show = false;

  @Method()
  async close() {
    document.body.classList.remove("modal--is-open");
    this.element.classList.remove("modal--is-showing");

    this.modalClosed.emit("closed");
  }

  @Method()
  async open() {
    document.body.classList.add("modal--is-open");
    this.element.classList.add("modal--is-showing");

    this.modalOpened.emit();
  }

  @Watch("show")
  watchShowHandler(shown: boolean) {
    if (shown) {
      this.open();
    } else {
      this.close();
    }
  }

  render() {
    return (
      <div class="modal">
        <div class="modal__container">
          <div class="modal__content" role="dialog">
            <slot name="header" />
            <slot name="body" />
            <slot name="footer" />
          </div>
        </div>
        <div class="modal__background"></div>
      </div>
    );
  }
}
