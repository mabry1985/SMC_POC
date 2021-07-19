import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { urlForName } from '../router.js';

@customElement('page-not-found')
export class PageNotFound extends LitElement {
  static styles = [];

  render() {
    return html`
      <section>
        <h1>Page not found, Fool!</h1>
        <p>
          <a href="${urlForName('home')}">Back to home</a>
        </p>
      </section>
    `;
  }
}
