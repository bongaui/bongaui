import type { Components, JSX } from "../dist/types/components";

interface BongaButton extends Components.BongaButton, HTMLElement {}
export const BongaButton: {
  prototype: BongaButton;
  new (): BongaButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
