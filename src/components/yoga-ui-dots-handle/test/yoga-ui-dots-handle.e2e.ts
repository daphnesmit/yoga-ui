import { newE2EPage } from '@stencil/core/testing';

describe('yoga-ui-dots-handle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yoga-ui-dots-handle></yoga-ui-dots-handle>');

    const element = await page.find('yoga-ui-dots-handle');
    expect(element).toHaveClass('hydrated');
  });
});
