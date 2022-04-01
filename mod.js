// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var i=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,i.get?i:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},i=Object.defineProperty,n=Object.prototype,a=n.toString,o=n.__defineGetter__,u=n.__defineSetter__,c=n.__lookupGetter__,s=n.__lookupSetter__;var f=function(r,e,t){var i,f,l,p;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(c.call(r,e)||s.call(r,e)?(i=r.__proto__,r.__proto__=n,delete r[e],r[e]=t.value,r.__proto__=i):r[e]=t.value),l="get"in t,p="set"in t,f&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},l=i,p=f,v=t()?l:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g;var h=function(r){return"string"==typeof r};var m=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return m&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,y=w;var E=function(r){return y.call(r)},j=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&j.call(r,e)},_="function"==typeof Symbol?Symbol.toStringTag:"",O=P,T=_,x=w;var V=E,S=function(r){var e,t,i;if(null==r)return x.call(r);t=r[T],e=O(r,T);try{r[T]=void 0}catch(e){return x.call(r)}return i=x.call(r),e?r[T]=t:delete r[T],i},k=b()?S:V,I=String.prototype.valueOf;var $=k,A=function(r){try{return I.call(r),!0}catch(r){return!1}},R=b();var F=function(r){return"object"==typeof r&&(r instanceof String||(R?A(r):"[object String]"===$(r)))},M=h,C=F;var N=d,B=function(r){return M(r)||C(r)},G=F;N(B,"isPrimitive",h),N(B,"isObject",G);var L=B,Z=Math.floor;var W=function(r){return Z(r)===r},X=W;var z=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&X(r.length)&&r.length>=0&&r.length<=9007199254740991};var U=function(r){return"number"==typeof r},Y=Number,D=Y.prototype.toString;var q=k,H=Y,J=function(r){try{return D.call(r),!0}catch(r){return!1}},K=b();var Q=function(r){return"object"==typeof r&&(r instanceof H||(K?J(r):"[object Number]"===q(r)))},rr=U,er=Q;var tr=d,ir=function(r){return rr(r)||er(r)},nr=Q;tr(ir,"isPrimitive",U),tr(ir,"isObject",nr);var ar=ir,or=Number.POSITIVE_INFINITY,ur=Y.NEGATIVE_INFINITY,cr=or,sr=ur,fr=W;var lr=function(r){return r<cr&&r>sr&&fr(r)},pr=ar.isPrimitive,vr=lr;var gr=function(r){return pr(r)&&vr(r)},dr=ar.isObject,hr=lr;var mr=function(r){return dr(r)&&hr(r.valueOf())},br=gr,wr=mr;var yr=d,Er=function(r){return br(r)||wr(r)},jr=mr;yr(Er,"isPrimitive",gr),yr(Er,"isObject",jr);var Pr=Er;var _r=function(r){return r!=r},Or=ar.isPrimitive,Tr=_r;var xr=function(r){return Or(r)&&Tr(r)},Vr=ar.isObject,Sr=_r;var kr=function(r){return Vr(r)&&Sr(r.valueOf())},Ir=xr,$r=kr;var Ar=d,Rr=function(r){return Ir(r)||$r(r)},Fr=kr;Ar(Rr,"isPrimitive",xr),Ar(Rr,"isObject",Fr);var Mr=z,Cr=Pr.isPrimitive,Nr=L.isPrimitive,Br=Rr.isPrimitive;var Gr=function(r,e,t){var i,n,a;if(!Mr(r)&&!Nr(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Cr(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(n=t)<0&&(n=0)}else n=0;if(Nr(r)){if(!Nr(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,n)}if(i=r.length,Br(e)){for(a=n;a<i;a++)if(Br(r[a]))return!0;return!1}for(a=n;a<i;a++)if(r[a]===e)return!0;return!1},Lr=L.isPrimitive;var Zr=function(r){if(!Lr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Wr=L.isPrimitive;var Xr=function(r){if(!Wr(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},zr=Zr,Ur=Xr,Yr=L.isPrimitive;var Dr=function(r){return Yr(r)&&r===Ur(r)&&r!==zr(r)},qr=or,Hr=ur;var Jr=function(r){return r==r&&r>Hr&&r<qr},Kr=Pr.isPrimitive;var Qr=function(r){return Kr(r)&&r>=0},re=Pr.isObject;var ee=function(r){return re(r)&&r.valueOf()>=0},te=Qr,ie=ee;var ne=d,ae=function(r){return te(r)||ie(r)},oe=ee;ne(ae,"isPrimitive",Qr),ne(ae,"isObject",oe);var ue=ae.isPrimitive,ce=L.isPrimitive;var se=function(r,e){var t,i;if(!ce(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!ue(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",i=e;1==(1&i)&&(t+=r),0!==(i>>>=1);)r+=r;return t},fe=Pr.isPrimitive,le=L.isPrimitive;var pe=se,ve=function(r,e,t){var i,n;if(!le(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!le(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!fe(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");i=t<0?r.length+t:t}else i=0;if(0===e.length)return!0;if(i<0||i+e.length>r.length)return!1;for(n=0;n<e.length;n++)if(r.charCodeAt(i+n)!==e.charCodeAt(n))return!1;return!0};var ge=function(r,e,t){var i=!1,n=e-r.length;return n<0||(ve(r,"-")&&(i=!0,r=r.substr(1)),r=t?r+pe("0",n):pe("0",n)+r,i&&(r="-"+r)),r},de=Dr,he=Xr,me=Zr,be=Jr,we=ar.isPrimitive,ye=ge;var Ee=function(r){var e,t,i;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,i=parseInt(t,10),!be(i)){if(!we(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===r.specifier||10!==e)&&(i=4294967295+i+1),i<0?(t=(-i).toString(e),r.precision&&(t=ye(t,r.precision,r.padRight)),t="-"+t):(t=i.toString(e),i||r.precision?r.precision&&(t=ye(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=de(r.specifier)?he(t):me(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},je=L.isPrimitive,Pe=/[-\/\\^$*+?.()|[\]{}]/g;var _e=function(r){var e,t;if(!je(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Pe,"\\$&"):(e=(e=r.substring(1,t)).replace(Pe,"\\$&"),r=r[0]+e+r.substring(t))},Oe=/./;var Te=function(r){return"boolean"==typeof r},xe=Boolean.prototype.toString;var Ve=k,Se=function(r){try{return xe.call(r),!0}catch(r){return!1}},ke=b();var Ie=function(r){return"object"==typeof r&&(r instanceof Boolean||(ke?Se(r):"[object Boolean]"===Ve(r)))},$e=Te,Ae=Ie;var Re=d,Fe=function(r){return $e(r)||Ae(r)},Me=Ie;Re(Fe,"isPrimitive",Te),Re(Fe,"isObject",Me);var Ce="object"==typeof self?self:null,Ne="object"==typeof window?window:null,Be=Fe.isPrimitive,Ge=function(){return new Function("return this;")()},Le=Ce,Ze=Ne,We=r(Object.freeze({__proto__:null}));var Xe=function(r){if(arguments.length){if(!Be(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return Ge()}if(Le)return Le;if(Ze)return Ze;if(We)return We;throw new Error("unexpected error. Unable to resolve global object.")},ze=Xe(),Ue=ze.document&&ze.document.childNodes,Ye=Int8Array,De=Oe,qe=Ue,He=Ye;var Je=function(){return"function"==typeof De||"object"==typeof He||"function"==typeof qe};var Ke=function(){return/^\s*function\s*([^(]*)/i},Qe=Ke;d(Qe,"REGEXP",Ke());var rt=Qe,et=k;var tt=Array.isArray?Array.isArray:function(r){return"[object Array]"===et(r)};var it=function(r){return null!==r&&"object"==typeof r};d(it,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,i;if(!tt(e))return!1;if(0===(t=e.length))return!1;for(i=0;i<t;i++)if(!1===r(e[i]))return!1;return!0}}(it));var nt=it;var at=k,ot=rt.REGEXP,ut=function(r){return nt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var ct=function(r){var e,t,i;if(("Object"===(t=at(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(i=r.constructor).name)return i.name;if(e=ot.exec(i.toString()))return e[1]}return ut(r)?"Buffer":t},st=ct;var ft=ct;var lt=function(r){var e;return null===r?"null":"object"===(e=typeof r)?st(r).toLowerCase():e},pt=function(r){return ft(r).toLowerCase()},vt=Je()?pt:lt;var gt=function(r){return"function"===vt(r)},dt=RegExp.prototype.exec;var ht=k,mt=function(r){try{return dt.call(r),!0}catch(r){return!1}},bt=b();var wt=_e,yt=gt,Et=L.isPrimitive,jt=function(r){return"object"==typeof r&&(r instanceof RegExp||(bt?mt(r):"[object RegExp]"===ht(r)))};var Pt=Dr,_t=Xr,Ot=Zr,Tt=function(r,e,t){if(!Et(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Et(e))e=wt(e),e=new RegExp(e,"g");else if(!jt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Et(t)&&!yt(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},xt=Jr,Vt=ar.isPrimitive,St=function(r){return Math.abs(r)},kt=/e\+(\d)$/,It=/e-(\d)$/,$t=/^(\d+)$/,At=/^(\d+)e/,Rt=/\.0$/,Ft=/\.0*e/,Mt=/(\..*[^0])0*e/;var Ct=function(r){var e,t,i=parseFloat(r.arg);if(!xt(i)){if(!Vt(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":St(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=Tt(t,Mt,"$1e"),t=Tt(t,Ft,"e"),t=Tt(t,Rt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Tt(t,kt,"e+0$1"),t=Tt(t,It,"e-0$1"),r.alternate&&(t=Tt(t,$t,"$1."),t=Tt(t,At,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=Pt(r.specifier)?_t(t):Ot(t)},Nt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Bt=se;var Gt=L.isPrimitive,Lt=Gr,Zt=_r,Wt=Ee,Xt=Ct,zt=function(r){var e,t,i,n,a;for(e=0,i=[],a=Nt.exec(r);a;)(t=r.slice(e,Nt.lastIndex-a[0].length)).length&&i.push(t),(n=o(a,i.length))&&i.push(n),e=Nt.lastIndex,a=Nt.exec(r);return(t=r.slice(e)).length&&i.push(t),i;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},Ut=function(r,e,t){var i=e-r.length;return i<0?r:r=t?r+Bt(" ",i):Bt(" ",i)+r},Yt=ge,Dt=String.fromCharCode;var qt=L.isPrimitive,Ht=function(r){var e,t,i,n,a,o,u,c,s;if(!Gt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=zt(r),o="",u=1,c=0;c<e.length;c++)if(i=e[c],Gt(i))o+=i;else{for(i.mapping&&(u=i.mapping),t=i.flags,s=0;s<t.length;s++)switch(n=t.charAt(s)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=!Lt(t,"-");break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===i.width){if(i.width=parseInt(arguments[u],10),u+=1,Zt(i.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if("*"===i.precision&&i.hasPeriod){if(i.precision=parseInt(arguments[u],10),u+=1,Zt(i.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,i.hasPeriod=!1)}switch(i.arg=arguments[u],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":i.hasPeriod&&(i.padZeros=!1),i.arg=Wt(i);break;case"s":i.maxWidth=i.hasPeriod?i.precision:-1;break;case"c":if(!Zt(i.arg)){if((a=parseInt(i.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Zt(a)?String(i.arg):Dt(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":i.hasPeriod||(i.precision=6),i.arg=Xt(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Yt(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Ut(i.arg,i.width,i.padRight)),o+=i.arg||"",u+=1}return o},Jt=/[-\/\\^$*+?.()|[\]{}]/g;var Kt=function(r){var e,t;if(!qt(r))throw new TypeError(Ht("invalid argument. Must provide a regular expression string. Value: `%s`.",r));if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Jt,"\\$&"):(e=(e=r.substring(1,t)).replace(Jt,"\\$&"),r=r[0]+e+r.substring(t))};export{Kt as default};
//# sourceMappingURL=mod.js.map
