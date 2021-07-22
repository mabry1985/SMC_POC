import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/outline-map';

@customElement('page-home')
export class PageHome extends LitElement {
  static styles = [];

  render() {
    return html` <outline-map></outline-map> `;
  }
}
