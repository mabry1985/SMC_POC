import { LitElement, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { attachRouter } from './router.js';

@customElement('app-root')
export class AppRoot extends LitElement {
  @query('main')
  private main!: HTMLElement;

  static styles = [];

  render() {
    return html`
      <!-- The main content is added / removed dynamically by the router -->
      <main role="main"></main>
    `;
  }

  firstUpdated() {
    attachRouter(this.main);
  }
}

// app-header attr
// .imgPath=${'https://images.unsplash.com/photo-1547989453-11e67ffb3885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80'}
