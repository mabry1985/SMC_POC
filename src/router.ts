import { Router } from '@vaadin/router';
import type { Params, Route } from '@vaadin/router';

export const routes: Route[] = [
  {
    path: '/',
    name: 'home',
    component: 'page-home',
    action: async () => {
      await import('./pages/page-home.js');
    },
  },
  {
    path: '/about',
    name: 'about',
    component: 'page-about',
    action: async () => {
      await import('./pages/page-about.js');
    },
  },
  {
    path: '/blog',
    name: 'blog-list',
    component: 'page-blog-list',
    action: async () => {
      await import('./pages/page-blog-list.js');
    },
  },
  {
    path: '/blog/:slug',
    component: 'page-blog',
    action: async () => {
      await import('./pages/page-blog.js');
    },
  },
  {
    // this route must be last
    path: '(.*)',
    name: 'not-found',
    component: 'page-not-found',
    action: async () => {
      await import('./pages/page-not-found.js');
    },
  },
];

export const router = new Router();
router.setRoutes([...routes]);

export const attachRouter = (outlet: HTMLElement) => router.setOutlet(outlet);

// prettier-ignore
export const urlForName = (name: string, params?: Params) => router.urlForName(name, params);
