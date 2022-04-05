'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-09b0a9a6.js');

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
    index.registerInstance(this, hostRef);
  }
  componentWillLoad() { }
  render() {
    const { color, expand } = this;
    return (index.h(index.Host, { class: createColorClasses(color, {
        [`button-${expand}`]: expand !== undefined,
      }) }, index.h("button", { class: "button-native" }, index.h("slot", null))));
  }
  get el() { return index.getElement(this); }
};
BongaButton.style = bongaButtonCss;

exports.bonga_button = BongaButton;
