import { newSpecPage } from '@stencil/core/testing';
import { YogaUiCol } from '../yoga-ui-col';

describe('yoga-ui-col', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YogaUiCol],
      html: `<yoga-ui-col></yoga-ui-col>`,
    });
    expect(page.root).toEqualHtml(`
      <yoga-ui-col>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoga-ui-col>
    `);
  });
});
