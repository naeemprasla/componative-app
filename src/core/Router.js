export class Router {
    constructor(routes = {}, rootElement = '#app') {
      this.routes = routes;
      this.rootElement = $(rootElement);
      this.currentComponent = null;
      this.init();
    }
  
    init() {
      window.addEventListener('popstate', () => this.handleRouting());
      $(document).on('click', 'a[data-route]', (e) => {
        e.preventDefault();
        const path = $(e.target).attr('href') || $(e.target).data('route');
        this.navigateTo(path);
      });
      this.handleRouting();
    }
  
    navigateTo(path) {
      history.pushState({}, '', path);
      this.handleRouting();
    }
  
    handleRouting() {
      const path = window.location.pathname;
      let matched = false;
  
      for (const [route, ComponentClass] of Object.entries(this.routes)) {
        if (this.matchRoute(route, path)) {
          this.renderComponent(ComponentClass, this.extractRouteParams(route, path));
          matched = true;
          break;
        }
      }
  
      if (!matched && this.routes['*']) {
        this.renderComponent(this.routes['*']);
      }
    }
  
    matchRoute(route, path) {
      const routeParts = route.split('/');
      const pathParts = path.split('/');
      if (routeParts.length !== pathParts.length) return false;
      return routeParts.every((part, i) => 
        part.startsWith(':') || part === pathParts[i]
      );
    }
  
    extractRouteParams(route, path) {
      return route.split('/').reduce((params, part, i) => {
        if (part.startsWith(':')) {
          params[part.slice(1)] = path.split('/')[i];
        }
        return params;
      }, {});
    }
  
    renderComponent(ComponentClass, props = {}) {
      this.currentComponent?.unmount?.();
      this.currentComponent = new ComponentClass(props);
      this.currentComponent.mount(this.rootElement);
    }
  }