import { newE2EPage } from '@stencil/core/testing';

describe('yoga-ui-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yoga-ui-row></yoga-ui-row>');

    const element = await page.find('yoga-ui-row');
    expect(element).toHaveClass('hydrated');
  });
});
