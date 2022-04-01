import { newE2EPage } from '@stencil/core/testing';

describe('bonga-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bonga-button></bonga-button>');

    const element = await page.find('bonga-button');
    expect(element).toHaveClass('hydrated');
  });
});
