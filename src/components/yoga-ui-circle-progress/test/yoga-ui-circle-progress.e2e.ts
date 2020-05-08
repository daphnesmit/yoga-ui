import { newE2EPage } from '@stencil/core/testing';

describe('yoga-ui-circle-progress', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<yoga-ui-circle-progress></yoga-ui-circle-progress>');
    const element = await page.find('yoga-ui-circle-progress');
    expect(element).toHaveClass('hydrated');
  });
});
