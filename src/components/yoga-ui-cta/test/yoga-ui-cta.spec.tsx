import { newSpecPage } from '@stencil/core/testing';
import { YogaUiCta } from '../yoga-ui-cta';

describe('yoga-ui-cta', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YogaUiCta],
      html: `<yoga-ui-cta></yoga-ui-cta>`,
    });
    expect(page.root).toEqualHtml(`
      <yoga-ui-cta>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoga-ui-cta>
    `);
  });
});
