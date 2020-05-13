import { newSpecPage } from '@stencil/core/testing';
import { YogaUiConfirmModal } from '../yoga-ui-confirm-modal';

describe('yoga-ui-confirm-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YogaUiConfirmModal],
      html: `<yoga-ui-confirm-modal></yoga-ui-confirm-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <yoga-ui-confirm-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoga-ui-confirm-modal>
    `);
  });
});
