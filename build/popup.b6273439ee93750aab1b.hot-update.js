"use strict";
self["webpackHotUpdatephishing_detector"]("popup",{

/***/ "./src/pages/Popup/Popup.jsx":
/*!***********************************!*\
  !*** ./src/pages/Popup/Popup.jsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var C_Users_jayan_Source_repos_ML_Phishing_Detector_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Popup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Popup.css */ "./src/pages/Popup/Popup.css");
/* module decorator */ module = __webpack_require__.hmd(module);


var _this = undefined,
    _jsxFileName = "C:\\Users\\jayan\\Source\\repos\\ML\\Phishing Detector\\src\\pages\\Popup\\Popup.jsx";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"].signature : function (a) {
  return a;
};

// Import Libraries

 // Create the Popup component

var Popup = function Popup() {
  // create stateful variables to store the results of the classification
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState2 = (0,C_Users_jayan_Source_repos_ML_Phishing_Detector_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      response = _useState2[0],
      _setResponse = _useState2[1]; // Callback function that stores the result in the stateful variable


  var setResponse = function setResponse(res) {
    _setResponse(res);
  }; // This function is called whenever the button is clicked on the popup.catch
  // Send a message to the content page which has access to the email page DOM
  // to scrape the email text and send to the back end for classification
  // Also, it sends the callback function to the backend to collect the result


  var scrapeMail = function scrapeMail() {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {
        command: "scrapeMail"
      }, setResponse);
    });
  }; // This is what gets rendered on the popup tab


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "App",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("header", {
    className: "App-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, "Click here to classify the email as Phishing or non-phishing"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    onClick: scrapeMail,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "Classify Mail!"), (response === null || response === void 0 ? void 0 : response.error) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, " An error occurred"), (response === null || response === void 0 ? void 0 : response.result) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h4", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, "Result"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, " The email: \"", response === null || response === void 0 ? void 0 : response.email.slice(0, 50), "...\" was classified as"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, response.result === '0' ? 'A Non-Phishing email' : 'A Phishing email'))));
};

__signature__(Popup, "useState{[ response, _setResponse ]({})}");

var _default = Popup;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Popup, "Popup", "C:\\Users\\jayan\\Source\\repos\\ML\\Phishing Detector\\src\\pages\\Popup\\Popup.jsx");
  reactHotLoader.register(_default, "default", "C:\\Users\\jayan\\Source\\repos\\ML\\Phishing Detector\\src\\pages\\Popup\\Popup.jsx");
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
/******/ 	__webpack_require__.h = () => ("8bf930e60990223fbd60")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=popup.b6273439ee93750aab1b.hot-update.js.map