import { newSpecPage } from '@stencil/core/testing';
import { YogaUiContainer } from '../yoga-ui-container';

describe('yoga-ui-container', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YogaUiContainer],
      html: `<yoga-ui-container></yoga-ui-container>`,
    });
    expect(page.root).toEqualHtml(`
      <yoga-ui-container>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoga-ui-container>
    `);
  });
});
