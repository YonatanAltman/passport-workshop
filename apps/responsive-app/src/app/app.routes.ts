import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((c) => c.LoginComponent),
  },
  {
    path: 'feed',
    loadComponent: () =>
      import('./feed/feed.component').then((c) => c.FeedComponent),
  },
];
