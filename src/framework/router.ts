export class Router {
  routes: { [key: string]: Function } = {};

  addRoute(path: string, callback: Function) {
    this.routes[path] = callback;
  }

  navigate(path: string) {
    window.history.pushState({}, "", path);
    this.routes[path]?.();
  }

  init() {
    window.addEventListener("popstate", () => {
      this.routes[window.location.pathname]?.();
    });
  }
}
