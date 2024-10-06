export interface VNode {
  tag: string;
  props?: { [key: string]: any };
  children?: Array<VNode | string>;
}

export function createElement(
  tag: string,
  props: { [key: string]: any },
  ...children: Array<VNode | string>
): VNode {
  return { tag, props, children };
}

export function render(vnode: VNode | string, container: HTMLElement) {
  if (typeof vnode === "string") {
    container.appendChild(document.createTextNode(vnode));
  } else {
    const dom = document.createElement(vnode.tag);

    // Apply props
    if (vnode.props) {
      Object.keys(vnode.props).forEach((key) => {
        if (key.startsWith("on")) {
          dom.addEventListener(key.slice(2).toLowerCase(), vnode.props![key]);
        } else {
          dom.setAttribute(key, vnode.props![key]);
        }
      });
    }

    // Render children recursively
    vnode.children?.forEach((child) => render(child, dom));

    container.appendChild(dom);
  }
}
