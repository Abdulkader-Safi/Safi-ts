import { createElement, render } from "./framework/vdom";
import { createComponent, Component } from "./framework/component";
import { Router } from "./framework/router";

// Example component
class MyComponent extends Component {
  render() {
    return createElement("div", {}, `Hello, ${this.props.name}!`);
  }
}

const vdom = createComponent(MyComponent, {
  name: "World",
});
// render(vdom, document.getElementById("app")!);

// Routing example
const router = new Router();

router.addRoute("/", () => render(vdom, document.getElementById("app")!));

router.addRoute("/about", () => {
  const aboutComponent = createComponent(MyComponent, {
    name: "About Page",
  });

  render(aboutComponent, document.getElementById("app")!);
});

router.init();
router.navigate(window.location.pathname);
