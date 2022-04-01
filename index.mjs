// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var e=r.isPrimitive,i=s,t=/[-\/\\^$*+?.()|[\]{}]/g;var n=function(r){var s,n;if(!e(r))throw new TypeError(i("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if("/"===r[0])for(n=r.length-1;n>=0&&"/"!==r[n];n--);return void 0===n||n<=0?r.replace(t,"\\$&"):(s=(s=r.substring(1,n)).replace(t,"\\$&"),r=r[0]+s+r.substring(n))};export{n as default};
//# sourceMappingURL=index.mjs.map
