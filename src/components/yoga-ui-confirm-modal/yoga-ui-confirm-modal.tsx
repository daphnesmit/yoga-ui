import { Component, Element, Method, h } from "@stencil/core";
@Component({
  tag: "yoga-ui-confirm-modal",
  styleUrl: "yoga-ui-confirm-modal.scss",
  shadow: true
})
export class YogaUiConfirmModal {
  @Element() private element: HTMLElement;

  modal: any;

  componentDidLoad() {
    const {
      element: { shadowRoot }
    } = this;

    this.modal = shadowRoot.querySelector("yoga-ui-modal");
  }

  @Method()
  async close() {
    this.modal.close();
  }

  @Method()
  async open() {
    this.modal.open();
  }

  handleCancelClick(event: UIEvent) {
    event.preventDefault();

    this.close();
  }

  handleOpenModalClick(event: UIEvent) {
    event.preventDefault();

    this.open();
  }

  handleSaveClick(event: UIEvent) {
    event.preventDefault();

    this.close();
  }

  render() {
    return [
      <yoga-ui-button onClick={this.handleOpenModalClick.bind(this)}>
        Open Demo Modal
      </yoga-ui-button>,
      <yoga-ui-modal>
        <div slot="header">This is the modal header</div>
        <div slot="body">This is the modal body</div>
        <div slot="footer">
          <yoga-ui-button onClick={this.handleSaveClick.bind(this)}>
            Save
          </yoga-ui-button>
          <yoga-ui-button
            variant="secondary"
            onClick={this.handleCancelClick.bind(this)}
          >
            Cancel
          </yoga-ui-button>
        </div>
      </yoga-ui-modal>
    ];
  }
}
