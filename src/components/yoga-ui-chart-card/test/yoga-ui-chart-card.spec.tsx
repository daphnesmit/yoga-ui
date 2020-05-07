import { newSpecPage } from '@stencil/core/testing';
import { YogaUiChartCard } from '../yoga-ui-chart-card';

describe('yoga-ui-chart-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YogaUiChartCard],
      html: `<yoga-ui-chart-card></yoga-ui-chart-card>`,
    });
    expect(page.root).toEqualHtml(`
      <yoga-ui-chart-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoga-ui-chart-card>
    `);
  });
});
