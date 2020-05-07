import { newSpecPage } from '@stencil/core/testing';
import { YogaUiProgress } from '../yoga-ui-progress';

describe('yoga-ui-progress', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YogaUiProgress],
      html: `<yoga-ui-progress></yoga-ui-progress>`,
    });
    expect(page.root).toEqualHtml(`
      <yoga-ui-progress>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoga-ui-progress>
    `);
  });
});
