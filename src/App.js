import { Router } from './core';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';

export const routes = {
  '/': HomePage,
  '/about': AboutPage,
  '/contact': ContactPage
};

export function initApp() {
  return new Router(routes, '#app');
}