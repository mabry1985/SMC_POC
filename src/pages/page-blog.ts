import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

import { blogs } from '../data/blogs-data';
import { router, urlForName } from '../router';

import type { Blog } from './page-blog-list';

import '../components/page-title';
import { tailwindStyles } from '../styles';

@customElement('page-blog')
export class PageBlog extends LitElement {
  @property() location = router.location;

  @state() blog!: Blog;

  static styles = [tailwindStyles];
  // static styles = [
  //   css`
  //     :host {
  //       display: block;
  //     }
  //     article,
  //     section {
  //       display: flex;
  //       flex-direction: column;
  //       align-items: center;
  //     }
  //     .content {
  //       width: var(--content-width);
  //     }
  //     p {
  //       color: var(--primary-color);
  //     }
  //   `,
  // ];

  connectedCallback() {
    super.connectedCallback()!;
    const slugParam = this.location.params.slug as string;
    [this.blog] = blogs.filter((blog: Blog) => blog.slug === slugParam);
    this.requestUpdate();
  }

  render() {
    return !this.blog
      ? html`
          <section>
            <page-title>This Blog Doesn't Exist</page-title>
            <a href=${urlForName('blog-list')}>Return to blog list</a>
          </section>
        `
      : html`
          <article>
            <page-title>${this.blog.title}</page-title>
            <p class="content">${this.blog.body}</p>
            <a href=${urlForName('blog-list')}>Return to blog list</a>
          </article>
        `;
  }
}
