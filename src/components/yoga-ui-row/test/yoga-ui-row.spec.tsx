import { newSpecPage } from '@stencil/core/testing';
import { YogaUiRow } from '../yoga-ui-row';

describe('yoga-ui-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YogaUiRow],
      html: `<yoga-ui-row></yoga-ui-row>`,
    });
    expect(page.root).toEqualHtml(`
      <yoga-ui-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoga-ui-row>
    `);
  });
});
