import { newE2EPage } from '@stencil/core/testing';

describe('yoga-ui-progress', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<yoga-ui-progress></yoga-ui-progress>');

    const element = await page.find('yoga-ui-progress');
    expect(element).toHaveClass('hydrated');
  });
});
