!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=59)}([function(e,t,r){"use strict";var n=r(13),o=Object.prototype.toString;function s(e){return"[object Array]"===o.call(e)}function i(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===o.call(e)}function f(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:c,isUndefined:i,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:u,isStream:function(e){return a(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:f,merge:function e(){var t={};function r(r,n){c(t[n])&&c(r)?t[n]=e(t[n],r):c(r)?t[n]=e({},r):s(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)f(arguments[n],r);return t},extend:function(e,t,r){return f(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},,,function(e,t){e.exports=require("fs")},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("http")},function(e,t){e.exports=require("https")},function(e,t,r){"use strict";var n=r(0);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var s;if(r)s=r(t);else if(n.isURLSearchParams(t))s=t.toString();else{var i=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),s=i.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},function(e,t,r){"use strict";var n=r(17);e.exports=function(e,t,r,o,s){var i=new Error(e);return n(i,t,r,o,s)}},function(e,t){e.exports=require("url")},function(e,t){e.exports=require("util")},function(e,t){e.exports=require("stream")},function(e,t,r){const n=r(3),o=r(4);function s(e){console.log("[dotenv][DEBUG] "+e)}const i=/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/,a=/\\n/g,c=/\n|\r|\r\n/;function u(e,t){const r=Boolean(t&&t.debug),n={};return e.toString().split(c).forEach((function(e,t){const o=e.match(i);if(null!=o){const e=o[1];let t=o[2]||"";const r=t.length-1,s='"'===t[0]&&'"'===t[r];"'"===t[0]&&"'"===t[r]||s?(t=t.substring(1,r),s&&(t=t.replace(a,"\n"))):t=t.trim(),n[e]=t}else r&&s(`did not match key and value when parsing line ${t+1}: ${e}`)})),n}e.exports.config=function(e){let t=o.resolve(process.cwd(),".env"),r="utf8",i=!1;e&&(null!=e.path&&(t=e.path),null!=e.encoding&&(r=e.encoding),null!=e.debug&&(i=!0));try{const e=u(n.readFileSync(t,{encoding:r}),{debug:i});return Object.keys(e).forEach((function(t){Object.prototype.hasOwnProperty.call(process.env,t)?i&&s(`"${t}" is already defined in \`process.env\` and will not be overwritten`):process.env[t]=e[t]})),{parsed:e}}catch(e){return{error:e}}},e.exports.parse=u},function(e,t,r){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},function(e,t,r){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,r){"use strict";var n=r(0),o=r(30),s={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var a,c={adapter:("undefined"!=typeof XMLHttpRequest?a=r(31):"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process)&&(a=r(37)),a),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(s)})),e.exports=c},function(e,t,r){"use strict";var n=r(8);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},function(e,t,r){"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,r){"use strict";var n=r(33),o=r(34);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},function(e,t,r){var n=r(9),o=n.URL,s=r(5),i=r(6),a=r(11).Writable,c=r(38),u=r(39),f=Object.create(null);["abort","aborted","connect","error","socket","timeout"].forEach((function(e){f[e]=function(t,r,n){this._redirectable.emit(e,t,r,n)}}));var p=w("ERR_FR_REDIRECTION_FAILURE",""),d=w("ERR_FR_TOO_MANY_REDIRECTS","Maximum number of redirects exceeded"),l=w("ERR_FR_MAX_BODY_LENGTH_EXCEEDED","Request body larger than maxBodyLength limit"),h=w("ERR_STREAM_WRITE_AFTER_END","write after end");function m(e,t){a.call(this),this._sanitizeOptions(e),this._options=e,this._ended=!1,this._ending=!1,this._redirectCount=0,this._redirects=[],this._requestBodyLength=0,this._requestBodyBuffers=[],t&&this.on("response",t);var r=this;this._onNativeResponse=function(e){r._processResponse(e)},this._performRequest()}function g(e,t){clearTimeout(e._timeout),e._timeout=setTimeout((function(){e.emit("timeout")}),t)}function y(){clearTimeout(this._timeout)}function v(e){var t={maxRedirects:21,maxBodyLength:10485760},r={};return Object.keys(e).forEach((function(s){var i=s+":",a=r[i]=e[s],f=t[s]=Object.create(a);Object.defineProperties(f,{request:{value:function(e,s,a){if("string"==typeof e){var f=e;try{e=x(new o(f))}catch(t){e=n.parse(f)}}else o&&e instanceof o?e=x(e):(a=s,s=e,e={protocol:i});return"function"==typeof s&&(a=s,s=null),(s=Object.assign({maxRedirects:t.maxRedirects,maxBodyLength:t.maxBodyLength},e,s)).nativeProtocols=r,c.equal(s.protocol,i,"protocol mismatch"),u("options",s),new m(s,a)},configurable:!0,enumerable:!0,writable:!0},get:{value:function(e,t,r){var n=f.request(e,t,r);return n.end(),n},configurable:!0,enumerable:!0,writable:!0}})})),t}function b(){}function x(e){var t={protocol:e.protocol,hostname:e.hostname.startsWith("[")?e.hostname.slice(1,-1):e.hostname,hash:e.hash,search:e.search,pathname:e.pathname,path:e.pathname+e.search,href:e.href};return""!==e.port&&(t.port=Number(e.port)),t}function _(e,t){var r;for(var n in t)e.test(n)&&(r=t[n],delete t[n]);return r}function w(e,t){function r(e){Error.captureStackTrace(this,this.constructor),this.message=e||t}return r.prototype=new Error,r.prototype.constructor=r,r.prototype.name="Error ["+e+"]",r.prototype.code=e,r}m.prototype=Object.create(a.prototype),m.prototype.write=function(e,t,r){if(this._ending)throw new h;if(!("string"==typeof e||"object"==typeof e&&"length"in e))throw new TypeError("data should be a string, Buffer or Uint8Array");"function"==typeof t&&(r=t,t=null),0!==e.length?this._requestBodyLength+e.length<=this._options.maxBodyLength?(this._requestBodyLength+=e.length,this._requestBodyBuffers.push({data:e,encoding:t}),this._currentRequest.write(e,t,r)):(this.emit("error",new l),this.abort()):r&&r()},m.prototype.end=function(e,t,r){if("function"==typeof e?(r=e,e=t=null):"function"==typeof t&&(r=t,t=null),e){var n=this,o=this._currentRequest;this.write(e,t,(function(){n._ended=!0,o.end(null,null,r)})),this._ending=!0}else this._ended=this._ending=!0,this._currentRequest.end(null,null,r)},m.prototype.setHeader=function(e,t){this._options.headers[e]=t,this._currentRequest.setHeader(e,t)},m.prototype.removeHeader=function(e){delete this._options.headers[e],this._currentRequest.removeHeader(e)},m.prototype.setTimeout=function(e,t){if(t&&this.once("timeout",t),this.socket)g(this,e);else{var r=this;this._currentRequest.once("socket",(function(){g(r,e)}))}return this.once("response",y),this.once("error",y),this},["abort","flushHeaders","getHeader","setNoDelay","setSocketKeepAlive"].forEach((function(e){m.prototype[e]=function(t,r){return this._currentRequest[e](t,r)}})),["aborted","connection","socket"].forEach((function(e){Object.defineProperty(m.prototype,e,{get:function(){return this._currentRequest[e]}})})),m.prototype._sanitizeOptions=function(e){if(e.headers||(e.headers={}),e.host&&(e.hostname||(e.hostname=e.host),delete e.host),!e.pathname&&e.path){var t=e.path.indexOf("?");t<0?e.pathname=e.path:(e.pathname=e.path.substring(0,t),e.search=e.path.substring(t))}},m.prototype._performRequest=function(){var e=this._options.protocol,t=this._options.nativeProtocols[e];if(t){if(this._options.agents){var r=e.substr(0,e.length-1);this._options.agent=this._options.agents[r]}var o=this._currentRequest=t.request(this._options,this._onNativeResponse);for(var s in this._currentUrl=n.format(this._options),o._redirectable=this,f)s&&o.on(s,f[s]);if(this._isRedirect){var i=0,a=this,c=this._requestBodyBuffers;!function e(t){if(o===a._currentRequest)if(t)a.emit("error",t);else if(i<c.length){var r=c[i++];o.finished||o.write(r.data,r.encoding,e)}else a._ended&&o.end()}()}}else this.emit("error",new TypeError("Unsupported protocol "+e))},m.prototype._processResponse=function(e){var t=e.statusCode;this._options.trackRedirects&&this._redirects.push({url:this._currentUrl,headers:e.headers,statusCode:t});var r=e.headers.location;if(r&&!1!==this._options.followRedirects&&t>=300&&t<400){if(this._currentRequest.removeAllListeners(),this._currentRequest.on("error",b),this._currentRequest.abort(),e.destroy(),++this._redirectCount>this._options.maxRedirects)return void this.emit("error",new d);((301===t||302===t)&&"POST"===this._options.method||303===t&&!/^(?:GET|HEAD)$/.test(this._options.method))&&(this._options.method="GET",this._requestBodyBuffers=[],_(/^content-/i,this._options.headers));var o=_(/^host$/i,this._options.headers)||n.parse(this._currentUrl).hostname,s=n.resolve(this._currentUrl,r);u("redirecting to",s),this._isRedirect=!0;var i=n.parse(s);if(Object.assign(this._options,i),i.hostname!==o&&_(/^authorization$/i,this._options.headers),"function"==typeof this._options.beforeRedirect){var a={headers:e.headers};try{this._options.beforeRedirect.call(null,this._options,a)}catch(e){return void this.emit("error",e)}this._sanitizeOptions(this._options)}try{this._performRequest()}catch(e){var c=new p("Redirected request failed: "+e.message);c.cause=e,this.emit("error",c)}}else e.responseUrl=this._currentUrl,e.redirects=this._redirects,this.emit("response",e),this._requestBodyBuffers=[]},e.exports=v({http:s,https:i}),e.exports.wrap=v},function(e,t,r){var n;function o(e){function r(){if(r.enabled){var e=r,o=+new Date,s=o-(n||o);e.diff=s,e.prev=n,e.curr=o,n=o;for(var i=new Array(arguments.length),a=0;a<i.length;a++)i[a]=arguments[a];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var c=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(r,n){if("%%"===r)return r;c++;var o=t.formatters[n];if("function"==typeof o){var s=i[c];r=o.call(e,s),i.splice(c,1),c--}return r})),t.formatArgs.call(e,i);var u=r.log||t.log||console.log.bind(console);u.apply(e,i)}}return r.namespace=e,r.enabled=t.enabled(e),r.useColors=t.useColors(),r.color=function(e){var r,n=0;for(r in e)n=(n<<5)-n+e.charCodeAt(r),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"==typeof t.init&&t.init(r),r}(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var r=("string"==typeof e?e:"").split(/[\s,]+/),n=r.length,o=0;o<n;o++)r[o]&&("-"===(e=r[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var r,n;for(r=0,n=t.skips.length;r<n;r++)if(t.skips[r].test(e))return!1;for(r=0,n=t.names.length;r<n;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(42),t.names=[],t.skips=[],t.formatters={}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t){t=t||{};var r={},o=["url","method","data"],s=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],a=["validateStatus"];function c(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function u(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=c(void 0,e[o])):r[o]=c(e[o],t[o])}n.forEach(o,(function(e){n.isUndefined(t[e])||(r[e]=c(void 0,t[e]))})),n.forEach(s,u),n.forEach(i,(function(o){n.isUndefined(t[o])?n.isUndefined(e[o])||(r[o]=c(void 0,e[o])):r[o]=c(void 0,t[o])})),n.forEach(a,(function(n){n in t?r[n]=c(e[n],t[n]):n in e&&(r[n]=c(void 0,e[n]))}));var f=o.concat(s).concat(i).concat(a),p=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===f.indexOf(e)}));return n.forEach(p,u),r}},function(e,t,r){"use strict";function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n},,function(e,t,r){e.exports=r(25)},function(e,t,r){"use strict";var n=r(0),o=r(13),s=r(26),i=r(21);function a(e){var t=new s(e),r=o(s.prototype.request,t);return n.extend(r,s.prototype,t),n.extend(r,t),r}var c=a(r(15));c.Axios=s,c.create=function(e){return a(i(c.defaults,e))},c.Cancel=r(22),c.CancelToken=r(48),c.isCancel=r(14),c.all=function(e){return Promise.all(e)},c.spread=r(49),c.isAxiosError=r(50),e.exports=c,e.exports.default=c},function(e,t,r){"use strict";var n=r(0),o=r(7),s=r(27),i=r(28),a=r(21);function c(e){this.defaults=e,this.interceptors={request:new s,response:new s}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],r=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)r=r.then(t.shift(),t.shift());return r},c.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,r){return this.request(a(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,r,n){return this.request(a(n||{},{method:e,url:t,data:r}))}})),e.exports=c},function(e,t,r){"use strict";var n=r(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,r){"use strict";var n=r(0),o=r(29),s=r(14),i=r(15);function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return a(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return a(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(a(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t,r){return n.forEach(r,(function(r){e=r(e,t)})),e}},function(e,t,r){"use strict";var n=r(0);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},function(e,t,r){"use strict";var n=r(0),o=r(16),s=r(32),i=r(7),a=r(18),c=r(35),u=r(36),f=r(8);e.exports=function(e){return new Promise((function(t,r){var p=e.data,d=e.headers;n.isFormData(p)&&delete d["Content-Type"];var l=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";d.Authorization="Basic "+btoa(h+":"+m)}var g=a(e.baseURL,e.url);if(l.open(e.method.toUpperCase(),i(g,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l.onreadystatechange=function(){if(l&&4===l.readyState&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in l?c(l.getAllResponseHeaders()):null,s={data:e.responseType&&"text"!==e.responseType?l.response:l.responseText,status:l.status,statusText:l.statusText,headers:n,config:e,request:l};o(t,r,s),l=null}},l.onabort=function(){l&&(r(f("Request aborted",e,"ECONNABORTED",l)),l=null)},l.onerror=function(){r(f("Network Error",e,null,l)),l=null},l.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(f(t,e,"ECONNABORTED",l)),l=null},n.isStandardBrowserEnv()){var y=(e.withCredentials||u(g))&&e.xsrfCookieName?s.read(e.xsrfCookieName):void 0;y&&(d[e.xsrfHeaderName]=y)}if("setRequestHeader"in l&&n.forEach(d,(function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete d[t]:l.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),e.responseType)try{l.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){l&&(l.abort(),r(e),l=null)})),p||(p=null),l.send(p)}))}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,r){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,r){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,r){"use strict";var n=r(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,s,i={};return e?(n.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=n.trim(e.substr(0,s)).toLowerCase(),r=n.trim(e.substr(s+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([r]):i[t]?i[t]+", "+r:r}})),i):i}},function(e,t,r){"use strict";var n=r(0);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},function(e,t,r){"use strict";var n=r(0),o=r(16),s=r(18),i=r(7),a=r(5),c=r(6),u=r(19).http,f=r(19).https,p=r(9),d=r(46),l=r(47),h=r(8),m=r(17),g=/https:?/;e.exports=function(e){return new Promise((function(t,r){var y=function(e){t(e)},v=function(e){r(e)},b=e.data,x=e.headers;if(x["User-Agent"]||x["user-agent"]||(x["User-Agent"]="axios/"+l.version),b&&!n.isStream(b)){if(Buffer.isBuffer(b));else if(n.isArrayBuffer(b))b=Buffer.from(new Uint8Array(b));else{if(!n.isString(b))return v(h("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",e));b=Buffer.from(b,"utf-8")}x["Content-Length"]=b.length}var _=void 0;e.auth&&(_=(e.auth.username||"")+":"+(e.auth.password||""));var w=s(e.baseURL,e.url),E=p.parse(w),R=E.protocol||"http:";if(!_&&E.auth){var O=E.auth.split(":");_=(O[0]||"")+":"+(O[1]||"")}_&&delete x.Authorization;var C=g.test(R),j=C?e.httpsAgent:e.httpAgent,A={path:i(E.path,e.params,e.paramsSerializer).replace(/^\?/,""),method:e.method.toUpperCase(),headers:x,agent:j,agents:{http:e.httpAgent,https:e.httpsAgent},auth:_};e.socketPath?A.socketPath=e.socketPath:(A.hostname=E.hostname,A.port=E.port);var S,k=e.proxy;if(!k&&!1!==k){var B=R.slice(0,-1)+"_proxy",T=process.env[B]||process.env[B.toUpperCase()];if(T){var q=p.parse(T),U=process.env.no_proxy||process.env.NO_PROXY,N=!0;if(U)N=!U.split(",").map((function(e){return e.trim()})).some((function(e){return!!e&&("*"===e||("."===e[0]&&E.hostname.substr(E.hostname.length-e.length)===e||E.hostname===e))}));if(N&&(k={host:q.hostname,port:q.port,protocol:q.protocol},q.auth)){var L=q.auth.split(":");k.auth={username:L[0],password:L[1]}}}}k&&(A.headers.host=E.hostname+(E.port?":"+E.port:""),function e(t,r,n){if(t.hostname=r.host,t.host=r.host,t.port=r.port,t.path=n,r.auth){var o=Buffer.from(r.auth.username+":"+r.auth.password,"utf8").toString("base64");t.headers["Proxy-Authorization"]="Basic "+o}t.beforeRedirect=function(t){t.headers.host=t.host,e(t,r,t.href)}}(A,k,R+"//"+E.hostname+(E.port?":"+E.port:"")+A.path));var P=C&&(!k||g.test(k.protocol));e.transport?S=e.transport:0===e.maxRedirects?S=P?c:a:(e.maxRedirects&&(A.maxRedirects=e.maxRedirects),S=P?f:u),e.maxBodyLength>-1&&(A.maxBodyLength=e.maxBodyLength);var D=S.request(A,(function(t){if(!D.aborted){var r=t,s=t.req||D;if(204!==t.statusCode&&"HEAD"!==s.method&&!1!==e.decompress)switch(t.headers["content-encoding"]){case"gzip":case"compress":case"deflate":r=r.pipe(d.createUnzip()),delete t.headers["content-encoding"]}var i={status:t.statusCode,statusText:t.statusMessage,headers:t.headers,config:e,request:s};if("stream"===e.responseType)i.data=r,o(y,v,i);else{var a=[];r.on("data",(function(t){a.push(t),e.maxContentLength>-1&&Buffer.concat(a).length>e.maxContentLength&&(r.destroy(),v(h("maxContentLength size of "+e.maxContentLength+" exceeded",e,null,s)))})),r.on("error",(function(t){D.aborted||v(m(t,e,null,s))})),r.on("end",(function(){var t=Buffer.concat(a);"arraybuffer"!==e.responseType&&(t=t.toString(e.responseEncoding),e.responseEncoding&&"utf8"!==e.responseEncoding||(t=n.stripBOM(t))),i.data=t,o(y,v,i)}))}}}));D.on("error",(function(t){D.aborted&&"ERR_FR_TOO_MANY_REDIRECTS"!==t.code||v(m(t,e,null,D))})),e.timeout&&D.setTimeout(e.timeout,(function(){D.abort(),v(h("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",D))})),e.cancelToken&&e.cancelToken.promise.then((function(e){D.aborted||(D.abort(),v(e))})),n.isStream(b)?b.on("error",(function(t){v(m(t,e,null,D))})).pipe(D):D.end(b)}))}},function(e,t){e.exports=require("assert")},function(e,t,r){var n;try{n=r(40)("follow-redirects")}catch(e){n=function(){}}e.exports=n},function(e,t,r){"undefined"!=typeof process&&"renderer"===process.type?e.exports=r(41):e.exports=r(43)},function(e,t,r){function n(){var e;try{e=t.storage.debug}catch(e){}return!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG),e}(t=e.exports=r(20)).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var r=this.useColors;if(e[0]=(r?"%c":"")+this.namespace+(r?" %c":" ")+e[0]+(r?"%c ":" ")+"+"+t.humanize(this.diff),!r)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var o=0,s=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(s=o))})),e.splice(s,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=n,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(n())},function(e,t){var r=1e3,n=6e4,o=60*n,s=24*o;function i(e,t,r){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+r:Math.ceil(e/t)+" "+r+"s"}e.exports=function(e,t){t=t||{};var a,c=typeof e;if("string"===c&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return 315576e5*i;case"days":case"day":case"d":return i*s;case"hours":case"hour":case"hrs":case"hr":case"h":return i*o;case"minutes":case"minute":case"mins":case"min":case"m":return i*n;case"seconds":case"second":case"secs":case"sec":case"s":return i*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===c&&!1===isNaN(e))return t.long?i(a=e,s,"day")||i(a,o,"hour")||i(a,n,"minute")||i(a,r,"second")||a+" ms":function(e){if(e>=s)return Math.round(e/s)+"d";if(e>=o)return Math.round(e/o)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=r)return Math.round(e/r)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,t,r){var n=r(44),o=r(10);(t=e.exports=r(20)).init=function(e){e.inspectOpts={};for(var r=Object.keys(t.inspectOpts),n=0;n<r.length;n++)e.inspectOpts[r[n]]=t.inspectOpts[r[n]]},t.log=function(){return i.write(o.format.apply(o,arguments)+"\n")},t.formatArgs=function(e){var r=this.namespace;if(this.useColors){var n=this.color,o="  [3"+n+";1m"+r+" [0m";e[0]=o+e[0].split("\n").join("\n"+o),e.push("[3"+n+"m+"+t.humanize(this.diff)+"[0m")}else e[0]=(new Date).toUTCString()+" "+r+" "+e[0]},t.save=function(e){null==e?delete process.env.DEBUG:process.env.DEBUG=e},t.load=a,t.useColors=function(){return"colors"in t.inspectOpts?Boolean(t.inspectOpts.colors):n.isatty(s)},t.colors=[6,2,3,4,5,1],t.inspectOpts=Object.keys(process.env).filter((function(e){return/^debug_/i.test(e)})).reduce((function(e,t){var r=t.substring(6).toLowerCase().replace(/_([a-z])/g,(function(e,t){return t.toUpperCase()})),n=process.env[t];return n=!!/^(yes|on|true|enabled)$/i.test(n)||!/^(no|off|false|disabled)$/i.test(n)&&("null"===n?null:Number(n)),e[r]=n,e}),{});var s=parseInt(process.env.DEBUG_FD,10)||2;1!==s&&2!==s&&o.deprecate((function(){}),"except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();var i=1===s?process.stdout:2===s?process.stderr:function(e){var t;switch(process.binding("tty_wrap").guessHandleType(e)){case"TTY":(t=new n.WriteStream(e))._type="tty",t._handle&&t._handle.unref&&t._handle.unref();break;case"FILE":var o=r(3);(t=new o.SyncWriteStream(e,{autoClose:!1}))._type="fs";break;case"PIPE":case"TCP":var s=r(45);(t=new s.Socket({fd:e,readable:!1,writable:!0})).readable=!1,t.read=null,t._type="pipe",t._handle&&t._handle.unref&&t._handle.unref();break;default:throw new Error("Implement me. Unknown stream file type!")}return t.fd=e,t._isStdio=!0,t}(s);function a(){return process.env.DEBUG}t.formatters.o=function(e){return this.inspectOpts.colors=this.useColors,o.inspect(e,this.inspectOpts).split("\n").map((function(e){return e.trim()})).join(" ")},t.formatters.O=function(e){return this.inspectOpts.colors=this.useColors,o.inspect(e,this.inspectOpts)},t.enable(a())},function(e,t){e.exports=require("tty")},function(e,t){e.exports=require("net")},function(e,t){e.exports=require("zlib")},function(e){e.exports=JSON.parse('{"name":"axios","version":"0.21.1","description":"Promise based HTTP client for the browser and node.js","main":"index.js","scripts":{"test":"grunt test && bundlesize","start":"node ./sandbox/server.js","build":"NODE_ENV=production grunt build","preversion":"npm test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json","postversion":"git push && git push --tags","examples":"node ./examples/server.js","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","fix":"eslint --fix lib/**/*.js"},"repository":{"type":"git","url":"https://github.com/axios/axios.git"},"keywords":["xhr","http","ajax","promise","node"],"author":"Matt Zabriskie","license":"MIT","bugs":{"url":"https://github.com/axios/axios/issues"},"homepage":"https://github.com/axios/axios","devDependencies":{"bundlesize":"^0.17.0","coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.0.2","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^20.1.0","grunt-karma":"^2.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^1.0.18","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^1.3.0","karma-chrome-launcher":"^2.2.0","karma-coverage":"^1.1.1","karma-firefox-launcher":"^1.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-opera-launcher":"^1.0.0","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^1.2.0","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.7","karma-webpack":"^1.7.0","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^5.2.0","sinon":"^4.5.0","typescript":"^2.8.1","url-search-params":"^0.10.0","webpack":"^1.13.1","webpack-dev-server":"^1.14.1"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"jsdelivr":"dist/axios.min.js","unpkg":"dist/axios.min.js","typings":"./index.d.ts","dependencies":{"follow-redirects":"^1.10.0"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}]}')},function(e,t,r){"use strict";var n=r(22);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,r){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,r){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},,,,,,,,,function(e,t,r){r(12).config();const n=r(24);t.handler=async(e,t,r)=>{const o={"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"};if("POST"!==e.httpMethod||!e.body)return{statusCode:200,headers:o,body:JSON.stringify({status:"This was not a POST request!"})};const s=JSON.parse(e.body),i=JSON.stringify({sandbox:1,template_id:s.body.isTaxi?"bf3bfc2a90a0408287b0b1ab3930f597":"f11c974e6c2743229ae8fc16f4b95217",title:`Contrat de ${s.body.name} ${s.body.firstname} pour la société ${s.body.entreprise}`,message:`Un contrat de prestation de services Paramedic (${s.body.isTaxi?"Taxi":"Ambulance"}) vient d'etres signer par ${s.body.firstname} ${s.body.name} pour la société ${s.body.entreprise} .\n    `,custom_requester_name:"Paramedic",custom_requester_email:"",client:"",embedded_signing_enabled:1,signers:[{role:"user",name:s.body.name,email:s.body.email,language:"fr"}],recipients:[{role:"Assistant",name:"Paramedic.tech",email:"paramedic.dev@gmail.com",language:"fr"}],fields:[{identifier:s.body.isTaxi?"entreprise_OqumJW0ZU0Dlzx":"entreprise_sS85nmxnS0WEKg",value:s.body.entreprise},{identifier:s.body.isTaxi?"name_4K5veKLCY5LOHR":"name_upC2i7hHBt3aSm",value:`${s.body.name} ${s.body.firstname}`}]});return n.post("https://api.eversign.com/api/document?access_key=3b6f67e4b8b3cd90a03fbfcb7dd4eeba&business_id=253385",i).then(e=>(console.log("sended:",e),{statusCode:200,headers:o,body:JSON.stringify({url:e.data.signers[0].embedded_signing_url,hash:e.data.document_hash})})).catch(e=>{})}}]));