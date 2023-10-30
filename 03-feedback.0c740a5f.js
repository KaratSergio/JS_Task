!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},r={};r=/**
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
 */function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var o={},i={},a={};a="object"==typeof t&&t&&t.Object===Object&&t;/** Detect free variable `self`. */var u="object"==typeof self&&self&&self.Object===Object&&self;i=a||u||Function("return this")(),o=function(){return i.Date.now()};var f={},c={},l={},v=/\s/;l=/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */function(t){for(var e=t.length;e--&&v.test(t.charAt(e)););return e};/** Used to match leading whitespace. */var d=/^\s+/;c=/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */function(t){return t?t.slice(0,l(t)+1).replace(d,""):t};var s={},g={},p={};p=i.Symbol;var m={},b=Object.prototype,y=b.hasOwnProperty,h=b.toString,j=p?p.toStringTag:void 0;m=/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */function(t){var e=y.call(t,j),n=t[j];try{t[j]=void 0;var r=!0}catch(t){}var o=h.call(t);return r&&(e?t[j]=n:delete t[j]),o};var O={},S=Object.prototype.toString;O=/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */function(t){return S.call(t)};/** Built-in value references. */var T=p?p.toStringTag:void 0;g=/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":T&&T in Object(t)?m(t):O(t)};var w={};w=/**
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
 */function(t){return null!=t&&"object"==typeof t},s=/**
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
 */function(t){return"symbol"==typeof t||w(t)&&"[object Symbol]"==g(t)};/** Used as references for various `Number` constants. */var E=0/0,x=/^[-+]0x[0-9a-f]+$/i,I=/^0b[01]+$/i,L=/^0o[0-7]+$/i,D=parseInt;f=/**
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
 */function(t){if("number"==typeof t)return t;if(s(t))return E;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=c(t);var n=I.test(t);return n||L.test(t)?D(t.slice(2),n?2:8):x.test(t)?E:+t};/* Built-in method references for those with the same name as other `lodash` methods. */var M=Math.max,N=Math.min;n=/**
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
 */function(t,e,n){var i,a,u,c,l,v,d=0,s=!1,g=!1,p=!0;if("function"!=typeof t)throw TypeError("Expected a function");function m(e){var n=i,r=a;return i=a=void 0,d=e,c=t.apply(r,n)}function b(t){var n=t-v,r=t-d;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===v||n>=e||n<0||g&&r>=u}function y(){var t,n,r,i=o();if(b(i))return h(i);// Restart the timer.
l=setTimeout(y,(t=i-v,n=i-d,r=e-t,g?N(r,u-n):r))}function h(t){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(l=void 0,p&&i)?m(t):(i=a=void 0,c))}function j(){var t,n=o(),r=b(n);if(i=arguments,a=this,v=n,r){if(void 0===l)return(// Reset any `maxWait` timer.
d=t=v,// Start the timer for the trailing edge.
l=setTimeout(y,e),s?m(t):c);if(g)return(// Handle invocations in a tight loop.
clearTimeout(l),l=setTimeout(y,e),m(v))}return void 0===l&&(l=setTimeout(y,e)),c}return e=f(e)||0,r(n)&&(s=!!n.leading,u=(g="maxWait"in n)?M(f(n.maxWait)||0,e):u,p="trailing"in n?!!n.trailing:p),j.cancel=function(){void 0!==l&&clearTimeout(l),d=0,i=v=a=l=void 0},j.flush=function(){return void 0===l?c:h(o())},j},e=/**
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
 */function(t,e,o){var i=!0,a=!0;if("function"!=typeof t)throw TypeError("Expected a function");return r(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),n(t,e,{leading:i,maxWait:e,trailing:a})};let W=document.querySelector(".feedback-form"),$="feedback-form-state",k={},J=e(t=>{k[t.target.name]=t.target.value.trim(),localStorage.setItem($,JSON.stringify(k))},500);W.addEventListener("input",J),W.addEventListener("submit",function(t){t.preventDefault(),localStorage.removeItem($),console.log(k),k={},t.target.reset()}),document.addEventListener("DOMContentLoaded",function(){try{let t=localStorage.getItem($);if(!t)return;k=JSON.parse(t),Object.entries(k).forEach(([t,e])=>{W.elements[t].value=e})}catch(t){console.log(t.message)}})}();//# sourceMappingURL=03-feedback.0c740a5f.js.map

//# sourceMappingURL=03-feedback.0c740a5f.js.map
