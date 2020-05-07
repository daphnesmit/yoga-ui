import { newSpecPage } from '@stencil/core/testing';
import { YogaUiHeading } from '../yoga-ui-heading';

describe('yoga-ui-heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YogaUiHeading],
      html: `<yoga-ui-heading></yoga-ui-heading>`,
    });
    expect(page.root).toEqualHtml(`
      <yoga-ui-heading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoga-ui-heading>
    `);
  });
});
