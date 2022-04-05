export declare class BongaButton {
  el: HTMLElement;
  /**
   * This attributes determines the background and border color of the button.
   * By default, buttons have a solid background unless the button is inside of a toolbar,
   * in which case it has a transparent background.
   */
  color?: 'primary' | 'secondary' | 'tertiary';
  expand?: 'block' | 'full';
  componentWillLoad(): void;
  render(): any;
}
