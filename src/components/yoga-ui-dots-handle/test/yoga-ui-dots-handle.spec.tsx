import { newSpecPage } from '@stencil/core/testing';
import { YogaUiDotsHandle } from '../yoga-ui-dots-handle';

describe('yoga-ui-dots-handle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YogaUiDotsHandle],
      html: `<yoga-ui-dots-handle></yoga-ui-dots-handle>`,
    });
    expect(page.root).toEqualHtml(`
      <yoga-ui-dots-handle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoga-ui-dots-handle>
    `);
  });
});
