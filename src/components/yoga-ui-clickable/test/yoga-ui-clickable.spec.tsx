import { newSpecPage } from '@stencil/core/testing';
import { YogaUiClickable } from '../yoga-ui-clickable';

describe('yoga-ui-clickable', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YogaUiClickable],
      html: `<yoga-ui-clickable></yoga-ui-clickable>`,
    });
    expect(page.root).toEqualHtml(`
      <yoga-ui-clickable>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoga-ui-clickable>
    `);
  });
});
