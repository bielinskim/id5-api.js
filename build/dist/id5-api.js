/**
 * @id5io/id5-api.js
 * @version v1.0.7
 * @link https://id5.io/
 * @license Apache-2.0
 */
!function(n){var a={};function r(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=5)}([function(e,t,n){"use strict";function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,a=arguments[t];for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.l=function(){C()&&f&&console.info.apply(console,m(arguments,"INFO:"))},t.m=function(){C()&&v&&console.warn.apply(console,m(arguments,"WARNING:"))},t.k=y,t.o=function(e){g=!!e},t.h=C,t.e=k,t.g=I,t.j=S,t.i=function(e){return k(e,i)},t.f=function(e){return k(e,s)},t.d=function(e){e=window.document.cookie.match("(^|;)\\s*"+e+"\\s*=\\s*([^;]*)\\s*(;|$)");return e?decodeURIComponent(e[2]):null},t.n=function(e,t,n){document.cookie="".concat(e,"=").concat(encodeURIComponent(t)).concat(""!==n?"; expires=".concat(n):"","; path=/")},t.a=function(e,t,n){var a,r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};try{var o=r.method||(n?"POST":"GET");document.createElement("a").href=e;var i,s="object"===l(t)&&null!==t?t:{success:function(){!function(){C()&&h&&console.log.apply(console,m(arguments,"MESSAGE:"))}("xhr success")},error:function(e){y("xhr error",null,e)}};"function"==typeof t&&(s.success=t),(a=new window.XMLHttpRequest).onreadystatechange=function(){var e;a.readyState===_&&(200<=(e=a.status)&&e<300||304===e?s.success(a.responseText,a):s.error(a.statusText,a))},a.ontimeout=function(){y("  xhr timeout after ",a.timeout,"ms")},"GET"===o&&n&&(c((i=function(e,t){var n=document.createElement("a");t&&"noDecodeWholeURL"in t&&t.noDecodeWholeURL?n.href=e:n.href=decodeURIComponent(e);t=t&&"decodeSearchAsString"in t&&t.decodeSearchAsString;return{href:n.href,protocol:(n.protocol||"").replace(/:$/,""),hostname:n.hostname,port:+n.port,pathname:n.pathname.replace(/^(?!\/)/,"/"),search:t?n.search:function(e){return e?e.replace(/^\?/,"").split("&").reduce(function(e,t){var n=t.split("="),n=(t=2,function(e){if(Array.isArray(e))return e}(n=n)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var a,r,o=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(o.push(a.value),!t||o.length!==t);i=!0);}catch(e){s=!0,r=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw r}}return o}}(n,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Map"===(n="Object"===n&&e.constructor?e.constructor.name:n)||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),t=n[0],n=n[1];return/\[\]$/.test(t)?(e[t=t.replace("[]","")]=e[t]||[],e[t].push(n)):e[t]=n||"",e},{}):{}}(n.search||""),hash:(n.hash||"").replace(/^#/,""),host:n.host||window.location.host}}(e,r)).search,n),e=function(e){return(e.protocol||"http")+"://"+(e.host||e.hostname+(e.port?":".concat(e.port):""))+(e.pathname||"")+(e.search?"?".concat(function(e){return Object.keys(e).map(function(t){return Array.isArray(e[t])?e[t].map(function(e){return"".concat(t,"[]=").concat(e)}).join("&"):"".concat(t,"=").concat(e[t])}).join("&")}(e.search||"")):"")+(e.hash?"#".concat(e.hash):"")}(i)),a.open(o,e,!0),r.withCredentials&&(a.withCredentials=!0),D(r.customHeaders,function(e,t){a.setRequestHeader(t,e)}),r.preflight&&a.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.setRequestHeader("Content-Type",r.contentType||"text/plain"),"POST"===o&&n?a.send(n):a.send()}catch(e){y("xhr construction",e)}},t.c=function(e,t,n){"loading"!==document.readyState?w(e,t,n):document.addEventListener("DOMContentLoaded",function(){w(e,t,n)})},t.b=function(e){for(var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,a=function(e,t){if(I(Math.imul))return Math.imul(e,t);var n=(4194303&e)*(t|=0);return 4290772992&e&&(n+=(4290772992&e)*t|0),0|n},r=3735928559^n,o=1103547991^n,i=0;i<e.length;i++)t=e.charCodeAt(i),r=a(r^t,2654435761),o=a(o^t,1597334677);return r=a(r^r>>>16,2246822507)^a(o^o>>>13,3266489909),(4294967296*(2097151&(o=a(o^o>>>16,2246822507)^a(r^r>>>13,3266489909)))+(r>>>0)).toString()};var a="Array",r="String",o="Function",i="Object",s="Boolean",d=Object.prototype.toString,p="TRUE"===function(e){e=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(window.location.search);return null!==e?decodeURIComponent(e[1].replace(/\+/g," ")):""}("id5_debug").toUpperCase(),t=Boolean(window.console),h=Boolean(t&&window.console.log),f=Boolean(t&&window.console.info),v=Boolean(t&&window.console.warn),b=Boolean(t&&window.console.error),g=!1;function y(){C()&&b&&console.error.apply(console,m(arguments,"ERROR:"))}function m(e,t){return e=[].slice.call(e),t&&e.unshift(t),e.unshift("display: inline-block; color: #fff; background: #1c307e; padding: 1px 4px; border-radius: 3px;"),e.unshift("%cID5"),e}function C(){return p||g}function k(e,t){return d.call(e)==="[object "+t+"]"}function I(e){return k(e,o)}function S(e){return k(e,r)}function O(e){if(!e)return 1;if(k(e,a)||S(e))return!(0<e.length);for(var t in e)if(hasOwnProperty.call(e,t))return;return 1}function D(e,t){if(!O(e)){if(I(e.forEach))return e.forEach(t,this);var n=0,a=e.length;if(0<a)for(;n<a;n++)t(e[n],n,e);else for(n in e)hasOwnProperty.call(e,n)&&t.call(this,e[n],n)}}var _=4;function w(e,t,n){var a=new Image;a.src=e,I(t)&&t(),I(n)&&(a.complete?n():a.addEventListener("load",n))}},function(e,t){e.exports={STORAGE_CONFIG:{ID5:{name:"id5id",expiresDays:90},LAST:{name:"id5id_last",expiresDays:90},CONSENT_DATA:{name:"id5id_cached_consent_data",expiresDays:30},PD:{name:"id5id_cached_pd",expiresDays:30},PRIVACY:{name:"id5id_privacy",expiresDays:30}},LEGACY_COOKIE_NAMES:["id5.1st","id5id.1st"],PRIVACY:{JURISDICTIONS:{gdpr:!0,ccpa:!1,lgpd:!0,other:!1}},ID5_EIDS_SOURCE:"id5-sync.com"}},function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(0),t=n(1),o=n.n(t);function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function n(e,t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),s(this,"localStorageAllowedCallback",void 0),s(this,"localStorage",void 0),this.localStorageAllowedCallback=e,this.localStorage=t}var e,t,a;return e=n,a=[{key:"pdCacheConfig",value:function(e){return{name:"".concat(o.a.STORAGE_CONFIG.PD.name,"_").concat(e),expiresDays:o.a.STORAGE_CONFIG.PD.expiresDays}}},{key:"makeStoredHash",value:function(e){return Object(r.b)("string"==typeof e?e:"")}},{key:"nbCacheConfig",value:function(e){return{name:"".concat(o.a.STORAGE_CONFIG.ID5.name,"_").concat(e,"_nb"),expiresDays:o.a.STORAGE_CONFIG.ID5.expiresDays}}},{key:"storedDataMatchesCurrentData",value:function(e,t){return null==e||e===t}},{key:"makeStoredConsentDataHash",value:function(e){var t={consentString:"",gdprApplies:!1,apiVersion:0};return e&&(t.consentString=e.consentString,t.gdprApplies=e.gdprApplies,t.apiVersion=e.apiVersion),Object(r.b)(JSON.stringify(t))}}],(t=[{key:"get",value:function(e){try{if(!0===this.localStorageAllowedCallback())return this.localStorage.getItemWithExpiration(e);Object(r.k)("clientStore.get() has been called without localStorageAllowed")}catch(e){Object(r.k)(e)}}},{key:"clear",value:function(e){try{this.localStorage.removeItemWithExpiration(e)}catch(e){Object(r.k)(e)}}},{key:"put",value:function(e,t){try{!0===this.localStorageAllowedCallback()?this.localStorage.setItemWithExpiration(e,t):Object(r.k)("clientStore.put() has been called without localStorageAllowed")}catch(e){Object(r.k)(e)}}},{key:"localStorageAllowed",value:function(){return this.localStorageAllowedCallback()}},{key:"isLocalStorageAvailable",value:function(){return this.localStorage.isAvailable()}},{key:"getResponseFromLegacyCookie",value:function(){var t;return o.a.LEGACY_COOKIE_NAMES.forEach(function(e){Object(r.d)(e)&&(t=Object(r.d)(e))}),t?JSON.parse(t):null}},{key:"getResponse",value:function(){var e=this.get(o.a.STORAGE_CONFIG.ID5);return e&&JSON.parse(decodeURIComponent(e))}},{key:"clearResponse",value:function(){this.clear(o.a.STORAGE_CONFIG.ID5)}},{key:"putResponse",value:function(e){this.put(o.a.STORAGE_CONFIG.ID5,encodeURIComponent(e))}},{key:"getHashedConsentData",value:function(){return this.get(o.a.STORAGE_CONFIG.CONSENT_DATA)}},{key:"clearHashedConsentData",value:function(){this.clear(o.a.STORAGE_CONFIG.CONSENT_DATA)}},{key:"putHashedConsentData",value:function(e){this.put(o.a.STORAGE_CONFIG.CONSENT_DATA,n.makeStoredConsentDataHash(e))}},{key:"getHashedPd",value:function(e){return this.get(n.pdCacheConfig(e))}},{key:"storedPdMatchesPd",value:function(e,t){return n.storedDataMatchesCurrentData(this.getHashedPd(e),n.makeStoredHash(t))}},{key:"clearHashedPd",value:function(e){this.clear(n.pdCacheConfig(e))}},{key:"putHashedPd",value:function(e,t){this.put(n.pdCacheConfig(e),n.makeStoredHash(t))}},{key:"getDateTime",value:function(){return new Date(this.get(o.a.STORAGE_CONFIG.LAST)).getTime()}},{key:"clearDateTime",value:function(){this.clear(o.a.STORAGE_CONFIG.LAST)}},{key:"setDateTime",value:function(e){this.put(o.a.STORAGE_CONFIG.LAST,e)}},{key:"getNb",value:function(e){e=this.get(n.nbCacheConfig(e));return e?parseInt(e):0}},{key:"clearNb",value:function(e){this.clear(n.nbCacheConfig(e))}},{key:"setNb",value:function(e,t){this.put(n.nbCacheConfig(e),t)}},{key:"incNb",value:function(e,t){return this.setNb(e,++t),t}},{key:"clearAll",value:function(e){this.clearResponse(),this.clearDateTime(),this.clearNb(e),this.clearHashedPd(e),this.clearHashedConsentData()}},{key:"removeLegacyCookies",value:function(t){var n=new Date(Date.now()-1e3).toUTCString();o.a.LEGACY_COOKIE_NAMES.forEach(function(e){Object(r.n)("".concat(e),"",n),Object(r.n)("".concat(e,"_nb"),"",n),Object(r.n)("".concat(e,"_").concat(t,"_nb"),"",n),Object(r.n)("".concat(e,"_last"),"",n),Object(r.n)("".concat(e,".cached_pd"),"",n),Object(r.n)("".concat(e,".cached_consent_data"),"",n)})}},{key:"storedConsentDataMatchesConsentData",value:function(e){return n.storedDataMatchesCurrentData(this.getHashedConsentData(),n.makeStoredConsentDataHash(e))}}])&&i(e.prototype,t),a&&i(e,a),n}()},function(e,t,n){"use strict";n.d(t,"a",function(){return i});var u=n(0),t=n(1),a=n.n(t);function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function l(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),o(this,"consentData",void 0),o(this,"staticConsentData",void 0),o(this,"storedPrivacyData",void 0),o(this,"cmpVersion",0),o(this,"localStorage",void 0),o(this,"cmpCallMap",{iab:this.lookupIabConsent,static:this.lookupStaticConsentData}),this.localStorage=e}var e,t,n;return e=l,n=[{key:"findCMP",value:function(){for(var e,t,n=0,a=window;!e;){try{if("function"==typeof a.__tcfapi||"function"==typeof a.__cmp){t="function"==typeof a.__tcfapi?(n=2,a.__tcfapi):(n=1,a.__cmp),e=a;break}}catch(e){}try{if(a.frames.__tcfapiLocator){n=2,e=a;break}}catch(e){}try{if(a.frames.__cmpLocator){n=1,e=a;break}}catch(e){}if(a===window.top)break;a=a.parent}return{cmpVersion:n,cmpFrame:e,cmpFunction:t}}},{key:"cmpSuccess",value:function(e,n,t){var a=1===e.cmpVersion?function(e){var t=e&&e.getConsentData&&e.getConsentData.gdprApplies;return!("boolean"==typeof t&&(!0!==t||u.j(e.getConsentData.consentData)&&u.i(e.getVendorConsents)&&1<Object.keys(e.getVendorConsents).length))}:2===e.cmpVersion?function(){var e=n&&"boolean"==typeof n.gdprApplies?n.gdprApplies:void 0,t=n&&n.tcString;return!("boolean"==typeof e&&(!0!==e||u.j(t)))}:null;u.l("CMP Success callback for version",e.cmpVersion,a),u.g(a)&&(a(n)?(e.resetConsentData(),u.k("CMP returned unexpected value during lookup process.",n)):e.storeConsentData(n)),t(e.consentData)}}],(t=[{key:"lookupStaticConsentData",value:function(e,t){this.cmpVersion=this.staticConsentData.getConsentData?1:this.staticConsentData.getTCData?2:0,u.l("Using static consent data from config for TCF v".concat(this.cmpVersion),this.staticConsentData),2===this.cmpVersion?e(this,this.staticConsentData.getTCData,t):e(this,this.staticConsentData,t)}},{key:"lookupIabConsent",value:function(n,a){var r=this;var t,e=(t={},{consentDataCallback:function(e){u.l("cmpApi: consentDataCallback"),t.getConsentData=e,o()},vendorConsentsCallback:function(e){u.l("cmpApi: vendorConsentsCallback"),t.getVendorConsents=e,o()}});function o(){t.getConsentData&&t.getVendorConsents&&n(r,t,a)}var i=l.findCMP(),s=i.cmpVersion,c=i.cmpFrame,i=i.cmpFunction;if(this.cmpVersion=s,!c)return u.k("CMP not found"),void n(r,void 0,a);u.g(i)?(u.l("cmpApi: calling getConsentData & getVendorConsents"),1===s?(i("getConsentData",null,e.consentDataCallback),i("getVendorConsents",null,e.vendorConsentsCallback)):2===s&&i("addEventListener",s,function(e,t){u.l("Received a response from CMP",e),t?!1!==e.gdprApplies&&"tcloaded"!==e.eventStatus&&"useractioncomplete"!==e.eventStatus||n(r,e,a):(u.k("CMP unable to register callback function.  Please check CMP setup."),n(r,void 0,a))})):n(r,void 0,a)}},{key:"requestConsent",value:function(e,t,n,a){e?(u.m("ID5 is operating in forced consent mode and will not retrieve any consent signals from the CMP"),a(this.consentData)):this.cmpCallMap[t]?this.consentData?a(this.consentData):("static"===t&&(u.i(n)?this.staticConsentData=n:u.k("cmpApi: 'static' did not specify consent data.")),this.cmpCallMap[t].call(this,l.cmpSuccess,a)):(u.k("Unknown consent API: ".concat(t)),this.resetConsentData(),a(this.consentData))}},{key:"resetConsentData",value:function(){this.consentData=void 0,this.storedPrivacyData=void 0}},{key:"storeConsentData",value:function(e){1===this.cmpVersion?this.consentData={consentString:e?e.getConsentData.consentData:void 0,vendorData:e?e.getVendorConsents:void 0,gdprApplies:e?e.getConsentData.gdprApplies:void 0,apiVersion:1}:2===this.cmpVersion?this.consentData={consentString:e?e.tcString:void 0,vendorData:e||void 0,gdprApplies:e&&"boolean"==typeof e.gdprApplies?e.gdprApplies:void 0,apiVersion:2}:this.consentData={apiVersion:0}}},{key:"isLocalStorageAllowed",value:function(e,t){return!0===e||!0===t?(u.m("Local storage access granted by configuration override, consent will not be checked"),!0):this.consentData?"boolean"!=typeof this.consentData.gdprApplies||!this.consentData.gdprApplies||!(!this.consentData.consentString||0===this.consentData.apiVersion)&&((1!==this.consentData.apiVersion||!this.consentData.vendorData||!this.consentData.vendorData.purposeConsents||!1!==this.consentData.vendorData.purposeConsents[1])&&!(2===this.consentData.apiVersion&&this.consentData.vendorData&&this.consentData.vendorData.purpose&&this.consentData.vendorData.purpose.consents&&!1===this.consentData.vendorData.purpose.consents[1])):this.isProvisionalLocalStorageAllowed()}},{key:"isProvisionalLocalStorageAllowed",value:function(){var e;return u.i(this.storedPrivacyData)||(e=this.localStorage.getItemWithExpiration(a.a.STORAGE_CONFIG.PRIVACY),this.storedPrivacyData=e&&JSON.parse(e)),!(!this.storedPrivacyData||!0!==this.storedPrivacyData.id5_consent)||(this.storedPrivacyData&&void 0!==this.storedPrivacyData.jurisdiction?!1===(void 0!==a.a.PRIVACY.JURISDICTIONS[this.storedPrivacyData.jurisdiction]&&a.a.PRIVACY.JURISDICTIONS[this.storedPrivacyData.jurisdiction])||!0===this.storedPrivacyData.id5_consent:void 0)}},{key:"setStoredPrivacy",value:function(e){try{u.i(e)?(this.storedPrivacyData=e,this.localStorage.setItemWithExpiration(a.a.STORAGE_CONFIG.PRIVACY,JSON.stringify(e))):u.l("Cannot store privacy if it is not an object: ",e)}catch(e){u.k(e)}}}])&&r(e.prototype,t),n&&r(e,n),l}()},function(e,t,n){"use strict";n.d(t,"a",function(){return a});var r=n(0);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function a(e){if(!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),s(this,"options",void 0),s(this,"providedOptions",void 0),this.options={debugBypassConsent:!1,allowLocalStorageWithoutConsentApi:!1,cmpApi:"iab",consentData:{getConsentData:{consentData:void 0,gdprApplies:void 0},getVendorConsents:{}},refreshInSeconds:7200,partnerId:void 0,partnerUserId:void 0,callbackOnAvailable:void 0,callbackOnUpdates:void 0,callbackTimeoutInMs:void 0,pd:void 0,abTesting:{enabled:!1,controlGroupPct:0},provider:void 0,maxCascades:8,applyCreativeRestrictions:!1},this.providedOptions={},!e.partnerId||"number"!=typeof e.partnerId)throw new Error("partnerId is required and must be a number");this.updOptions(e)}var e,t,n;return e=a,(t=[{key:"getOptions",value:function(){return this.options}},{key:"getProvidedOptions",value:function(){return this.providedOptions}},{key:"updOptions",value:function(t){var n=this;if("object"===o(t)){if("number"==typeof this.options.partnerId&&"number"==typeof t.partnerId&&t.partnerId!==this.options.partnerId)throw new Error("Cannot update config with a different partnerId");Object.keys(t).forEach(function(e){Object(r.e)(t[e],a.configTypes[e])?(n.options[e]=t[e],n.providedOptions[e]=t[e]):Object(r.k)("updOptions options ".concat(e," must be of type ").concat(a.configTypes[e]," but was ").concat(toString.call(t[e])))})}else Object(r.k)("Config options must be an object")}}])&&i(e.prototype,t),n&&i(e,n),a}();s(a,"configTypes",{debugBypassConsent:"Boolean",allowLocalStorageWithoutConsentApi:"Boolean",cmpApi:"String",consentData:"Object",refreshInSeconds:"Number",partnerId:"Number",partnerUserId:"String",callbackOnAvailable:"Function",callbackOnUpdates:"Function",callbackTimeoutInMs:"Number",pd:"String",abTesting:"Object",provider:"String",maxCascades:"Number",applyCreativeRestrictions:"Boolean"})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n=n(6);window.ID5||(window.ID5=n.a)},function(e,t,n){"use strict";var v=n(0),r=n(7),s=n(2),c=n(3),l=n(8),o=n(9),u=n(10),d=n(4);function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n=new(function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),p(this,"loaded",!1),p(this,"_isUsingCdn",!1),p(this,"_referer",!1),p(this,"_version",o.a),p(this,"versions",{}),this.loaded=!0,this._isUsingCdn=!!(document&&document.currentScript&&document.currentScript.src&&0===document.currentScript.src.indexOf("https://cdn.id5-sync.com")),this._referer=Object(r.a)(),this.versions[o.a]=!0}var t,n,a;return t=e,(n=[{key:"debug",get:function(){return Object(v.h)()},set:function(e){Object(v.o)(e)}},{key:"init",value:function(e){try{Object(v.l)("Invoking Id5Api.init",arguments);var t=new d.a(e),n=t.getOptions(),a=new u.a(window.top,!n.applyCreativeRestrictions),r=new c.a(a),o=new s.a(function(){return r.isLocalStorageAllowed(n.allowLocalStorageWithoutConsentApi,n.debugBypassConsent)},a),i=new l.a(t,o,r);return this.getId(i,!1),Object(v.l)("ID5 initialized for partner ".concat(n.partnerId," with referer ").concat(this._referer.referer," and options"),e),i}catch(e){Object(v.k)("Exception caught from Id5Api.init",e)}}},{key:"refreshId",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};if(!Object(v.f)(t))throw new Error("Invalid signature for Id5Api.refreshId: second parameter must be a boolean");try{Object(v.l)("Invoking Id5Api.refreshId",arguments),e.startRefresh(t),e.updateOptions(n),e.consentManagement.resetConsentData(),this.getId(e,t)}catch(e){Object(v.k)("Exception caught from Id5Api.refreshId",e)}return e}},{key:"getId",value:function(i){var s,e,c=this,l=1<arguments.length&&void 0!==arguments[1]&&arguments[1],u=i.getOptions(),d=0,p=!1,h=!1,f=!1;i.localStorageAllowed()&&(s=i.clientStore.getResponse(),e=i.clientStore.getDateTime(),p=e<=0||Date.now()-e>1e3*u.refreshInSeconds,d=i.clientStore.getNb(u.partnerId),h=!i.clientStore.storedPdMatchesPd(u.partnerId,u.pd)),s||(s=i.clientStore.getResponseFromLegacyCookie(),p=!0),s&&s.universal_uid&&!h?(i.setUserId(s,!0),d=i.clientStore.incNb(u.partnerId,d),f=!0,Object(v.l)("ID5 User ID available from cache:",{storedResponse:s,storedDateTime:e,refreshNeeded:p})):s&&s.universal_uid&&h?Object(v.l)("PD value has changed, so ignoring User ID from cache"):s&&!s.universal_uid?Object(v.k)("Invalid stored response: ",s):Object(v.l)("No ID5 User ID available from cache"),i.consentManagement.requestConsent(u.debugBypassConsent,u.cmpApi,u.consentData,function(e){var t,r,o,n,a;!1!==i.localStorageAllowed()?(Object(v.l)("Consent to access local storage is: "+i.localStorageAllowed()),s=i.clientStore.getResponse()||i.clientStore.getResponseFromLegacyCookie(),a=!i.clientStore.storedConsentDataMatchesConsentData(e),i.clientStore.putHashedConsentData(e),i.clientStore.putHashedPd(u.partnerId,u.pd),s&&s.universal_uid&&s.signature&&!p&&!a&&!h&&!l||(t="https://id5-sync.com/g/v2/".concat(u.partnerId,".json"),r=e&&e.gdprApplies?1:0,o=e&&e.gdprApplies?e.consentString:void 0,n=s&&s.signature?s.signature:void 0,a={partner:u.partnerId,v:c._version,o:"api",gdpr:r,rf:c._referer.referer,u:c._referer.stack[0]||window.location.href,top:c._referer.reachedTop?1:0,localStorage:i.clientStore.isLocalStorageAvailable()?1:0,nbPage:d,id5cdn:c._isUsingCdn},void 0!==o&&(a.gdpr_consent=o),void 0!==n&&(a.s=n),void 0!==u.pd&&(a.pd=u.pd),void 0!==u.partnerUserId&&(a.puid=u.partnerUserId),void 0!==u.provider&&(a.provider=u.provider),!0===u.abTesting.enabled&&(a.ab_testing={enabled:!0,control_group_pct:i.getOptions().abTesting.controlGroupPct}),Object(v.l)("Fetching ID5 user ID from:",t,a),l&&Object(v.l)("...with Force Fetch"),Object(v.a)(t,{success:function(e){if(Object(v.l)("Response from ID5 received:",e),e)try{var t,n,a=JSON.parse(e);Object(v.l)("Valid json response from ID5 received:",a),Object(v.j)(a.universal_uid)?(i.setUserId(a,!1),i.consentManagement.setStoredPrivacy(a.privacy),!0===i.localStorageAllowed()||void 0===a.privacy?(i.clientStore.putResponse(e),i.clientStore.setDateTime((new Date).toUTCString()),i.clientStore.setNb(u.partnerId,f?0:1)):i.clientStore.clearAll(u.partnerId),i.clientStore.removeLegacyCookies(u.partnerId),!0===a.cascade_needed&&!0===i.localStorageAllowed()&&0<=u.maxCascades&&!u.applyCreativeRestrictions&&(t=u.partnerUserId&&0<u.partnerUserId.length,n="https://id5-sync.com/".concat(t?"s":"i","/").concat(u.partnerId,"/").concat(u.maxCascades,".gif?id5id=").concat(i._userId,"&o=api&").concat(t?"puid="+u.partnerUserId+"&":"","gdpr_consent=").concat(o,"&gdpr=").concat(r),Object(v.l)("Opportunities to cascade available:",n),Object(v.c)(n))):Object(v.k)("Invalid response from ID5 servers:",e)}catch(e){Object(v.k)(e)}else Object(v.k)("Empty response from ID5 servers:",e)},error:function(e){Object(v.k)(e)}},JSON.stringify(a),{method:"POST",withCredentials:!0}))):Object(v.l)("No legal basis to use ID5",e)})}}])&&i(t.prototype,n),a&&i(t,a),e}());t.a=n},function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n,a=arguments[t];for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}n.d(t,"a",function(){return a});var o,a=(o=window,function(){try{var e,t=i(),n=t.length-1,a=null!==t[n].location||0<n&&null!==t[n-1].referrer,r=function(e){for(var t,n=[],a=null,r=null,o=null,i=null,s=null,c=e.length-1;0<=c;c--){try{r=e[c].location}catch(e){}if(r)n.push(r),s=s||r;else if(0!==c){t=e[c-1];try{o=t.referrer,i=t.ancestor}catch(e){}o?(n.push(o),s=s||o):i?(n.push(i),s=s||i):n.push(a)}else n.push(a)}return{stack:n,detectedRefererUrl:s}}(t);return t[t.length-1].canonicalUrl&&(e=t[t.length-1].canonicalUrl),{referer:r.detectedRefererUrl,reachedTop:a,numIframes:n,stack:r.stack,canonicalUrl:e}}catch(e){}});function i(){var e=function(){var t,n=[];do{try{t=t?t.parent:o;try{var e=t===o.top,a={referrer:t.document.referrer||null,location:t.location.href||null,isTop:e};e&&(a=r(a,{canonicalUrl:function(e){try{var t=e.querySelector("link[rel='canonical']");if(null!==t)return t.href}catch(e){}return null}(t.document)})),n.push(a)}catch(e){n.push({referrer:null,location:null,isTop:t===o.top})}}catch(e){return n.push({referrer:null,location:null,isTop:!1}),n}}while(t!==o.top);return n}(),t=function(){try{return o.location.ancestorOrigins?o.location.ancestorOrigins:void 0}catch(e){}}();if(t)for(var n=0,a=t.length;n<a;n++)e[n].ancestor=t[n];return e}},function(e,t,n){"use strict";n.d(t,"a",function(){return o});var t=n(1),a=n.n(t),i=n(0);n(4),n(2),n(3);function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function o(e,t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),s(this,"_availableCallbackTimerId",void 0),s(this,"_availableCallbackFired",!1),s(this,"_availableCallback",void 0),s(this,"_updateCallback",void 0),s(this,"_refreshCallbackTimerId",void 0),s(this,"_refreshCallbackFired",!1),s(this,"_refreshCallback",void 0),s(this,"_isExposed",void 0),s(this,"_fromCache",void 0),s(this,"_isRefreshing",!1),s(this,"_isRefreshingWithFetch",!1),s(this,"_userId",void 0),s(this,"_linkType",void 0),s(this,"_userIdAvailable",!1),s(this,"config",void 0),s(this,"clientStore",void 0),s(this,"consentManagement",void 0),this.config=e,this.clientStore=t,this.consentManagement=n}var e,t,n;return e=o,n=[{key:"doFireOnAvailableCallBack",value:function(e){i.l("Id5Status.doFireOnAvailableCallBack"),e._availableCallbackFired=!0,e._availableCallbackTimerId=void 0,e._availableCallback(e)}},{key:"doFireOnUpdateCallBack",value:function(e){i.l("Id5Status.doFireOnUpdateCallBack"),e._updateCallback(e)}},{key:"doFireOnRefreshCallBack",value:function(e){i.l("Id5Status.doFireOnRefreshCallBack"),e._refreshCallbackFired=!0,e._refreshCallbackTimerId=void 0,e._isRefreshing=!1,e._isRefreshingWithFetch=!1,e._refreshCallback(e)}}],(t=[{key:"getOptions",value:function(){return this.config.getOptions()}},{key:"updateOptions",value:function(e){return this.config.updOptions(e)}},{key:"startRefresh",value:function(e){this._isRefreshing=!0,this._isRefreshingWithFetch=e}},{key:"setUserId",value:function(e,t){var n=this,a=e.universal_uid,r=e.link_type||0;if(this._isExposed=!0,i.i(e.ab_testing))switch(e.ab_testing.result){case"normal":break;default:case"error":i.k("There was an error with A/B Testing. Make sure controlGroupRatio is a number >= 0 and <= 1");break;case"control":this._isExposed=!1,i.l("User is in control group!")}e=this._userId!==a||this._linkType!==r;this._userIdAvailable=!0,this._userId=a,this._linkType=r,this._fromCache=t,i.l("Id5Status.setUserId: user id updated, hasChanged: ".concat(e)),i.g(this._availableCallback)&&!1===this._availableCallbackFired&&(this._availableCallbackTimerId&&(i.l("Cancelling pending onAvailableCallback watchdog"),clearTimeout(this._availableCallbackTimerId),this._availableCallbackTimerId=void 0),this._availableCallbackTimerId=setTimeout(function(){return o.doFireOnAvailableCallBack(n)},0)),this._isRefreshing&&i.g(this._refreshCallback)&&!1===this._refreshCallbackFired&&(!1!==t&&!1!==this._isRefreshingWithFetch||(this._refreshCallbackTimerId&&(i.l("Cancelling pending onRefreshCallback watchdog"),clearTimeout(this._refreshCallbackTimerId),this._refreshCallbackTimerId=void 0),this._refreshCallbackTimerId=setTimeout(function(){return o.doFireOnRefreshCallBack(n)},0))),e&&i.g(this._updateCallback)&&setTimeout(function(){return o.doFireOnUpdateCallBack(n)},0)}},{key:"getUserId",value:function(){return!1===this._isExposed?"0":this._userId}},{key:"getLinkType",value:function(){return!1===this._isExposed?0:this._linkType}},{key:"isFromCache",value:function(){return this._fromCache}},{key:"exposeUserId",value:function(){return this._isExposed}},{key:"getUserIdAsEid",value:function(){return{source:a.a.ID5_EIDS_SOURCE,uids:[{id:this.getUserId(),ext:{linkType:this.getLinkType(),abTestingControlGroup:!this.exposeUserId()}}]}}},{key:"onAvailable",value:function(e,t){if(!i.g(e))throw new Error("onAvailable expect a function");var n;return i.g(this._availableCallback)?i.l("onAvailable was already called, ignoring"):(this._availableCallback=e,(n=this)._userIdAvailable?(i.l("Id5Status.onAvailable: User id already available firing callback immediately"),this._availableCallbackTimerId=setTimeout(function(){return o.doFireOnAvailableCallBack(n)},0)):0<t&&(this._availableCallbackTimerId=setTimeout(function(){return o.doFireOnAvailableCallBack(n)},t))),this}},{key:"onUpdate",value:function(e){if(!i.g(e))throw new Error("onUpdate expect a function");this._updateCallback=e;var t=this;return this._userIdAvailable&&setTimeout(function(){return o.doFireOnUpdateCallBack(t)},0),this}},{key:"onRefresh",value:function(e,t){if(!i.g(e))throw new Error("onRefresh expect a function");this._refreshCallbackTimerId&&(clearTimeout(this._refreshCallbackTimerId),this._refreshCallbackTimerId=void 0),this._refreshCallback=e;var n=this;return!0===this._isRefreshing&&!1===this._isRefreshingWithFetch&&this._userIdAvailable?this._refreshCallbackTimerId=setTimeout(function(){return o.doFireOnRefreshCallBack(n)},0):0<t&&(this._refreshCallbackTimerId=setTimeout(function(){return o.doFireOnRefreshCallBack(n)},t)),this}},{key:"localStorageAllowed",value:function(){return this.clientStore.localStorageAllowed()}}])&&r(e.prototype,t),n&&r(e,n),o}()},function(e,t,n){"use strict";n.d(t,"a",function(){return a});var a="1.0.7"},function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return a});var i="_exp",a=function(){function n(e){var t=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),o(this,"available",!1),o(this,"win",void 0),o(this,"writingEnabled",void 0),this.win=e,this.writingEnabled=t;t="__id5test";try{this.writingEnabled&&this.win.localStorage.setItem(t,t),this.win.localStorage.removeItem(t),this.available=!0}catch(e){}}var e,t,a;return e=n,(t=[{key:"isAvailable",value:function(){return this.available}},{key:"getItem",value:function(e){if(this.available)return this.win.localStorage.getItem(e)}},{key:"setItem",value:function(e,t){this.available&&this.writingEnabled&&this.win.localStorage.setItem(e,t)}},{key:"removeItem",value:function(e){this.available&&this.win.localStorage.removeItem(e)}},{key:"getItemWithExpiration",value:function(e){var t=e.name,e=this.getItem(t+i);return!e||new Date(e).getTime()-Date.now()<=0?(this.removeItemWithExpiration({name:t}),null):this.getItem(t)}},{key:"setItemWithExpiration",value:function(e,t){var n=e.name,e=e.expiresDays,e=Date.now()+864e5*e,e=new Date(e).toUTCString();this.setItem(n+i,e),this.setItem(n,t)}},{key:"removeItemWithExpiration",value:function(e){e=e.name;this.removeItem(e),this.removeItem(e+i)}}])&&r(e.prototype,t),a&&r(e,a),n}()}]);