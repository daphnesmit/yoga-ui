import { newSpecPage } from '@stencil/core/testing';
import { YogaUiSpacer } from '../yoga-ui-spacer';

describe('yoga-ui-spacer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YogaUiSpacer],
      html: `<yoga-ui-spacer></yoga-ui-spacer>`,
    });
    expect(page.root).toEqualHtml(`
      <yoga-ui-spacer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoga-ui-spacer>
    `);
  });
});
