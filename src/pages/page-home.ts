import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/outline-map';
import { tailwindStyles } from '../styles';

@customElement('page-home')
export class PageHome extends LitElement {
  static styles = [tailwindStyles];

  render() {
    return html` <outline-map></outline-map> `;
  }
}
