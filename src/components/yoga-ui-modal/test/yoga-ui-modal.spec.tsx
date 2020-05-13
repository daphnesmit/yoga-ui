import { newSpecPage } from '@stencil/core/testing';
import { YogaUiModal } from '../yoga-ui-modal';

describe('yoga-ui-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YogaUiModal],
      html: `<yoga-ui-modal></yoga-ui-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <yoga-ui-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoga-ui-modal>
    `);
  });
});
