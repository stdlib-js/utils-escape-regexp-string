// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.2.2-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.3-esm/index.mjs";var t=/[-\/\\^$*+?.()|[\]{}]/g;function e(e){var i,n;if(!r(e))throw new TypeError(s("1TZB7",e));if("/"===e[0])for(n=e.length-1;n>=0&&"/"!==e[n];n--);return void 0===n||n<=0?e.replace(t,"\\$&"):(i=(i=e.substring(1,n)).replace(t,"\\$&"),e=e[0]+i+e.substring(n))}export{e as default};
//# sourceMappingURL=index.mjs.map
