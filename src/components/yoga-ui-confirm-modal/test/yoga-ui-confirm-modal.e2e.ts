import { newE2EPage } from '@stencil/core/testing';

describe('yoga-ui-confirm-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yoga-ui-confirm-modal></yoga-ui-confirm-modal>');

    const element = await page.find('yoga-ui-confirm-modal');
    expect(element).toHaveClass('hydrated');
  });
});
