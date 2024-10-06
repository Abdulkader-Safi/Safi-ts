export function addEventListeners(
  dom: HTMLElement,
  props: { [key: string]: any },
) {
  Object.keys(props).forEach((key) => {
    if (key.startsWith("on")) {
      const event = key.slice(2).toLowerCase();
      dom.addEventListener(event, props[key]);
    }
  });
}
