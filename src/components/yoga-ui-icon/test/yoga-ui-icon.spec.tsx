import { newSpecPage } from '@stencil/core/testing';
import { YogaUiIcon } from '../yoga-ui-icon';

describe('yoga-ui-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YogaUiIcon],
      html: `<yoga-ui-icon></yoga-ui-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <yoga-ui-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoga-ui-icon>
    `);
  });
});
