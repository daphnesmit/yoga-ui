import { newE2EPage } from '@stencil/core/testing';

describe('yoga-ui-clickable', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yoga-ui-clickable></yoga-ui-clickable>');

    const element = await page.find('yoga-ui-clickable');
    expect(element).toHaveClass('hydrated');
  });
});
