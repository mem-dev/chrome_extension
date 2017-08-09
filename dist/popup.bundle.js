!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=7)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(2),u=(o(r),n(3)),c=o(u);e.exports=c.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o),u=function(e,t,n,o){var u=new XMLHttpRequest;u.onreadystatechange=function(){4===u.readyState&&o(u)},u.open(e.toUpperCase(),r.default.api+t,!0),u.send(n)};t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={host:"https://codecode.ninja",api:"https://codecode.ninja/api/v1"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={host:"http://localhost:5000",api:"http://localhost:5000/api/v1"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(0),r=function(e){return e&&e.__esModule?e:{default:e}}(o),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};chrome.cookies.get({url:r.default.host,name:"DFTT_END_USER_EMAIL"},function(n){n?t():e()})};t.default=u},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(6),r=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={topicQuerySelector:"#question-header a",reportText:"report_back_stackoverflow",matches:function(e){return r.default.STACKOVERFLOW_URL_REGEX.test(e)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={STACKOVERFLOW_URL_REGEX:/^https?:\/\/(?:[^.\/?#]+\.)?stackoverflow\.com/}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n(8);var r=n(1),u=o(r),c=n(4),a=o(c),i=n(9),s=o(i),l=n(0),d=o(l),f=n(5),p=o(f);document.addEventListener("DOMContentLoaded",function(){document.getElementById("close-btn").addEventListener("click",function(e){window.close()});var e=function(){document.querySelector(".create-snippet-form").className+=" hide",document.querySelector(".secondary-message").className+=" show"},t=function(){e();var t=document.createElement("p");t.onclick=function(e){chrome.tabs.create({url:d.default.host+"/snippets/process"})},t.innerHTML='\n        <h2>Snippet created!</h2>\n        <p><a href="#">Convert your new snippet into an interactive flashcard</a></p>\n    ',document.querySelector(".secondary-message").appendChild(t)},n=function(){e();var t=document.createElement("p");t.onclick=function(e){chrome.tabs.create({url:d.default.host+"/login"})},t.innerHTML='\n        <h2>You are not logged in</h2>\n        <p><a href="#">Click here to log into CodeCode Ninja so you can securely use this extension.</a></p>\n    ',document.querySelector(".secondary-message").appendChild(t)},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";document.querySelector(".error").className="error "+e};document.getElementById("createSnippet").addEventListener("click",function(e){o(),e.preventDefault(),chrome.tabs.getSelected(null,function(e){var n=document.querySelector("form"),r=new FormData(n);(0,u.default)("POST","/snippets",r,function(e){200===e.status?t():o("show")})})},!1),(0,a.default)(n);var r=[p.default];s.default.init(r)},!1)},function(e,t){},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=function(){function e(){o(this,e)}return r(e,null,[{key:"init",value:function(e){this.sitesConfig=e,this.pasteClipboardIntoTextBox(),this.pasteFromActiveTab()}},{key:"pasteClipboardIntoTextBox",value:function(){var e=document.getElementById("code");chrome.storage.sync.get(["selectedText"],function(e){console.log("the text",e)}),e.select(),document.execCommand("paste"),document.getElementById("createSnippet").focus()}},{key:"pasteFromActiveTab",value:function(){var e=this;chrome.tabs.getSelected(null,function(t){e.pasteSourceUrl(t.url),e.pasteTopic(t)})}},{key:"pasteTopic",value:function(e){var t=function(e){document.getElementById("topic").value=e};this.sitesConfig.forEach(function(n){n.matches(e.url)&&chrome.tabs.sendMessage(e.id,{text:n.reportText},t)})}},{key:"pasteSourceUrl",value:function(e){document.getElementById("source_url").value=e}}]),e}();t.default=u}]);