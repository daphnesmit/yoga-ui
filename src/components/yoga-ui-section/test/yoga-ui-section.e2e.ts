import { newE2EPage } from '@stencil/core/testing';

describe('yoga-ui-section', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yoga-ui-section></yoga-ui-section>');

    const element = await page.find('yoga-ui-section');
    expect(element).toHaveClass('hydrated');
  });
});
