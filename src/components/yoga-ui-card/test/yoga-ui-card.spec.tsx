import { newSpecPage } from '@stencil/core/testing';
import { YogaUiCard } from '../yoga-ui-card';

describe('yoga-ui-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YogaUiCard],
      html: `<yoga-ui-card></yoga-ui-card>`,
    });
    expect(page.root).toEqualHtml(`
      <yoga-ui-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoga-ui-card>
    `);
  });
});
