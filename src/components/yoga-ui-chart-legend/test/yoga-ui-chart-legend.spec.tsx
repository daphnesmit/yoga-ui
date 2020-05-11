import { newSpecPage } from '@stencil/core/testing';
import { YogaUiChartLegend } from '../yoga-ui-chart-legend';

describe('yoga-ui-chart-legend', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [YogaUiChartLegend],
      html: `<yoga-ui-chart-legend></yoga-ui-chart-legend>`,
    });
    expect(page.root).toEqualHtml(`
      <yoga-ui-chart-legend>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </yoga-ui-chart-legend>
    `);
  });
});
