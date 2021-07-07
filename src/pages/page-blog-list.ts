import { LitElement, html } from 'lit';
import { customElement, state, property } from 'lit/decorators.js';
import { blogs } from '../data/blogs-data';
import { router } from '../router';
import '../components/page-title';
import { tailwindStyles } from '../styles';

export interface Blog {
  author: string;
  title: string;
  body: string;
  slug: string;
}
@customElement('page-blog-list')
export class PageBlogList extends LitElement {
  @state() blogPosts: Blog[] = [...blogs];

  @property() location = router.location;

  static styles = [tailwindStyles];

  // static styles = [
  //   css`
  //     :host {
  //       display: block;
  //     }
  //     .blog-list {
  //       text-align: center;
  //       list-style: none;
  //       padding-left: 0;
  //     }
  //   `,
  // ];

  /* eslint-disable */
  render() {
    return html`
      <section>
        <page-title>Blog Posts</page-title>
        <ul class="blog-list">
          ${this.blogPosts.map(
            (blog: Blog) =>
              html`
                <li>
                  <a href="blog/${blog.slug}"> ${blog.title} </a>
                </li>
              `
          )}
        </ul>
      </section>
    `;
  }
}
