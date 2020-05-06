import { newE2EPage } from '@stencil/core/testing';

describe('yoga-ui-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yoga-ui-button></yoga-ui-button>');

    const element = await page.find('yoga-ui-button');
    expect(element).toHaveClass('hydrated');
  });
});
