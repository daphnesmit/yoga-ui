import { newSpecPage } from '@stencil/core/testing';
import { YogaUiCategory } from '../yoga-ui-category';

describe('yoga-ui-category', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YogaUiCategory],
      html: `<yoga-ui-category></yoga-ui-category>`,
    });
    expect(page.root).toEqualHtml(`
      <yoga-ui-category>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoga-ui-category>
    `);
  });
});
