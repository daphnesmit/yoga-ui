import { newE2EPage } from '@stencil/core/testing';

describe('yoga-ui-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yoga-ui-modal></yoga-ui-modal>');

    const element = await page.find('yoga-ui-modal');
    expect(element).toHaveClass('hydrated');
  });
});
