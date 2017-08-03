/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _prod = __webpack_require__(1);

var _prod2 = _interopRequireDefault(_prod);

var _dev = __webpack_require__(4);

var _dev2 = _interopRequireDefault(_dev);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (process.ENV == 'production') {
  module.exports = _prod2.default;
} else {
  module.exports = _dev2.default;
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  host: 'https://codecode.ninja',
  api: 'https://codecode.ninja/api/v1'
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _environment = __webpack_require__(0);

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var apiReq = function apiReq(verb, url, data, callback) {
  var req = new XMLHttpRequest();

  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
      callback(req.responseText);
    } else if (req.status === 404 && req.readyState === 4) {
      callback({ error: "An error occured" });
    }
  };

  req.open(verb.toUpperCase(), _environment2.default.api + url, true);
  req.send(data);
};

exports.default = apiReq;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  host: 'http://localhost:5000',
  api: 'http://localhost:5000/api/v1'
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _environment = __webpack_require__(0);

var _environment2 = _interopRequireDefault(_environment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loginCheck = function loginCheck(onError) {
  var onSuccess = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};

  chrome.cookies.get({ url: _environment2.default.host, name: 'DFTT_END_USER_EMAIL' }, function (cookie) {
    if (cookie) {
      onSuccess();
    } else {
      onError();
    }
  });
};

exports.default = loginCheck;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _constants = __webpack_require__(7);

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  topicQuerySelector: '#question-header a',
  reportText: 'report_back_stackoverflow',
  matches: function matches(url) {
    return _constants2.default.STACKOVERFLOW_URL_REGEX.test(url);
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  STACKOVERFLOW_URL_REGEX: /^https?:\/\/(?:[^./?#]+\.)?stackoverflow\.com/
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

var _apiHandler = __webpack_require__(2);

var _apiHandler2 = _interopRequireDefault(_apiHandler);

var _loginCheck = __webpack_require__(5);

var _loginCheck2 = _interopRequireDefault(_loginCheck);

var _initializeCard = __webpack_require__(10);

var _initializeCard2 = _interopRequireDefault(_initializeCard);

var _prod = __webpack_require__(1);

var _prod2 = _interopRequireDefault(_prod);

var _forStackOverflow = __webpack_require__(6);

var _forStackOverflow2 = _interopRequireDefault(_forStackOverflow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {

  var closeBtn = document.getElementById('close-btn');

  closeBtn.addEventListener('click', function (e) {
    window.close();
  });

  var showSecondaryMessage = function showSecondaryMessage() {
    document.querySelector('.create-snippet-form').className += ' hide';
    document.querySelector('.secondary-message').className += ' show';
  };

  var showSuccessPage = function showSuccessPage() {
    showSecondaryMessage();

    var el = document.createElement('p');
    el.onclick = function (e) {
      chrome.tabs.create({ url: _prod2.default.host + '/cards' });
    };

    el.innerHTML = '\n        <h2>Snipped created!</h2>\n        <p><a href="#">Convert your new snippet into an interactive flashcard</a></p>\n    ';

    document.querySelector('.secondary-message').appendChild(el);
  };

  var showLoginPrompt = function showLoginPrompt() {
    showSecondaryMessage();
    var el = document.createElement('p');
    el.onclick = function (e) {
      chrome.tabs.create({ url: _prod2.default.host + '/login' });
    };

    el.innerHTML = '\n        <h2>You are not logged in</h2>\n        <p><a href="#">Click here to log into Code Code Ninja so you can securely use this extension.</a></p>\n    ';
    document.querySelector('.secondary-message').appendChild(el);
  };

  var createSnippetBtn = document.getElementById('createSnippet');

  createSnippetBtn.addEventListener('click', function (e) {
    e.preventDefault();
    chrome.tabs.getSelected(null, function (tab) {
      var myForm = document.querySelector('form');
      var formData = new FormData(myForm);

      (0, _apiHandler2.default)('POST', '/snippets', formData, function (res) {
        showSuccessPage();
      });
    });
  }, false);

  (0, _loginCheck2.default)(showLoginPrompt);

  var sitesConfig = [_forStackOverflow2.default];

  _initializeCard2.default.init(sitesConfig);
}, false);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PasteFromActiveTab = function () {
  function PasteFromActiveTab() {
    _classCallCheck(this, PasteFromActiveTab);
  }

  _createClass(PasteFromActiveTab, null, [{
    key: 'init',
    value: function init(sitesConfig) {
      this.sitesConfig = sitesConfig;
      this.pasteClipboardIntoTextBox();
      this.pasteFromActiveTab();
    }
  }, {
    key: 'pasteClipboardIntoTextBox',
    value: function pasteClipboardIntoTextBox() {
      var codeText = document.getElementById('code');
      chrome.storage.sync.get(['selectedText'], function (text) {
        console.log('the text', text);
      });
      codeText.select();
      document.execCommand('paste');
      var createSnippetBtn = document.getElementById('createSnippet');
      createSnippetBtn.focus();
    }
  }, {
    key: 'pasteFromActiveTab',
    value: function pasteFromActiveTab() {
      var _this = this;

      chrome.tabs.getSelected(null, function (tab) {
        _this.pasteSourceUrl(tab.url);
        _this.pasteTopic(tab);
      });
    }
  }, {
    key: 'pasteTopic',
    value: function pasteTopic(tab) {
      var replaceTopic = function replaceTopic(topic) {
        document.getElementById('topic').value = topic;
      };

      this.sitesConfig.forEach(function (siteConfig) {
        if (siteConfig.matches(tab.url)) {
          chrome.tabs.sendMessage(tab.id, { text: siteConfig.reportText }, replaceTopic);
        }
      });
    }
  }, {
    key: 'pasteSourceUrl',
    value: function pasteSourceUrl(url) {
      document.getElementById('source_url').value = url;
    }
  }]);

  return PasteFromActiveTab;
}();

exports.default = PasteFromActiveTab;

/***/ })
/******/ ]);