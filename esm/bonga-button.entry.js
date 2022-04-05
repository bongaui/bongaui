import { r as registerInstance, h, H as Host, g as getElement } from './index-1cecd04b.js';

/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return typeof color === 'string' && color.length > 0
    ? Object.assign({ 'bonga-color': true, [`bonga-color-${color}`]: true }, cssClassMap) : cssClassMap;
};

const bongaButtonCss = ":host{border-radius:48px;display:inline-block;width:auto;text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;font-kerning:none}:host(.bonga-color-primary){background:#c5b787}:host(.bonga-color-primary) slot{color:white}:host(.bonga-color-secondary){background:#55943a}:host(.bonga-color-secondary) slot{color:white}:host(.bonga-color-tertiary){background:#4a5da7}:host(.bonga-color-tertiary) slot{color:white}:host(.button-block){display:block}:host(.button-block) .button-native{margin:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin:0;display:block;width:100%;contain:content}:host(.button-full) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{background:transparent;font-size:16px;padding:8px 20px;border-radius:var(--border-radius);border:none;outline:none;cursor:pointer;contain:layout style;line-height:1;display:block;position:relative;height:100%}";

let BongaButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  componentWillLoad() { }
  render() {
    const { color, expand } = this;
    return (h(Host, { class: createColorClasses(color, {
        [`button-${expand}`]: expand !== undefined,
      }) }, h("button", { class: "button-native" }, h("slot", null))));
  }
  get el() { return getElement(this); }
};
BongaButton.style = bongaButtonCss;

export { BongaButton as bonga_button };
