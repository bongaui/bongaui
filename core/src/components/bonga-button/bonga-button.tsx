import { Component, Host, h, Element, Prop } from '@stencil/core';
import { createColorClasses } from '../../utils/theme';

@Component({
  tag: 'bonga-button',
  styleUrl: 'bonga-button.scss',
  shadow: true,
})

export class BongaButton {

  @Element() el!: HTMLElement;

  /**
   * This attributes determines the background and border color of the button.
   * By default, buttons have a solid background unless the button is inside of a toolbar,
   * in which case it has a transparent background.
   */
  @Prop({ reflect: true }) color?: 'primary' | 'secondary' | 'tertiary';

  @Prop({ reflect: true }) expand?: 'block' | 'full';


  componentWillLoad() { }

  render() {
    const { color, expand } = this;
    return (
      <Host class={createColorClasses(color, {
        [`button-${expand}`]: expand !== undefined,
      })}
      >
        <button class="button-native">
          <slot></slot>
        </button>
      </Host>
    );
  }

}
