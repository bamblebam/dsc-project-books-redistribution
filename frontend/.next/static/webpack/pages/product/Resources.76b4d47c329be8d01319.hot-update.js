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
          className: "store-right",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbENhcmQuanMiXSwibmFtZXMiOlsiU3RvcmVDYXJkIiwiYXV0aG9yIiwiYm9va05hbWUiLCJwcmljZSIsImxvY2F0aW9uIiwieWVhciIsInRleHQiLCJpbWdTcmMiLCJpbWdBbHQiLCJsaW5rIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNldE1vZGFsSXNPcGVuIiwibW9kYWxDYXJkU3R5bGVzIiwic3RvcmUiLCJjb25zb2xlIiwibG9nIiwiTW9kYWwiLCJtb2RhbCIsInN0b3JlX2xlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FVWjtBQUFBOztBQUFBLE1BVExDLE1BU0ssUUFUTEEsTUFTSztBQUFBLE1BUkxDLFFBUUssUUFSTEEsUUFRSztBQUFBLE1BUExDLEtBT0ssUUFQTEEsS0FPSztBQUFBLE1BTkxDLFFBTUssUUFOTEEsUUFNSztBQUFBLE1BTExDLElBS0ssUUFMTEEsSUFLSztBQUFBLE1BSkxDLElBSUssUUFKTEEsSUFJSztBQUFBLE1BSExDLE1BR0ssUUFITEEsTUFHSztBQUFBLE1BRkxDLE1BRUssUUFGTEEsTUFFSztBQUFBLE1BRExDLElBQ0ssUUFETEEsSUFDSzs7QUFBQSxrQkFDaUNDLHNEQUFRLENBQUMsS0FBRCxDQUR6QztBQUFBLE1BQ0VDLFdBREY7QUFBQSxNQUNlQyxjQURmOztBQUdMLHNCQUNDO0FBQ0MsYUFBUyxFQUFFQyx1RUFBZSxDQUFDQyxLQUQ1QjtBQUVDLFdBQU8sRUFBRSxtQkFBTTtBQUNkRixvQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNBRyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUNBLEtBTEY7QUFBQSw0QkFPQyxxRUFBQyw2Q0FBRDtBQUNDLGFBQU8sRUFBRVQsTUFEVjtBQUVDLGNBQVEsRUFBRUwsUUFGWDtBQUdDLFlBQU0sRUFBRUQsTUFIVDtBQUlDLFlBQU0sRUFBRU8sTUFKVDtBQUtDLFVBQUksRUFBRUY7QUFMUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBUEQsZUFjQyxxRUFBQyxrREFBRDtBQUNDLGVBQVMsRUFBRU8sdUVBQWUsQ0FBQ0ksS0FENUI7QUFFQyxZQUFNLEVBQUVOLFdBRlQ7QUFHQyxvQkFBYyxFQUFFLDBCQUFNO0FBQ3JCQyxzQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNBLE9BTEY7QUFBQSw2QkFPQztBQUFLLGlCQUFTLEVBQUVDLHVFQUFlLENBQUNLLEtBQWhDO0FBQUEsZ0NBQ0M7QUFBSyxtQkFBUyxFQUFFTCx1RUFBZSxDQUFDTSxVQUFoQztBQUE0QyxhQUFHLEVBQUVaLE1BQWpEO0FBQXlELGFBQUcsRUFBQztBQUE3RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGVBRUM7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxrQ0FDQztBQUFLLHFCQUFTLEVBQUMsY0FBZjtBQUFBLG9DQUNDO0FBQUksdUJBQVMsRUFBQyxhQUFkO0FBQUEseUJBQ0VMLFFBREYsU0FDZUcsSUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREQsZUFJQztBQUNDLHVCQUFTLEVBQUMsY0FEWDtBQUVDLHFCQUFPLEVBQUUsbUJBQU07QUFDZE8sOEJBQWMsQ0FBQyxLQUFELENBQWQ7QUFDQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxlQWNDO0FBQUsscUJBQVMsRUFBQyxZQUFmO0FBQUEsb0NBQ0M7QUFBQSx3QkFBS1g7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURELGVBRUM7QUFBQSx3QkFBS0U7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZELGVBR0M7QUFBQSx3QkFBS0M7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhELGVBSUM7QUFBQSx3QkFBSUU7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpELGVBS0M7QUFBUSx1QkFBUyxFQUFDLFVBQWxCO0FBQUEscUNBQ0M7QUFBRyx5QkFBUyxFQUFDLFVBQWI7QUFBd0Isb0JBQUksRUFBRUcsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxELGVBVUM7QUFBUSx1QkFBUyxFQUFDLFVBQWxCO0FBQUEscUNBQ0M7QUFBRyx5QkFBUyxFQUFDLFVBQWI7QUFBd0Isb0JBQUksRUFBQyxVQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUEyREEsQ0F4RUQ7O0dBQU1ULFM7O0tBQUFBLFM7QUEwRVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QvUmVzb3VyY2VzLjc2YjRkNDdjMzI5YmU4ZDAxMzE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcbmltcG9ydCBtb2RhbENhcmRTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jc3MvTW9kYWxDYXJkLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IFN0b3JlQ2FyZCA9ICh7XHJcblx0YXV0aG9yLFxyXG5cdGJvb2tOYW1lLFxyXG5cdHByaWNlLFxyXG5cdGxvY2F0aW9uLFxyXG5cdHllYXIsXHJcblx0dGV4dCxcclxuXHRpbWdTcmMsXHJcblx0aW1nQWx0LFxyXG5cdGxpbmssXHJcbn0pID0+IHtcclxuXHRjb25zdCBbbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXttb2RhbENhcmRTdHlsZXMuc3RvcmV9XHJcblx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRzZXRNb2RhbElzT3Blbih0cnVlKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkNsaWNrIHJlZ2lzdGVyZWRcIik7XHJcblx0XHRcdH19XHJcblx0XHQ+XHJcblx0XHRcdDxDYXJkXHJcblx0XHRcdFx0Ym9va0ltZz17aW1nU3JjfVxyXG5cdFx0XHRcdGJvb2tOYW1lPXtib29rTmFtZX1cclxuXHRcdFx0XHRhdXRob3I9e2F1dGhvcn1cclxuXHRcdFx0XHRpbWdBbHQ9e2ltZ0FsdH1cclxuXHRcdFx0XHR0ZXh0PXt0ZXh0fVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8TW9kYWxcclxuXHRcdFx0XHRjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5Nb2RhbH1cclxuXHRcdFx0XHRpc09wZW49e21vZGFsSXNPcGVufVxyXG5cdFx0XHRcdG9uUmVxdWVzdENsb3NlPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRzZXRNb2RhbElzT3BlbihmYWxzZSk7XHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXttb2RhbENhcmRTdHlsZXMubW9kYWx9PlxyXG5cdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5zdG9yZV9sZWZ0fSBzcmM9e2ltZ1NyY30gYWx0PVwiXCIgLz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic3RvcmUtcmlnaHRcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdHtib29rTmFtZX0gLCB7eWVhcn1cclxuXHRcdFx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNsb3NlLWJ1dHRvblwiXHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldE1vZGFsSXNPcGVuKGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0JnRpbWVzO1xyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcblx0XHRcdFx0XHRcdFx0PGgyPnthdXRob3J9PC9oMj5cclxuXHRcdFx0XHRcdFx0XHQ8aDI+e3ByaWNlfTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0PGgyPntsb2NhdGlvbn08L2gyPlxyXG5cdFx0XHRcdFx0XHRcdDxwPnt0ZXh0fTwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1jYXJkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidG4tbGlua1wiIGhyZWY9e2xpbmt9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRTZWUgTW9yZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWNhcmRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJ0bi1saW5rXCIgaHJlZj1cIi9zaWduLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdENvbnRhY3RcclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdG9yZUNhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=