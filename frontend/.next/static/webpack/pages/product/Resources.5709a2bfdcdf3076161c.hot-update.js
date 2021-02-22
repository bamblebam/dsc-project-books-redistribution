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
            className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.modal_header,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.modal_title,
              children: [bookName, " , ", year]
            }, void 0, true, {
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
              lineNumber: 48,
              columnNumber: 8
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 7
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.modal_body,
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
              className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_card,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbENhcmQuanMiXSwibmFtZXMiOlsiTW9kYWxDYXJkIiwiYXV0aG9yIiwiYm9va05hbWUiLCJwcmljZSIsImxvY2F0aW9uIiwieWVhciIsInRleHQiLCJpbWdTcmMiLCJpbWdBbHQiLCJsaW5rIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNldE1vZGFsSXNPcGVuIiwibW9kYWxDYXJkU3R5bGVzIiwic3RvcmUiLCJjb25zb2xlIiwibG9nIiwiTW9kYWwiLCJtb2RhbCIsInN0b3JlX2xlZnQiLCJzdG9yZV9yaWdodCIsIm1vZGFsX2hlYWRlciIsIm1vZGFsX3RpdGxlIiwiY2xvc2VfYnV0dG9uIiwibW9kYWxfYm9keSIsImJ0bl9jYXJkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BVVo7QUFBQTs7QUFBQSxNQVRMQyxNQVNLLFFBVExBLE1BU0s7QUFBQSxNQVJMQyxRQVFLLFFBUkxBLFFBUUs7QUFBQSxNQVBMQyxLQU9LLFFBUExBLEtBT0s7QUFBQSxNQU5MQyxRQU1LLFFBTkxBLFFBTUs7QUFBQSxNQUxMQyxJQUtLLFFBTExBLElBS0s7QUFBQSxNQUpMQyxJQUlLLFFBSkxBLElBSUs7QUFBQSxNQUhMQyxNQUdLLFFBSExBLE1BR0s7QUFBQSxNQUZMQyxNQUVLLFFBRkxBLE1BRUs7QUFBQSxNQURMQyxJQUNLLFFBRExBLElBQ0s7O0FBQUEsa0JBQ2lDQyxzREFBUSxDQUFDLEtBQUQsQ0FEekM7QUFBQSxNQUNFQyxXQURGO0FBQUEsTUFDZUMsY0FEZjs7QUFHTCxzQkFDQztBQUNDLGFBQVMsRUFBRUMsdUVBQWUsQ0FBQ0MsS0FENUI7QUFFQyxXQUFPLEVBQUUsbUJBQU07QUFDZEYsb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQUcsYUFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDQSxLQUxGO0FBQUEsNEJBT0MscUVBQUMsNkNBQUQ7QUFDQyxhQUFPLEVBQUVULE1BRFY7QUFFQyxjQUFRLEVBQUVMLFFBRlg7QUFHQyxZQUFNLEVBQUVELE1BSFQ7QUFJQyxZQUFNLEVBQUVPLE1BSlQ7QUFLQyxVQUFJLEVBQUVGO0FBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBELGVBY0MscUVBQUMsa0RBQUQ7QUFDQyxlQUFTLEVBQUVPLHVFQUFlLENBQUNJLEtBRDVCO0FBRUMsWUFBTSxFQUFFTixXQUZUO0FBR0Msb0JBQWMsRUFBRSwwQkFBTTtBQUNyQkMsc0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDQSxPQUxGO0FBQUEsNkJBT0M7QUFBSyxpQkFBUyxFQUFFQyx1RUFBZSxDQUFDSyxLQUFoQztBQUFBLGdDQUNDO0FBQUssbUJBQVMsRUFBRUwsdUVBQWUsQ0FBQ00sVUFBaEM7QUFBNEMsYUFBRyxFQUFFWixNQUFqRDtBQUF5RCxhQUFHLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDO0FBQUssbUJBQVMsRUFBRU0sdUVBQWUsQ0FBQ08sV0FBaEM7QUFBQSxrQ0FDQztBQUFLLHFCQUFTLEVBQUVQLHVFQUFlLENBQUNRLFlBQWhDO0FBQUEsb0NBQ0M7QUFBSSx1QkFBUyxFQUFFUix1RUFBZSxDQUFDUyxXQUEvQjtBQUFBLHlCQUNFcEIsUUFERixTQUNlRyxJQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUlDO0FBQ0MsdUJBQVMsRUFBRVEsdUVBQWUsQ0FBQ1UsWUFENUI7QUFFQyxxQkFBTyxFQUFFLG1CQUFNO0FBQ2RYLDhCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0EsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFjQztBQUFLLHFCQUFTLEVBQUVDLHVFQUFlLENBQUNXLFVBQWhDO0FBQUEsb0NBQ0M7QUFBQSx3QkFBS3ZCO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVDO0FBQUEsd0JBQUtFO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRCxlQUdDO0FBQUEsd0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRCxlQUlDO0FBQUEsd0JBQUlFO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRCxlQUtDO0FBQVEsdUJBQVMsRUFBRU8sdUVBQWUsQ0FBQ1ksUUFBbkM7QUFBQSxxQ0FDQztBQUFHLHlCQUFTLEVBQUMsVUFBYjtBQUF3QixvQkFBSSxFQUFFaEIsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxELGVBVUM7QUFBUSx1QkFBUyxFQUFDLFVBQWxCO0FBQUEscUNBQ0M7QUFBRyx5QkFBUyxFQUFDLFVBQWI7QUFBd0Isb0JBQUksRUFBQyxVQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUEyREEsQ0F4RUQ7O0dBQU1ULFM7O0tBQUFBLFM7QUEwRVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QvUmVzb3VyY2VzLjU3MDlhMmJmZGNkZjMwNzYxNjFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCJyZWFjdC1tb2RhbFwiO1xyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XHJcbmltcG9ydCBtb2RhbENhcmRTdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9jc3MvTW9kYWxDYXJkLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IE1vZGFsQ2FyZCA9ICh7XHJcblx0YXV0aG9yLFxyXG5cdGJvb2tOYW1lLFxyXG5cdHByaWNlLFxyXG5cdGxvY2F0aW9uLFxyXG5cdHllYXIsXHJcblx0dGV4dCxcclxuXHRpbWdTcmMsXHJcblx0aW1nQWx0LFxyXG5cdGxpbmssXHJcbn0pID0+IHtcclxuXHRjb25zdCBbbW9kYWxJc09wZW4sIHNldE1vZGFsSXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxkaXZcclxuXHRcdFx0Y2xhc3NOYW1lPXttb2RhbENhcmRTdHlsZXMuc3RvcmV9XHJcblx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRzZXRNb2RhbElzT3Blbih0cnVlKTtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkNsaWNrIHJlZ2lzdGVyZWRcIik7XHJcblx0XHRcdH19XHJcblx0XHQ+XHJcblx0XHRcdDxDYXJkXHJcblx0XHRcdFx0Ym9va0ltZz17aW1nU3JjfVxyXG5cdFx0XHRcdGJvb2tOYW1lPXtib29rTmFtZX1cclxuXHRcdFx0XHRhdXRob3I9e2F1dGhvcn1cclxuXHRcdFx0XHRpbWdBbHQ9e2ltZ0FsdH1cclxuXHRcdFx0XHR0ZXh0PXt0ZXh0fVxyXG5cdFx0XHQvPlxyXG5cdFx0XHQ8TW9kYWxcclxuXHRcdFx0XHRjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5Nb2RhbH1cclxuXHRcdFx0XHRpc09wZW49e21vZGFsSXNPcGVufVxyXG5cdFx0XHRcdG9uUmVxdWVzdENsb3NlPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRzZXRNb2RhbElzT3BlbihmYWxzZSk7XHJcblx0XHRcdFx0fX1cclxuXHRcdFx0PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXttb2RhbENhcmRTdHlsZXMubW9kYWx9PlxyXG5cdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5zdG9yZV9sZWZ0fSBzcmM9e2ltZ1NyY30gYWx0PVwiXCIgLz5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXttb2RhbENhcmRTdHlsZXMuc3RvcmVfcmlnaHR9PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLm1vZGFsX2hlYWRlcn0+XHJcblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLm1vZGFsX3RpdGxlfT5cclxuXHRcdFx0XHRcdFx0XHRcdHtib29rTmFtZX0gLCB7eWVhcn1cclxuXHRcdFx0XHRcdFx0XHQ8L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLmNsb3NlX2J1dHRvbn1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0TW9kYWxJc09wZW4oZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQmdGltZXM7XHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLm1vZGFsX2JvZHl9PlxyXG5cdFx0XHRcdFx0XHRcdDxoMj57YXV0aG9yfTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0PGgyPntwcmljZX08L2gyPlxyXG5cdFx0XHRcdFx0XHRcdDxoMj57bG9jYXRpb259PC9oMj5cclxuXHRcdFx0XHRcdFx0XHQ8cD57dGV4dH08L3A+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5idG5fY2FyZH0+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidG4tbGlua1wiIGhyZWY9e2xpbmt9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRTZWUgTW9yZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWNhcmRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJ0bi1saW5rXCIgaHJlZj1cIi9zaWduLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdENvbnRhY3RcclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbENhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=