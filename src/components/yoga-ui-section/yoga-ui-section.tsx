import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'yoga-ui-section',
  styleUrl: 'yoga-ui-section.scss',
  shadow: true,
})
export class YogaUiSection {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
