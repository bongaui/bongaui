import { Component, Host, h, Element, Prop } from '@stencil/core';
import { createColorClasses } from '../../utils/theme';
export class BongaButton {
  componentWillLoad() { }
  render() {
    const { color, expand } = this;
    return (h(Host, { class: createColorClasses(color, {
        [`button-${expand}`]: expand !== undefined,
      }) },
      h("button", { class: "button-native" },
        h("slot", null))));
  }
  static get is() { return "bonga-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["bonga-button.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["bonga-button.css"]
  }; }
  static get properties() { return {
    "color": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'primary' | 'secondary' | 'tertiary'",
        "resolved": "\"primary\" | \"secondary\" | \"tertiary\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": "This attributes determines the background and border color of the button.\nBy default, buttons have a solid background unless the button is inside of a toolbar,\nin which case it has a transparent background."
      },
      "attribute": "color",
      "reflect": true
    },
    "expand": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'block' | 'full'",
        "resolved": "\"block\" | \"full\"",
        "references": {}
      },
      "required": false,
      "optional": true,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "expand",
      "reflect": true
    }
  }; }
  static get elementRef() { return "el"; }
}
