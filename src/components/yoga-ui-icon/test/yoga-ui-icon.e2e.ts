import { newE2EPage } from '@stencil/core/testing';

describe('yoga-ui-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yoga-ui-icon></yoga-ui-icon>');

    const element = await page.find('yoga-ui-icon');
    expect(element).toHaveClass('hydrated');
  });
});
