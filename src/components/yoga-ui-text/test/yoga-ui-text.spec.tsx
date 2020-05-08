import { newSpecPage } from '@stencil/core/testing';
import { YogaUiText } from '../yoga-ui-text';

describe('yoga-ui-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YogaUiText],
      html: `<yoga-ui-text></yoga-ui-text>`,
    });
    expect(page.root).toEqualHtml(`
      <yoga-ui-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoga-ui-text>
    `);
  });
});
