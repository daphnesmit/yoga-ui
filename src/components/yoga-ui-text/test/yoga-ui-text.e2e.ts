import { newE2EPage } from '@stencil/core/testing';

describe('yoga-ui-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yoga-ui-text></yoga-ui-text>');

    const element = await page.find('yoga-ui-text');
    expect(element).toHaveClass('hydrated');
  });
});
