import { newE2EPage } from '@stencil/core/testing';

describe('yoga-ui-chart-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yoga-ui-chart-card></yoga-ui-chart-card>');

    const element = await page.find('yoga-ui-chart-card');
    expect(element).toHaveClass('hydrated');
  });
});
