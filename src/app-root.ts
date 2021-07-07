import { LitElement, html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { attachRouter } from './router.js';
import './components/header.js';
import { tailwindStyles } from './styles';

@customElement('app-root')
export class AppRoot extends LitElement {
  @query('main')
  private main!: HTMLElement;

  static styles = [tailwindStyles];

  // static styles = css`
  //   :host {
  //     display: flex;
  //     flex-direction: column;
  //     min-height: 200vh;
  //     overflow-x: hidden;
  //   }
  //   main,
  //   main > * {
  //     /* background-color: #dbdbdb; */
  //     display: flex;
  //     flex: 1;
  //     flex-direction: column;
  //     padding: 1rem;
  //   }
  //   footer {
  //     background-color: var(--primary-color);
  //     color: white;
  //     font-weight: 300;
  //     padding: 1rem;
  //     text-align: end;
  //   }
  //   main:empty ~ footer {
  //     display: none;
  //   }
  //   app-header[scrolled='true'] {
  //     padding-top: var(--header-height);
  //     /* height: 100vh; */
  //   }
  // `;

  render() {
    return html`
      <app-header
        .sticky=${true}
        .imgHeight=${100}
        .heroImage=${false}
      ></app-header>
      <!-- The main content is added / removed dynamically by the router -->
      <main class="bg-green-300 bg-yellow-900" role="main"></main>

      <footer class="h-40 p-10">
        <span class="bg-red-400">Built by Josh Mabry and Web Components</span>
      </footer>
    `;
  }

  firstUpdated() {
    attachRouter(this.main);
  }
}

// app-header attr
// .imgPath=${'https://images.unsplash.com/photo-1547989453-11e67ffb3885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80'}
