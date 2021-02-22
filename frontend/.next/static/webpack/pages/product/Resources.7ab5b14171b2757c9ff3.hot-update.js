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
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: ["Author: ", author]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: ["Price: ", price]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: ["Location: ", location]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                children: ["Year: ", year]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 60,
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
              lineNumber: 62,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_card,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_link,
                href: link,
                children: "See More"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_card,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_link,
                href: "/sign-up",
                children: "Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbENhcmQuanMiXSwibmFtZXMiOlsiTW9kYWxDYXJkIiwiYXV0aG9yIiwiYm9va05hbWUiLCJwcmljZSIsImxvY2F0aW9uIiwieWVhciIsInRleHQiLCJpbWdTcmMiLCJpbWdBbHQiLCJsaW5rIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNldE1vZGFsSXNPcGVuIiwibW9kYWxDYXJkU3R5bGVzIiwic3RvcmUiLCJjb25zb2xlIiwibG9nIiwibW9kYWwiLCJzdG9yZV9sZWZ0Iiwic3RvcmVfcmlnaHQiLCJtb2RhbF9oZWFkZXIiLCJtb2RhbF90aXRsZSIsImNsb3NlX2J1dHRvbiIsIm1vZGFsX2JvZHkiLCJtb2RhbF9kZXRhaWxzIiwiYnRuX2NhcmQiLCJidG5fbGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQVVaO0FBQUE7O0FBQUEsTUFUTEMsTUFTSyxRQVRMQSxNQVNLO0FBQUEsTUFSTEMsUUFRSyxRQVJMQSxRQVFLO0FBQUEsTUFQTEMsS0FPSyxRQVBMQSxLQU9LO0FBQUEsTUFOTEMsUUFNSyxRQU5MQSxRQU1LO0FBQUEsTUFMTEMsSUFLSyxRQUxMQSxJQUtLO0FBQUEsTUFKTEMsSUFJSyxRQUpMQSxJQUlLO0FBQUEsTUFITEMsTUFHSyxRQUhMQSxNQUdLO0FBQUEsTUFGTEMsTUFFSyxRQUZMQSxNQUVLO0FBQUEsTUFETEMsSUFDSyxRQURMQSxJQUNLOztBQUFBLGtCQUNpQ0Msc0RBQVEsQ0FBQyxLQUFELENBRHpDO0FBQUEsTUFDRUMsV0FERjtBQUFBLE1BQ2VDLGNBRGY7O0FBR0wsc0JBQ0M7QUFDQyxhQUFTLEVBQUVDLHVFQUFlLENBQUNDLEtBRDVCO0FBRUMsV0FBTyxFQUFFLG1CQUFNO0FBQ2RGLG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0FHLGFBQU8s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ZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSBcInJlYWN0LW1vZGFsXCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IG1vZGFsQ2FyZFN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2Nzcy9Nb2RhbENhcmQubW9kdWxlLmNzc1wiO1xyXG5cclxuY29uc3QgTW9kYWxDYXJkID0gKHtcclxuXHRhdXRob3IsXHJcblx0Ym9va05hbWUsXHJcblx0cHJpY2UsXHJcblx0bG9jYXRpb24sXHJcblx0eWVhcixcclxuXHR0ZXh0LFxyXG5cdGltZ1NyYyxcclxuXHRpbWdBbHQsXHJcblx0bGluayxcclxufSkgPT4ge1xyXG5cdGNvbnN0IFttb2RhbElzT3Blbiwgc2V0TW9kYWxJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGRpdlxyXG5cdFx0XHRjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5zdG9yZX1cclxuXHRcdFx0b25DbGljaz17KCkgPT4ge1xyXG5cdFx0XHRcdHNldE1vZGFsSXNPcGVuKHRydWUpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiQ2xpY2sgcmVnaXN0ZXJlZFwiKTtcclxuXHRcdFx0fX1cclxuXHRcdD5cclxuXHRcdFx0PENhcmRcclxuXHRcdFx0XHRib29rSW1nPXtpbWdTcmN9XHJcblx0XHRcdFx0Ym9va05hbWU9e2Jvb2tOYW1lfVxyXG5cdFx0XHRcdGF1dGhvcj17YXV0aG9yfVxyXG5cdFx0XHRcdGltZ0FsdD17aW1nQWx0fVxyXG5cdFx0XHRcdHRleHQ9e3RleHR9XHJcblx0XHRcdC8+XHJcblx0XHRcdDxNb2RhbFxyXG5cdFx0XHRcdGNsYXNzTmFtZT1cIk1vZGFsXCJcclxuXHRcdFx0XHRpc09wZW49e21vZGFsSXNPcGVufVxyXG5cdFx0XHRcdG9uUmVxdWVzdENsb3NlPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRzZXRNb2RhbElzT3BlbihmYWxzZSk7XHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXttb2RhbENhcmRTdHlsZXMubW9kYWx9PlxyXG5cdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5zdG9yZV9sZWZ0fSBzcmM9e2ltZ1NyY30gYWx0PVwiXCIgLz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXttb2RhbENhcmRTdHlsZXMuc3RvcmVfcmlnaHR9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLm1vZGFsX2hlYWRlcn0+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLm1vZGFsX3RpdGxlfT57Ym9va05hbWV9PC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5jbG9zZV9idXR0b259XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldE1vZGFsSXNPcGVuKGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0JnRpbWVzO1xyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5tb2RhbF9ib2R5fT5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLm1vZGFsX2RldGFpbHN9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgyPkF1dGhvcjoge2F1dGhvcn08L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgyPlByaWNlOiB7cHJpY2V9PC9oMj5cclxuXHRcdFx0XHRcdFx0XHRcdDxoMj5Mb2NhdGlvbjoge2xvY2F0aW9ufTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8aDI+WWVhcjoge3llYXJ9PC9oMj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8cD5EZXNjcmlwdGlvbjoge3RleHR9PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXttb2RhbENhcmRTdHlsZXMuYnRuX2NhcmR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPXttb2RhbENhcmRTdHlsZXMuYnRuX2xpbmt9IGhyZWY9e2xpbmt9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRTZWUgTW9yZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXttb2RhbENhcmRTdHlsZXMuYnRuX2NhcmR9PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGEgY2xhc3NOYW1lPXttb2RhbENhcmRTdHlsZXMuYnRuX2xpbmt9IGhyZWY9XCIvc2lnbi11cFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRDb250YWN0XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvTW9kYWw+XHJcblx0XHQ8L2Rpdj5cclxuXHQpO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWxDYXJkO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9