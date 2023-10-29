var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r={};r=/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};var i={},o={},a={};a="object"==typeof e&&e&&e.Object===Object&&e;/** Detect free variable `self`. */var u="object"==typeof self&&self&&self.Object===Object&&self;o=a||u||Function("return this")(),i=function(){return o.Date.now()};var l={},f={},c={},v=/\s/;c=/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function(e){for(var t=e.length;t--&&v.test(e.charAt(t)););return t};/** Used to match leading whitespace. */var d=/^\s+/;f=/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function(e){return e?e.slice(0,c(e)+1).replace(d,""):e};var s={},m={},p={};p=o.Symbol;var g={},b=Object.prototype,y=b.hasOwnProperty,j=b.toString,S=p?p.toStringTag:void 0;g=/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(e){var t=y.call(e,S),n=e[S];try{e[S]=void 0;var r=!0}catch(e){}var i=j.call(e);return r&&(t?e[S]=n:delete e[S]),i};var h={},O=Object.prototype.toString;h=/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function(e){return O.call(e)};/** Built-in value references. */var T=p?p.toStringTag:void 0;m=/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":T&&T in Object(e)?g(e):h(e)};var w={};w=/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */function(e){return null!=e&&"object"==typeof e},s=/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */function(e){return"symbol"==typeof e||w(e)&&"[object Symbol]"==m(e)};/** Used as references for various `Number` constants. */var x=0/0,E=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,k=/^0o[0-7]+$/i,I=parseInt;l=/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function(e){if("number"==typeof e)return e;if(s(e))return x;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=f(e);var n=L.test(e);return n||k.test(e)?I(e.slice(2),n?2:8):E.test(e)?x:+e};/* Built-in method references for those with the same name as other `lodash` methods. */var q=Math.max,D=Math.min;n=/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function(e,t,n){var o,a,u,f,c,v,d=0,s=!1,m=!1,p=!0;if("function"!=typeof e)throw TypeError("Expected a function");function g(t){var n=o,r=a;return o=a=void 0,d=t,f=e.apply(r,n)}function b(e){var n=e-v,r=e-d;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===v||n>=t||n<0||m&&r>=u}function y(){var e,n,r,o=i();if(b(o))return j(o);// Restart the timer.
c=setTimeout(y,(e=o-v,n=o-d,r=t-e,m?D(r,u-n):r))}function j(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(c=void 0,p&&o)?g(e):(o=a=void 0,f))}function S(){var e,n=i(),r=b(n);if(o=arguments,a=this,v=n,r){if(void 0===c)return(// Reset any `maxWait` timer.
d=e=v,// Start the timer for the trailing edge.
c=setTimeout(y,t),s?g(e):f);if(m)return(// Handle invocations in a tight loop.
clearTimeout(c),c=setTimeout(y,t),g(v))}return void 0===c&&(c=setTimeout(y,t)),f}return t=l(t)||0,r(n)&&(s=!!n.leading,u=(m="maxWait"in n)?q(l(n.maxWait)||0,t):u,p="trailing"in n?!!n.trailing:p),S.cancel=function(){void 0!==c&&clearTimeout(c),d=0,o=v=a=c=void 0},S.flush=function(){return void 0===c?f:j(i())},S},t=/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */function(e,t,i){var o=!0,a=!0;if("function"!=typeof e)throw TypeError("Expected a function");return r(i)&&(o="leading"in i?!!i.leading:o,a="trailing"in i?!!i.trailing:a),n(e,t,{leading:o,maxWait:t,trailing:a})};const M=document.querySelector(".feedback-form"),N=M.querySelector('input[name="email"]'),W=M.querySelector('textarea[name="message"]'),$=t(()=>{let e={email:N.value,message:W.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))},500);N.addEventListener("input",$),W.addEventListener("input",$),document.addEventListener("DOMContentLoaded",function(){let e=localStorage.getItem("feedback-form-state");if(e){let t=JSON.parse(e);N.value=t.email,W.value=t.message}}),M.addEventListener("submit",function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state");let t={email:N.value,message:W.value};console.log(t),N.value="",W.value=""}//# sourceMappingURL=03-feedback.10565506.js.map
);
//# sourceMappingURL=03-feedback.10565506.js.map
