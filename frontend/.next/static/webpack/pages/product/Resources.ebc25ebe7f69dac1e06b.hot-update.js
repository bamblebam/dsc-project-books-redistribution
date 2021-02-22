webpackHotUpdate_N_E("pages/product/Resources",{

/***/ "./components/ModalCard.js":
/*!*********************************!*\
  !*** ./components/ModalCard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ "./components/Card.js");
/* harmony import */ var _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/css/ModalCard.module.css */ "./styles/css/ModalCard.module.css");
/* harmony import */ var _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\Users\\vedant\\Desktop\\DSC\\dsc-project-books-redistribution\\frontend\\components\\ModalCard.js",
    _this = undefined,
    _s = $RefreshSig$();






var StoreCard = function StoreCard(_ref) {
  _s();

  var author = _ref.author,
      bookName = _ref.bookName,
      price = _ref.price,
      location = _ref.location,
      year = _ref.year,
      text = _ref.text,
      imgSrc = _ref.imgSrc,
      imgAlt = _ref.imgAlt,
      link = _ref.link;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      modalIsOpen = _useState[0],
      setModalIsOpen = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.store,
    onClick: function onClick() {
      setModalIsOpen(true);
      console.log("Click registered");
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
      bookImg: imgSrc,
      bookName: bookName,
      author: author,
      imgAlt: imgAlt,
      text: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_modal__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.Modal,
      isOpen: modalIsOpen,
      onRequestClose: function onRequestClose() {
        setModalIsOpen(false);
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.modal,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.store_left,
          src: imgSrc,
          alt: ""
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 6
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.store_right,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "modal-header",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: "modal-title",
              children: [bookName, " , ", year]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "close-button",
              onClick: function onClick() {
                setModalIsOpen(false);
              },
              children: "\xD7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "modal-body",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: author
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: price
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
              children: location
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "btn-card",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "btn-link",
                href: link,
                children: "See More"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: "btn-card",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: "btn-link",
                href: "/sign-up",
                children: "Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 7
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 6
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 3
  }, _this);
};

_s(StoreCard, "d4gKB9FOjUoqrytIak5jiPIqzB0=");

_c = StoreCard;
/* harmony default export */ __webpack_exports__["default"] = (StoreCard);

var _c;

$RefreshReg$(_c, "StoreCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbENhcmQuanMiXSwibmFtZXMiOlsiU3RvcmVDYXJkIiwiYXV0aG9yIiwiYm9va05hbWUiLCJwcmljZSIsImxvY2F0aW9uIiwieWVhciIsInRleHQiLCJpbWdTcmMiLCJpbWdBbHQiLCJsaW5rIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNldE1vZGFsSXNPcGVuIiwibW9kYWxDYXJkU3R5bGVzIiwic3RvcmUiLCJjb25zb2xlIiwibG9nIiwiTW9kYWwiLCJtb2RhbCIsInN0b3JlX2xlZnQiLCJzdG9yZV9yaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQVVaO0FBQUE7O0FBQUEsTUFUTEMsTUFTSyxRQVRMQSxNQVNLO0FBQUEsTUFSTEMsUUFRSyxRQVJMQSxRQVFLO0FBQUEsTUFQTEMsS0FPSyxRQVBMQSxLQU9LO0FBQUEsTUFOTEMsUUFNSyxRQU5MQSxRQU1LO0FBQUEsTUFMTEMsSUFLSyxRQUxMQSxJQUtLO0FBQUEsTUFKTEMsSUFJSyxRQUpMQSxJQUlLO0FBQUEsTUFITEMsTUFHSyxRQUhMQSxNQUdLO0FBQUEsTUFGTEMsTUFFSyxRQUZMQSxNQUVLO0FBQUEsTUFETEMsSUFDSyxRQURMQSxJQUNLOztBQUFBLGtCQUNpQ0Msc0RBQVEsQ0FBQyxLQUFELENBRHpDO0FBQUEsTUFDRUMsV0FERjtBQUFBLE1BQ2VDLGNBRGY7O0FBR0wsc0JBQ0M7QUFDQyxhQUFTLEVBQUVDLHVFQUFlLENBQUNDLEtBRDVCO0FBRUMsV0FBTyxFQUFFLG1CQUFNO0FBQ2RGLG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0FHLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0EsS0FMRjtBQUFBLDRCQU9DLHFFQUFDLDZDQUFEO0FBQ0MsYUFBTyxFQUFFVCxNQURWO0FBRUMsY0FBUSxFQUFFTCxRQUZYO0FBR0MsWUFBTSxFQUFFRCxNQUhUO0FBSUMsWUFBTSxFQUFFTyxNQUpUO0FBS0MsVUFBSSxFQUFFRjtBQUxQO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRCxlQWNDLHFFQUFDLGtEQUFEO0FBQ0MsZUFBUyxFQUFFTyx1RUFBZSxDQUFDSSxLQUQ1QjtBQUVDLFlBQU0sRUFBRU4sV0FGVDtBQUdDLG9CQUFjLEVBQUUsMEJBQU07QUFDckJDLHNCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0EsT0FMRjtBQUFBLDZCQU9DO0FBQUssaUJBQVMsRUFBRUMsdUVBQWUsQ0FBQ0ssS0FBaEM7QUFBQSxnQ0FDQztBQUFLLG1CQUFTLEVBQUVMLHVFQUFlLENBQUNNLFVBQWhDO0FBQTRDLGFBQUcsRUFBRVosTUFBakQ7QUFBeUQsYUFBRyxFQUFDO0FBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZUFFQztBQUFLLG1CQUFTLEVBQUVNLHVFQUFlLENBQUNPLFdBQWhDO0FBQUEsa0NBQ0M7QUFBSyxxQkFBUyxFQUFDLGNBQWY7QUFBQSxvQ0FDQztBQUFJLHVCQUFTLEVBQUMsYUFBZDtBQUFBLHlCQUNFbEIsUUFERixTQUNlRyxJQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUlDO0FBQ0MsdUJBQVMsRUFBQyxjQURYO0FBRUMscUJBQU8sRUFBRSxtQkFBTTtBQUNkTyw4QkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGVBY0M7QUFBSyxxQkFBUyxFQUFDLFlBQWY7QUFBQSxvQ0FDQztBQUFBLHdCQUFLWDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFFQztBQUFBLHdCQUFLRTtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkQsZUFHQztBQUFBLHdCQUFLQztBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSEQsZUFJQztBQUFBLHdCQUFJRTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkQsZUFLQztBQUFRLHVCQUFTLEVBQUMsVUFBbEI7QUFBQSxxQ0FDQztBQUFHLHlCQUFTLEVBQUMsVUFBYjtBQUF3QixvQkFBSSxFQUFFRyxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEQsZUFVQztBQUFRLHVCQUFTLEVBQUMsVUFBbEI7QUFBQSxxQ0FDQztBQUFHLHlCQUFTLEVBQUMsVUFBYjtBQUF3QixvQkFBSSxFQUFDLFVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERDtBQTJEQSxDQXhFRDs7R0FBTVQsUzs7S0FBQUEsUztBQTBFU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9SZXNvdXJjZXMuZWJjMjVlYmU3ZjY5ZGFjMWUwNmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IG1vZGFsQ2FyZFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2Nzcy9Nb2RhbENhcmQubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgU3RvcmVDYXJkID0gKHtcclxuXHRhdXRob3IsXHJcblx0Ym9va05hbWUsXHJcblx0cHJpY2UsXHJcblx0bG9jYXRpb24sXHJcblx0eWVhcixcclxuXHR0ZXh0LFxyXG5cdGltZ1NyYyxcclxuXHRpbWdBbHQsXHJcblx0bGluayxcclxufSkgPT4ge1xyXG5cdGNvbnN0IFttb2RhbElzT3Blbiwgc2V0TW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5zdG9yZX1cclxuXHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdHNldE1vZGFsSXNPcGVuKHRydWUpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiQ2xpY2sgcmVnaXN0ZXJlZFwiKTtcclxuXHRcdFx0fX1cclxuXHRcdD5cclxuXHRcdFx0PENhcmRcclxuXHRcdFx0XHRib29rSW1nPXtpbWdTcmN9XHJcblx0XHRcdFx0Ym9va05hbWU9e2Jvb2tOYW1lfVxyXG5cdFx0XHRcdGF1dGhvcj17YXV0aG9yfVxyXG5cdFx0XHRcdGltZ0FsdD17aW1nQWx0fVxyXG5cdFx0XHRcdHRleHQ9e3RleHR9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxNb2RhbFxyXG5cdFx0XHRcdGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLk1vZGFsfVxyXG5cdFx0XHRcdGlzT3Blbj17bW9kYWxJc09wZW59XHJcblx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9eygpID0+IHtcclxuXHRcdFx0XHRcdHNldE1vZGFsSXNPcGVuKGZhbHNlKTtcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5tb2RhbH0+XHJcblx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLnN0b3JlX2xlZnR9IHNyYz17aW1nU3JjfSBhbHQ9XCJcIiAvPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5zdG9yZV9yaWdodH0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7Ym9va05hbWV9ICwge3llYXJ9XHJcblx0XHRcdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjbG9zZS1idXR0b25cIlxyXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRNb2RhbElzT3BlbihmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9fVxyXG5cdFx0XHRcdFx0XHRcdD5cclxuXHRcdFx0XHRcdFx0XHRcdCZ0aW1lcztcclxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxoMj57YXV0aG9yfTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0PGgyPntwcmljZX08L2gyPlxyXG5cdFx0XHRcdFx0XHRcdDxoMj57bG9jYXRpb259PC9oMj5cclxuXHRcdFx0XHRcdFx0XHQ8cD57dGV4dH08L3A+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tY2FyZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiYnRuLWxpbmtcIiBocmVmPXtsaW5rfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0U2VlIE1vcmVcclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1jYXJkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidG4tbGlua1wiIGhyZWY9XCIvc2lnbi11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRDb250YWN0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvTW9kYWw+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3RvcmVDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9