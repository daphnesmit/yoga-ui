import { newE2EPage } from '@stencil/core/testing';

describe('yoga-ui-col', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yoga-ui-col></yoga-ui-col>');

    const element = await page.find('yoga-ui-col');
    expect(element).toHaveClass('hydrated');
  });
});
