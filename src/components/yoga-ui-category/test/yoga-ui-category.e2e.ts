import { newE2EPage } from '@stencil/core/testing';

describe('yoga-ui-category', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yoga-ui-category></yoga-ui-category>');

    const element = await page.find('yoga-ui-category');
    expect(element).toHaveClass('hydrated');
  });
});
