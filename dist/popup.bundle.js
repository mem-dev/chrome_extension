!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,n){"use strict";(function(t){function r(e){return e&&e.__esModule?e:{default:e}}var o=n(1),u=r(o),c=n(4),i=r(c);"production"==t.ENV?e.exports=u.default:e.exports=i.default}).call(t,n(3))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={host:"https://codecode.ninja",api:"https://codecode.ninja/api/v1"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),u=function(e,t,n,r){var u=new XMLHttpRequest;u.onreadystatechange=function(){4===u.readyState&&200===u.status?r(u.responseText):404===u.status&&4===u.readyState&&r({error:"An error occured"})},u.open(e.toUpperCase(),o.default.api+t,!0),u.send(n)};t.default=u},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function o(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function u(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function c(){m&&p&&(m=!1,p.length?h=p.concat(h):v=-1,h.length&&i())}function i(){if(!m){var e=o(c);m=!0;for(var t=h.length;t;){for(p=h,h=[];++v<t;)p&&p[v].run();v=-1,t=h.length}p=null,m=!1,u(e)}}function a(e,t){this.fun=e,this.array=t}function s(){}var l,f,d=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var p,h=[],m=!1,v=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new a(e,t)),1!==h.length||m||o(i)},a.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=s,d.addListener=s,d.once=s,d.off=s,d.removeListener=s,d.removeAllListeners=s,d.emit=s,d.prependListener=s,d.prependOnceListener=s,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={host:"http://localhost:5000",api:"http://localhost:5000/api/v1"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=function(e){return e&&e.__esModule?e:{default:e}}(r),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};chrome.cookies.get({url:o.default.host,name:"DFTT_END_USER_EMAIL"},function(n){n?t():e()})};t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={topicQuerySelector:"#question-header a",reportText:"report_back_stackoverflow",matches:function(e){return o.default.STACKOVERFLOW_URL_REGEX.test(e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={STACKOVERFLOW_URL_REGEX:/^https?:\/\/(?:[^.\/?#]+\.)?stackoverflow\.com/}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}n(9);var o=n(2),u=r(o),c=n(5),i=r(c),a=n(10),s=r(a),l=n(1),f=r(l),d=n(6),p=r(d);document.addEventListener("DOMContentLoaded",function(){document.getElementById("close-btn").addEventListener("click",function(e){window.close()});var e=function(){document.querySelector(".create-snippet-form").className+=" hide",document.querySelector(".secondary-message").className+=" show"},t=function(){e();var t=document.createElement("p");t.onclick=function(e){chrome.tabs.create({url:f.default.host+"/cards"})},t.innerHTML='\n        <h2>Snipped created!</h2>\n        <p><a href="#">Convert your new snippet into an interactive flashcard</a></p>\n    ',document.querySelector(".secondary-message").appendChild(t)};document.getElementById("createSnippet").addEventListener("click",function(e){e.preventDefault(),chrome.tabs.getSelected(null,function(e){var n=document.querySelector("form"),r=new FormData(n);(0,u.default)("POST","/snippets",r,function(e){t()})})},!1),(0,i.default)(function(){e();var t=document.createElement("p");t.onclick=function(e){chrome.tabs.create({url:f.default.host+"/login"})},t.innerHTML='\n        <h2>You are not logged in</h2>\n        <p><a href="#">Click here to log into Code Code Ninja so you can securely use this extension.</a></p>\n    ',document.querySelector(".secondary-message").appendChild(t)}());var n=[p.default];s.default.init(n)},!1)},function(e,t){},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=function(){function e(){r(this,e)}return o(e,null,[{key:"init",value:function(e){this.sitesConfig=e,this.pasteClipboardIntoTextBox(),this.pasteFromActiveTab()}},{key:"pasteClipboardIntoTextBox",value:function(){var e=document.getElementById("code");chrome.storage.sync.get(["selectedText"],function(e){console.log("the text",e)}),e.select(),document.execCommand("paste"),document.getElementById("createSnippet").focus()}},{key:"pasteFromActiveTab",value:function(){var e=this;chrome.tabs.getSelected(null,function(t){e.pasteSourceUrl(t.url),e.pasteTopic(t)})}},{key:"pasteTopic",value:function(e){var t=function(e){document.getElementById("topic").value=e};this.sitesConfig.forEach(function(n){n.matches(e.url)&&chrome.tabs.sendMessage(e.id,{text:n.reportText},t)})}},{key:"pasteSourceUrl",value:function(e){document.getElementById("source_url").value=e}}]),e}();t.default=u}]);