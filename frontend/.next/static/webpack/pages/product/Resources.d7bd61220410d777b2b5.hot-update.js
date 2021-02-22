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






var ModalCard = function ModalCard(_ref) {
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
      className: "Modal",
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
            className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.modal_header,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.modal_title,
              children: bookName
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.close_button,
              onClick: function onClick() {
                setModalIsOpen(false);
              },
              children: "\xD7"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.modal_body,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.modal_details,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.modal_details_left,
                  children: ["Author: ", author]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.modal_details_left,
                  children: ["Price: ", price]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.modal_details_right,
                  children: ["Location: ", location]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.modal_details_right,
                  children: ["Year: ", year]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 9
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: ["Description: ", text]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_card,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_link,
                href: link,
                children: "See More"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_card,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_link,
                href: "/sign-up",
                children: "Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
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

_s(ModalCard, "d4gKB9FOjUoqrytIak5jiPIqzB0=");

_c = ModalCard;
/* harmony default export */ __webpack_exports__["default"] = (ModalCard);

var _c;

$RefreshReg$(_c, "ModalCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbENhcmQuanMiXSwibmFtZXMiOlsiTW9kYWxDYXJkIiwiYXV0aG9yIiwiYm9va05hbWUiLCJwcmljZSIsImxvY2F0aW9uIiwieWVhciIsInRleHQiLCJpbWdTcmMiLCJpbWdBbHQiLCJsaW5rIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNldE1vZGFsSXNPcGVuIiwibW9kYWxDYXJkU3R5bGVzIiwic3RvcmUiLCJjb25zb2xlIiwibG9nIiwibW9kYWwiLCJzdG9yZV9sZWZ0Iiwic3RvcmVfcmlnaHQiLCJtb2RhbF9oZWFkZXIiLCJtb2RhbF90aXRsZSIsImNsb3NlX2J1dHRvbiIsIm1vZGFsX2JvZHkiLCJtb2RhbF9kZXRhaWxzIiwibW9kYWxfZGV0YWlsc19sZWZ0IiwibW9kYWxfZGV0YWlsc19yaWdodCIsImJ0bl9jYXJkIiwiYnRuX2xpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FVWjtBQUFBOztBQUFBLE1BVExDLE1BU0ssUUFUTEEsTUFTSztBQUFBLE1BUkxDLFFBUUssUUFSTEEsUUFRSztBQUFBLE1BUExDLEtBT0ssUUFQTEEsS0FPSztBQUFBLE1BTkxDLFFBTUssUUFOTEEsUUFNSztBQUFBLE1BTExDLElBS0ssUUFMTEEsSUFLSztBQUFBLE1BSkxDLElBSUssUUFKTEEsSUFJSztBQUFBLE1BSExDLE1BR0ssUUFITEEsTUFHSztBQUFBLE1BRkxDLE1BRUssUUFGTEEsTUFFSztBQUFBLE1BRExDLElBQ0ssUUFETEEsSUFDSzs7QUFBQSxrQkFDaUNDLHNEQUFRLENBQUMsS0FBRCxDQUR6QztBQUFBLE1BQ0VDLFdBREY7QUFBQSxNQUNlQyxjQURmOztBQUdMLHNCQUNDO0FBQ0MsYUFBUyxFQUFFQyx1RUFBZSxDQUFDQyxLQUQ1QjtBQUVDLFdBQU8sRUFBRSxt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QUE7QUFBQTtBQUFBO0FBQUEscUJBckJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBb0VBLENBakZEOztHQUFNNUIsUzs7S0FBQUEsUztBQW1GU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdC9SZXNvdXJjZXMuZDdiZDYxMjIwNDEwZDc3N2IyYjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IG1vZGFsQ2FyZFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2Nzcy9Nb2RhbENhcmQubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgTW9kYWxDYXJkID0gKHtcclxuXHRhdXRob3IsXHJcblx0Ym9va05hbWUsXHJcblx0cHJpY2UsXHJcblx0bG9jYXRpb24sXHJcblx0eWVhcixcclxuXHR0ZXh0LFxyXG5cdGltZ1NyYyxcclxuXHRpbWdBbHQsXHJcblx0bGluayxcclxufSkgPT4ge1xyXG5cdGNvbnN0IFttb2RhbElzT3Blbiwgc2V0TW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5zdG9yZX1cclxuXHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdHNldE1vZGFsSXNPcGVuKHRydWUpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiQ2xpY2sgcmVnaXN0ZXJlZFwiKTtcclxuXHRcdFx0fX1cclxuXHRcdD5cclxuXHRcdFx0PENhcmRcclxuXHRcdFx0XHRib29rSW1nPXtpbWdTcmN9XHJcblx0XHRcdFx0Ym9va05hbWU9e2Jvb2tOYW1lfVxyXG5cdFx0XHRcdGF1dGhvcj17YXV0aG9yfVxyXG5cdFx0XHRcdGltZ0FsdD17aW1nQWx0fVxyXG5cdFx0XHRcdHRleHQ9e3RleHR9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxNb2RhbFxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cIk1vZGFsXCJcclxuXHRcdFx0XHRpc09wZW49e21vZGFsSXNPcGVufVxyXG5cdFx0XHRcdG9uUmVxdWVzdENsb3NlPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRzZXRNb2RhbElzT3BlbihmYWxzZSk7XHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXttb2RhbENhcmRTdHlsZXMubW9kYWx9PlxyXG5cdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5zdG9yZV9sZWZ0fSBzcmM9e2ltZ1NyY30gYWx0PVwiXCIgLz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXttb2RhbENhcmRTdHlsZXMuc3RvcmVfcmlnaHR9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLm1vZGFsX2hlYWRlcn0+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLm1vZGFsX3RpdGxlfT57Ym9va05hbWV9PC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5jbG9zZV9idXR0b259XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldE1vZGFsSXNPcGVuKGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0JnRpbWVzO1xyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5tb2RhbF9ib2R5fT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLm1vZGFsX2RldGFpbHN9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLm1vZGFsX2RldGFpbHNfbGVmdH0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0QXV0aG9yOiB7YXV0aG9yfVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPXttb2RhbENhcmRTdHlsZXMubW9kYWxfZGV0YWlsc19sZWZ0fT5QcmljZToge3ByaWNlfTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5tb2RhbF9kZXRhaWxzX3JpZ2h0fT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRMb2NhdGlvbjoge2xvY2F0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPXttb2RhbENhcmRTdHlsZXMubW9kYWxfZGV0YWlsc19yaWdodH0+WWVhcjoge3llYXJ9PC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxwPkRlc2NyaXB0aW9uOiB7dGV4dH08L3A+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5idG5fY2FyZH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5idG5fbGlua30gaHJlZj17bGlua30+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFNlZSBNb3JlXHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5idG5fY2FyZH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5idG5fbGlua30gaHJlZj1cIi9zaWduLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdENvbnRhY3RcclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbENhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=