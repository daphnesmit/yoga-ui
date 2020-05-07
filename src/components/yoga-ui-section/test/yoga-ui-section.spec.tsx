import { newSpecPage } from '@stencil/core/testing';
import { YogaUiSection } from '../yoga-ui-section';

describe('yoga-ui-section', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YogaUiSection],
      html: `<yoga-ui-section></yoga-ui-section>`,
    });
    expect(page.root).toEqualHtml(`
      <yoga-ui-section>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoga-ui-section>
    `);
  });
});
