import { VNode, render } from "./vdom";

export class Component {
  props: { [key: string]: any };
  state: { [key: string]: any };

  constructor(props: { [key: string]: any }) {
    this.props = props;
    this.state = {};
  }

  render(): VNode | string {
    return "";
  }

  setState(newState: { [key: string]: any }) {
    this.state = { ...this.state, ...newState };
    this.update();
  }

  update() {
    const rootElement = document.getElementById("app")!;
    rootElement.innerHTML = ""; // Clear the DOM
    render(this.render(), rootElement);
  }
}

export function createComponent(
  ComponentClass: typeof Component,
  props: { [key: string]: any },
): VNode | string {
  const instance = new ComponentClass(props);
  return instance.render();
}
