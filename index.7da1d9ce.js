!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);n(1);function r(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,c=function(){};return{s:c,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return i=t.done,t},e:function(t){s=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(s)throw a}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}console.log("HELLO 🚀");document.querySelector(".project--js");fetch("https://api.github.com/users/Dawid-Klos/repos?sort=created&direction=desc").then((function(t){return t.json()})).then((function(t){var e,n=r(t);try{for(n.s();!(e=n.n()).done;){var o=e.value,c=o.name,a=o.description,i=o.html_url,s=o.homepage,l=document.querySelector(".project--js"),u='\n    <ul class="project">\n    <li class="name">\n    <span class="name__left project--left">project</span>:<span class="name__content project--right"><strong>'.concat(c,'</strong></span>\n     </li>\n\n    <li class="description">\n    <span class="description__left project--left">description</span>:<span class="description__content project--right">').concat(a,'</span> \n    </li>\n\n    <li class="demo">\n    <span class="demo__left project--left">demo</span>:<span class="demo__content project--right"><<a class="project--link" href="').concat(s,'" target="_blank" alt="This is link to ').concat(c,' repository from my GitHub list">see here</a>></span>\n    </li>\n\n    <li class="source">\n    <span class="source__left project--left">github</span>:<span class="source__content project--right"><<a class="project--link" href="').concat(i,'" target="_blank" alt="This is a soruce code of ').concat(c,' project.">source-code</a>></span>\n    </li>\n    </ul>\n    ');l.innerHTML+=u}}catch(t){n.e(t)}finally{n.f()}})).catch((function(t){console.log("error")}))},function(t,e,n){}]);