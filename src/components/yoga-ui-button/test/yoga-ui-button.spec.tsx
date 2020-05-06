import { newSpecPage } from '@stencil/core/testing';
import { YogaUiButton } from './yoga-ui-button';

describe('yoga-ui-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YogaUiButton],
      html: `<yoga-ui-button></yoga-ui-button>`,
    });
    expect(page.root).toEqualHtml(`
      <yoga-ui-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoga-ui-button>
    `);
  });
});
