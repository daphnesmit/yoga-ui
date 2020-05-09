import { newE2EPage } from '@stencil/core/testing';

describe('yoga-ui-spacer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yoga-ui-spacer></yoga-ui-spacer>');

    const element = await page.find('yoga-ui-spacer');
    expect(element).toHaveClass('hydrated');
  });
});
