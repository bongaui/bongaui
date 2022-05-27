import { newSpecPage } from '@stencil/core/testing';
import { BongaButton } from '../bonga-button';

describe('bonga-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BongaButton],
      html: `<bonga-button></bonga-button>`,
    });
    expect(page.root).toEqualHtml(`
      <bonga-button>
        <mock:shadow-root>
          <button class="button-native">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </bonga-button>
    `);
  });
});
