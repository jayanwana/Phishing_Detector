self["webpackHotUpdatephishing_detector"]("contentScript",{

/***/ "./src/pages/Content/index.js":
/*!************************************!*\
  !*** ./src/pages/Content/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

// Development backend URL
// const backendURL = 'http://localhost:5000/classify'
// Production backend URL
var backendURL = 'https://phishing-detector-backend-7sgvu.ondigitalocean.app/classify'; // A chrome API message listener is used to listen to messages
// from the extension pop up, confirms the
// command is scrapeMail and executes the functions

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.command === 'scrapeMail') {
    try {
      var mail = scrapeMail();
      sendForClassification(mail, sendResponse);
    } catch (e) {
      sendResponse({
        error: 'An error occurred'
      });
      return false;
    } // Return true to keep callback function valid so async request can be made


    return true;
  }
}); // Function to collect the text from the email

var scrapeMail = function scrapeMail() {
  var email = document.querySelector(".a3s").innerText;

  if (email && typeof email === 'string') {
    return JSON.stringify({
      text: email
    });
  }

  console.log('Email not found');
  throw new Error('Email not found');
}; // sends the email to the backend for classification


var sendForClassification = function sendForClassification(body, sendResponse) {
  // params: body (object) a json object containing the email
  // sendResponse (function) callback function to recieve the response
  // Compose request header
  var headers = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: body
  }; // Send request to backend

  fetch(backendURL, headers).then(function (response) {
    return response.json();
  }) // Pass the response to the callback function
  .then(function (data) {
    sendResponse(data);
  })["catch"](function (error) {
    console.error(error);
    sendResponse({
      error: 'A connection error occured'
    });
  });
}; // Add real time functionality to classify the email as soon as it it opened


window.addEventListener('hashchange', function () {
  // Check url to see if email page is open before running script
  if (location.href.search(/all\/|inbox\/|imp\/|starred\/|snoozed\/|social\/|updates\/|forums\/|promotions\/|Trash\/|spam\//) > 0) {
    var mail = scrapeMail();
    sendForClassification(mail, function (res) {
      // Alert the user of the classfication results
      if (res === null || res === void 0 ? void 0 : res.error) {
        alert(res.error);
      } else if (res === null || res === void 0 ? void 0 : res.result) {
        res.result === '0' ? alert('This email has been classified as a non-phishing email') : alert('This email has been classified as a phishing email');
      }
    });
  }
});
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(backendURL, "backendURL", "C:\\Users\\jayan\\Source\\repos\\ML\\Phishing Detector\\src\\pages\\Content\\index.js");
  reactHotLoader.register(scrapeMail, "scrapeMail", "C:\\Users\\jayan\\Source\\repos\\ML\\Phishing Detector\\src\\pages\\Content\\index.js");
  reactHotLoader.register(sendForClassification, "sendForClassification", "C:\\Users\\jayan\\Source\\repos\\ML\\Phishing Detector\\src\\pages\\Content\\index.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("2d8fb0b1467575e3c6b6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=contentScript.6ff3446c671948afd41f.hot-update.js.map