import { newE2EPage } from '@stencil/core/testing';

describe('yoga-ui-cta', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yoga-ui-cta></yoga-ui-cta>');

    const element = await page.find('yoga-ui-cta');
    expect(element).toHaveClass('hydrated');
  });
});
