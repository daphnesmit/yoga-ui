import { newE2EPage } from '@stencil/core/testing';

describe('yoga-ui-container', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yoga-ui-container></yoga-ui-container>');

    const element = await page.find('yoga-ui-container');
    expect(element).toHaveClass('hydrated');
  });
});
