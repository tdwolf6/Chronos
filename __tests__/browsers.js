// require("@babel/register")({
//   // This will override `node_modules` ignoring - you can alternatively pass
//   // an array of strings to be explicitly matched or a regex / glob
//   ignore: [],
// });

// import { JSDOM } from 'jsdom';

// import 'jsdom-global/register';
// const { window } = new JSDOM('<!doctype html><html><body></body></html>');

// function copyProps(src, target) {
//   const props = Object.getOwnPropertyNames(src)
//     .filter(prop => typeof target[prop] === 'undefined')
//     .reduce(
//       (result, prop) => ({
//         ...result,
//         [prop]: Object.getOwnPropertyDescriptor(src, prop),
//       }),
//       {}
//     );
//   Object.defineProperties(target, props);
// }

// global.window = window;
// global.document = window.document;
// global.navigator = {
//   userAgent: 'node.js',
// };

// copyProps(window, global);
