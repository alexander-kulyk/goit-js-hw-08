function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var o,r,i,a,f,u,l=0,c=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function S(e){return l=e,f=setTimeout(j,t),c?y(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function j(){var e=v();if(h(e))return O(e);f=setTimeout(j,function(e){var n=t-(e-u);return s?d(n,i-(e-l)):n}(e))}function O(e){return f=void 0,g&&o?y(e):(o=r=void 0,a)}function w(){var e=v(),n=h(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(j,t),y(u)}return void 0===f&&(f=setTimeout(j,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=u=r=f=void 0},w.flush=function(){return void 0===f?a:O(v())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),g(e,t,{leading:o,maxWait:t,trailing:r})};const y={form:document.querySelector(".feedback-form"),email:document.querySelector(".feedback-form input"),message:document.querySelector(".feedback-form textarea")};y.form.addEventListener("submit",(function(e){e.preventDefault(),""===y.email.value||""===y.message.value?alert("Please fill in all the fields!"):(console.log("formData",formData),localStorage.removeItem("feedback-form-state"),y.form.reset())})),y.form.addEventListener("input",e(t)((function(e){const t=localStorage.getItem("feedback-form-state");let n=t?JSON.parse(t):{};n[e.target.name]=e.target.value;const o=JSON.stringify(n);localStorage.setItem("feedback-form-state",o)}),500)),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(y.email.value=e.email||"",y.message.value=e.message||"")}();
//# sourceMappingURL=03-feedback.fb540bd6.js.map
