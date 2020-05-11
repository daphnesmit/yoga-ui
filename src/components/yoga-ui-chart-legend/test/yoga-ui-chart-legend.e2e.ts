import { newE2EPage } from '@stencil/core/testing';

describe('yoga-ui-chart-legend', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yoga-ui-chart-legend></yoga-ui-chart-legend>');

    const element = await page.find('yoga-ui-chart-legend');
    expect(element).toHaveClass('hydrated');
  });
});
