/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/framework/component.ts":
/*!************************************!*\
  !*** ./src/framework/component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Component = void 0;\nexports.createComponent = createComponent;\nconst vdom_1 = __webpack_require__(/*! ./vdom */ \"./src/framework/vdom.ts\");\nclass Component {\n    constructor(props) {\n        this.props = props;\n        this.state = {};\n    }\n    render() {\n        return \"\";\n    }\n    setState(newState) {\n        this.state = Object.assign(Object.assign({}, this.state), newState);\n        this.update();\n    }\n    update() {\n        const rootElement = document.getElementById(\"app\");\n        rootElement.innerHTML = \"\"; // Clear the DOM\n        (0, vdom_1.render)(this.render(), rootElement);\n    }\n}\nexports.Component = Component;\nfunction createComponent(ComponentClass, props) {\n    const instance = new ComponentClass(props);\n    return instance.render();\n}\n\n\n//# sourceURL=webpack://custom-ts-framework/./src/framework/component.ts?");

/***/ }),

/***/ "./src/framework/router.ts":
/*!*********************************!*\
  !*** ./src/framework/router.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Router = void 0;\nclass Router {\n    constructor() {\n        this.routes = {};\n    }\n    addRoute(path, callback) {\n        this.routes[path] = callback;\n    }\n    navigate(path) {\n        var _a, _b;\n        window.history.pushState({}, \"\", path);\n        (_b = (_a = this.routes)[path]) === null || _b === void 0 ? void 0 : _b.call(_a);\n    }\n    init() {\n        window.addEventListener(\"popstate\", () => {\n            var _a, _b;\n            (_b = (_a = this.routes)[window.location.pathname]) === null || _b === void 0 ? void 0 : _b.call(_a);\n        });\n    }\n}\nexports.Router = Router;\n\n\n//# sourceURL=webpack://custom-ts-framework/./src/framework/router.ts?");

/***/ }),

/***/ "./src/framework/vdom.ts":
/*!*******************************!*\
  !*** ./src/framework/vdom.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.createElement = createElement;\nexports.render = render;\nfunction createElement(tag, props, ...children) {\n    return { tag, props, children };\n}\nfunction render(vnode, container) {\n    var _a;\n    if (typeof vnode === \"string\") {\n        container.appendChild(document.createTextNode(vnode));\n    }\n    else {\n        const dom = document.createElement(vnode.tag);\n        // Apply props\n        if (vnode.props) {\n            Object.keys(vnode.props).forEach((key) => {\n                if (key.startsWith(\"on\")) {\n                    dom.addEventListener(key.slice(2).toLowerCase(), vnode.props[key]);\n                }\n                else {\n                    dom.setAttribute(key, vnode.props[key]);\n                }\n            });\n        }\n        // Render children recursively\n        (_a = vnode.children) === null || _a === void 0 ? void 0 : _a.forEach((child) => render(child, dom));\n        container.appendChild(dom);\n    }\n}\n\n\n//# sourceURL=webpack://custom-ts-framework/./src/framework/vdom.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst vdom_1 = __webpack_require__(/*! ./framework/vdom */ \"./src/framework/vdom.ts\");\nconst component_1 = __webpack_require__(/*! ./framework/component */ \"./src/framework/component.ts\");\nconst router_1 = __webpack_require__(/*! ./framework/router */ \"./src/framework/router.ts\");\n// Example component\nclass MyComponent extends component_1.Component {\n    render() {\n        return (0, vdom_1.createElement)(\"div\", {}, `Hello, ${this.props.name}!`);\n    }\n}\nconst vdom = (0, component_1.createComponent)(MyComponent, { name: \"World\" });\n(0, vdom_1.render)(vdom, document.getElementById(\"app\"));\n// Routing example\nconst router = new router_1.Router();\nrouter.addRoute(\"/\", () => (0, vdom_1.render)(vdom, document.getElementById(\"app\")));\nrouter.addRoute(\"/about\", () => {\n    const aboutComponent = (0, component_1.createComponent)(MyComponent, { name: \"About Page\" });\n    (0, vdom_1.render)(aboutComponent, document.getElementById(\"app\"));\n});\nrouter.init();\nrouter.navigate(window.location.pathname);\n\n\n//# sourceURL=webpack://custom-ts-framework/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;