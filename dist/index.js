"use strict";var o=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var v=o(function(l,u){
var s=require('@stdlib/assert-is-string/dist').isPrimitive,t=require('@stdlib/error-tools-fmtprodmsg/dist'),n=/[-\/\\^$*+?.()|[\]{}]/g;function g(r){var e,a,i;if(!s(r))throw new TypeError(t('1TZB7',r));if(r[0]==="/")for(e=r.length,i=e-1;i>=0&&r[i]!=="/";i--);return i===void 0||i<=0?r.replace(n,"\\$&"):(a=r.substring(1,i),a=a.replace(n,"\\$&"),r=r[0]+a+r.substring(i),r)}u.exports=g
});var p=v();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
