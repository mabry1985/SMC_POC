import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { tailwindStyles } from '../styles';

@customElement('page-title')
export class PageTitle extends LitElement {
  static styles = [tailwindStyles];
  // static styles = [
  //   css`
  //     :host {
  //       display: block;
  //     }
  //     h1 {
  //       color: var(--primary-color);
  //       font-size: var(--h1-font-size);
  //       text-align: center;
  //     }
  //   `,
  // ];

  render() {
    return html` <h1 class="text-center"><slot></slot></h1> `;
  }
}
