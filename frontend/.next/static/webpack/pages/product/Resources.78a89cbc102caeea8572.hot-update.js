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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbENhcmQuanMiXSwibmFtZXMiOlsiTW9kYWxDYXJkIiwiYXV0aG9yIiwiYm9va05hbWUiLCJwcmljZSIsImxvY2F0aW9uIiwieWVhciIsInRleHQiLCJpbWdTcmMiLCJpbWdBbHQiLCJsaW5rIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNldE1vZGFsSXNPcGVuIiwibW9kYWxDYXJkU3R5bGVzIiwic3RvcmUiLCJjb25zb2xlIiwibG9nIiwiTW9kYWwiLCJtb2RhbCIsInN0b3JlX2xlZnQiLCJzdG9yZV9yaWdodCIsIm1vZGFsX2hlYWRlciIsIm1vZGFsX3RpdGxlIiwiY2xvc2VfYnV0dG9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BVVo7QUFBQTs7QUFBQSxNQVRMQyxNQVNLLFFBVExBLE1BU0s7QUFBQSxNQVJMQyxRQVFLLFFBUkxBLFFBUUs7QUFBQSxNQVBMQyxLQU9LLFFBUExBLEtBT0s7QUFBQSxNQU5MQyxRQU1LLFFBTkxBLFFBTUs7QUFBQSxNQUxMQyxJQUtLLFFBTExBLElBS0s7QUFBQSxNQUpMQyxJQUlLLFFBSkxBLElBSUs7QUFBQSxNQUhMQyxNQUdLLFFBSExBLE1BR0s7QUFBQSxNQUZMQyxNQUVLLFFBRkxBLE1BRUs7QUFBQSxNQURMQyxJQUNLLFFBRExBLElBQ0s7O0FBQUEsa0JBQ2lDQyxzREFBUSxDQUFDLEtBQUQsQ0FEekM7QUFBQSxNQUNFQyxXQURGO0FBQUEsTUFDZUMsY0FEZjs7QUFHTCxzQkFDQztBQUNDLGFBQVMsRUFBRUMsdUVBQWUsQ0FBQ0MsS0FENUI7QUFFQyxXQUFPLEVBQUUsbUJBQU07QUFDZEYsb0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQUcsYUFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFDQSxLQUxGO0FBQUEsNEJBT0MscUVBQUMsNkNBQUQ7QUFDQyxhQUFPLEVBQUVULE1BRFY7QUFFQyxjQUFRLEVBQUVMLFFBRlg7QUFHQyxZQUFNLEVBQUVELE1BSFQ7QUFJQyxZQUFNLEVBQUVPLE1BSlQ7QUFLQyxVQUFJLEVBQUVGO0FBTFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBELGVBY0MscUVBQUMsa0RBQUQ7QUFDQyxlQUFTLEVBQUVPLHVFQUFlLENBQUNJLEtBRDVCO0FBRUMsWUFBTSxFQUFFTixXQUZUO0FBR0Msb0JBQWMsRUFBRSwwQkFBTTtBQUNyQkMsc0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDQSxPQUxGO0FBQUEsNkJBT0M7QUFBSyxpQkFBUyxFQUFFQyx1RUFBZSxDQUFDSyxLQUFoQztBQUFBLGdDQUNDO0FBQUssbUJBQVMsRUFBRUwsdUVBQWUsQ0FBQ00sVUFBaEM7QUFBNEMsYUFBRyxFQUFFWixNQUFqRDtBQUF5RCxhQUFHLEVBQUM7QUFBN0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxlQUVDO0FBQUssbUJBQVMsRUFBRU0sdUVBQWUsQ0FBQ08sV0FBaEM7QUFBQSxrQ0FDQztBQUFLLHFCQUFTLEVBQUVQLHVFQUFlLENBQUNRLFlBQWhDO0FBQUEsb0NBQ0M7QUFBSSx1QkFBUyxFQUFFUix1RUFBZSxDQUFDUyxXQUEvQjtBQUFBLHlCQUNFcEIsUUFERixTQUNlRyxJQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUlDO0FBQ0MsdUJBQVMsRUFBRVEsdUVBQWUsQ0FBQ1UsWUFENUI7QUFFQyxxQkFBTyxFQUFFLG1CQUFNO0FBQ2RYLDhCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0EsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREQsZUFjQztBQUFLLHFCQUFTLEVBQUMsWUFBZjtBQUFBLG9DQUNDO0FBQUEsd0JBQUtYO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxlQUVDO0FBQUEsd0JBQUtFO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRCxlQUdDO0FBQUEsd0JBQUtDO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRCxlQUlDO0FBQUEsd0JBQUlFO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRCxlQUtDO0FBQVEsdUJBQVMsRUFBQyxVQUFsQjtBQUFBLHFDQUNDO0FBQUcseUJBQVMsRUFBQyxVQUFiO0FBQXdCLG9CQUFJLEVBQUVHLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRCxlQVVDO0FBQVEsdUJBQVMsRUFBQyxVQUFsQjtBQUFBLHFDQUNDO0FBQUcseUJBQVMsRUFBQyxVQUFiO0FBQXdCLG9CQUFJLEVBQUMsVUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUREO0FBMkRBLENBeEVEOztHQUFNVCxTOztLQUFBQSxTO0FBMEVTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0L1Jlc291cmNlcy43OGE4OWNiYzEwMmNhZWVhODU3Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgbW9kYWxDYXJkU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY3NzL01vZGFsQ2FyZC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBNb2RhbENhcmQgPSAoe1xyXG5cdGF1dGhvcixcclxuXHRib29rTmFtZSxcclxuXHRwcmljZSxcclxuXHRsb2NhdGlvbixcclxuXHR5ZWFyLFxyXG5cdHRleHQsXHJcblx0aW1nU3JjLFxyXG5cdGltZ0FsdCxcclxuXHRsaW5rLFxyXG59KSA9PiB7XHJcblx0Y29uc3QgW21vZGFsSXNPcGVuLCBzZXRNb2RhbElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLnN0b3JlfVxyXG5cdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0c2V0TW9kYWxJc09wZW4odHJ1ZSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJDbGljayByZWdpc3RlcmVkXCIpO1xyXG5cdFx0XHR9fVxyXG5cdFx0PlxyXG5cdFx0XHQ8Q2FyZFxyXG5cdFx0XHRcdGJvb2tJbWc9e2ltZ1NyY31cclxuXHRcdFx0XHRib29rTmFtZT17Ym9va05hbWV9XHJcblx0XHRcdFx0YXV0aG9yPXthdXRob3J9XHJcblx0XHRcdFx0aW1nQWx0PXtpbWdBbHR9XHJcblx0XHRcdFx0dGV4dD17dGV4dH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PE1vZGFsXHJcblx0XHRcdFx0Y2xhc3NOYW1lPXttb2RhbENhcmRTdHlsZXMuTW9kYWx9XHJcblx0XHRcdFx0aXNPcGVuPXttb2RhbElzT3Blbn1cclxuXHRcdFx0XHRvblJlcXVlc3RDbG9zZT17KCkgPT4ge1xyXG5cdFx0XHRcdFx0c2V0TW9kYWxJc09wZW4oZmFsc2UpO1xyXG5cdFx0XHRcdH19XHJcblx0XHRcdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLm1vZGFsfT5cclxuXHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPXttb2RhbENhcmRTdHlsZXMuc3RvcmVfbGVmdH0gc3JjPXtpbWdTcmN9IGFsdD1cIlwiIC8+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLnN0b3JlX3JpZ2h0fT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5tb2RhbF9oZWFkZXJ9PlxyXG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5tb2RhbF90aXRsZX0+XHJcblx0XHRcdFx0XHRcdFx0XHR7Ym9va05hbWV9ICwge3llYXJ9XHJcblx0XHRcdFx0XHRcdFx0PC9oMT5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5jbG9zZV9idXR0b259XHJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNldE1vZGFsSXNPcGVuKGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH19XHJcblx0XHRcdFx0XHRcdFx0PlxyXG5cdFx0XHRcdFx0XHRcdFx0JnRpbWVzO1xyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XHJcblx0XHRcdFx0XHRcdFx0PGgyPnthdXRob3J9PC9oMj5cclxuXHRcdFx0XHRcdFx0XHQ8aDI+e3ByaWNlfTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0PGgyPntsb2NhdGlvbn08L2gyPlxyXG5cdFx0XHRcdFx0XHRcdDxwPnt0ZXh0fTwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1jYXJkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9XCJidG4tbGlua1wiIGhyZWY9e2xpbmt9PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRTZWUgTW9yZVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLWNhcmRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJ0bi1saW5rXCIgaHJlZj1cIi9zaWduLXVwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdENvbnRhY3RcclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9Nb2RhbD5cclxuXHRcdDwvZGl2PlxyXG5cdCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb2RhbENhcmQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=