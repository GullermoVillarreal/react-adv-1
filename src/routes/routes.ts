import { lazy, LazyExoticComponent } from 'react';
import NoLazyLoad from '../01-lazyload/pages/NoLazyLoad';

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<() => JSX.Element> | (() => JSX.Element);
  name: string;
}

const LazyLoad = lazy(
  () =>
    import(
      /* webpackChunkName:"LazyLayout" */ '../01-lazyload/layout/LazyLayout'
    )
);

// const Lazy1 = lazy(
//   () =>
//     import(/* webpackChunkName:"LazyPage1" */ '../01-lazyload/pages/LazyPage1')
// );

// const Lazy2 = lazy(
//   () =>
//     import(/* webpackChunkName:"LazyPage2" */ '../01-lazyload/pages/LazyPage2')
// );
// const Lazy3 = lazy(
//   () =>
//     import(/* webpackChunkName:"LazyPage3" */ '../01-lazyload/pages/LazyPage3')
// );

export const routes: Route[] = [
  {
    to: '/lazyload',
    path: '/lazyload/*',
    Component: LazyLoad,
    name: 'Lazy - Dashboard',
  },
  {
    to: '/no-lazy',
    path: '/no-lazy',
    Component: NoLazyLoad,
    name: 'No lazy load',
  },
];
