// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";var e=/[-\/\\^$*+?.()|[\]{}]/g;function t(t){var i,n;if(!r(t))throw new TypeError(s("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(n=t.length-1;n>=0&&"/"!==t[n];n--);return void 0===n||n<=0?t.replace(e,"\\$&"):(i=(i=t.substring(1,n)).replace(e,"\\$&"),t=t[0]+i+t.substring(n))}export{t as default};
//# sourceMappingURL=index.mjs.map
