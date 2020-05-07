import { newE2EPage } from '@stencil/core/testing';

describe('yoga-ui-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yoga-ui-card></yoga-ui-card>');

    const element = await page.find('yoga-ui-card');
    expect(element).toHaveClass('hydrated');
  });
});
