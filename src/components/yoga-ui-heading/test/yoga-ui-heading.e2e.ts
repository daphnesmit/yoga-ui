import { newE2EPage } from '@stencil/core/testing';

describe('yoga-ui-heading', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yoga-ui-heading></yoga-ui-heading>');

    const element = await page.find('yoga-ui-heading');
    expect(element).toHaveClass('hydrated');
  });
});
