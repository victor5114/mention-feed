/* eslint no-param-reassign: "off" */

/**
* @function Function startup runs before app.
* @description Overload global context - NOTE: Mutate context
* @param {Object} global - global context (window in browser)
*/
export default function (global) {
  global.isMobile = global.navigator
    ? global.navigator.userAgent.match(/Android|webOS|iPhone|iPod|iPad/i)
    : false;

  global.document.body.className = global.isMobile ? 'mobile' : 'desktop';
}
