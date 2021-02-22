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
                  children: ["Author: ", author]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  children: ["Price: ", price]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 9
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  children: ["Location: ", location]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 10
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                  children: ["Year: ", year]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 10
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 61,
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
              lineNumber: 66,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_card,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_link,
                href: link,
                children: "See More"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 8
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_card,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: _styles_css_ModalCard_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.btn_link,
                href: "/sign-up",
                children: "Contact"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 9
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Nb2RhbENhcmQuanMiXSwibmFtZXMiOlsiTW9kYWxDYXJkIiwiYXV0aG9yIiwiYm9va05hbWUiLCJwcmljZSIsImxvY2F0aW9uIiwieWVhciIsInRleHQiLCJpbWdTcmMiLCJpbWdBbHQiLCJsaW5rIiwidXNlU3RhdGUiLCJtb2RhbElzT3BlbiIsInNldE1vZGFsSXNPcGVuIiwibW9kYWxDYXJkU3R5bGVzIiwic3RvcmUiLCJjb25zb2xlIiwibG9nIiwibW9kYWwiLCJzdG9yZV9sZWZ0Iiwic3RvcmVfcmlnaHQiLCJtb2RhbF9oZWFkZXIiLCJtb2RhbF90aXRsZSIsImNsb3NlX2J1dHRvbiIsIm1vZGFsX2JvZHkiLCJtb2RhbF9kZXRhaWxzIiwiYnRuX2NhcmQiLCJidG5fbGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQVVaO0FBQUE7O0FBQUEsTUFUTEMsTUFTSyxRQVRMQSxNQVNLO0FBQUEsTUFSTEMsUUFRSyxRQVJMQSxRQVFLO0FBQUEsTUFQTEMsS0FPSyxRQVBMQSxLQU9LO0FBQUEsTUFOTEMsUUFNSyxRQU5MQSxRQU1LO0FBQUEsTUFMTEMsSUFLSyxRQUxMQSxJQUtLO0FBQUEsTUFKTEMsSUFJSyxRQUpMQSxJQUlLO0FBQUEsTUFITEMsTUFHSyxRQUhMQSxNQUdLO0FBQUEsTUFGTEMsTUFFSyxRQUZMQSxNQUVLO0FBQUEsTUFETEMsSUFDSyxRQURMQSxJQUNLOztBQUFBLGtCQUNpQ0Msc0RBQVEsQ0FBQyxLQUFELENBRHpDO0FBQUEsTUFDRUMsV0FERjtBQUFBLE1BQ2VDLGNBRGY7O0FBR0wsc0JBQ0M7QUFDQyxhQUFTLEVBQUVDLHVFQUFlLENBQUNDLEtBRDVCO0FBRUMsV0FBTyxFQUFFLG1CQUFNO0FBQ2RGLG9CQUFjLENBQUMsSUFBRCxDQUFkO0FBQ0FHLGFBQU8s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QUFBQSxTO0FBK0VTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0L1Jlc291cmNlcy5mOWI3MWUyNzcwMGViZjdlN2ZlZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwicmVhY3QtbW9kYWxcIjtcclxuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xyXG5pbXBvcnQgbW9kYWxDYXJkU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvY3NzL01vZGFsQ2FyZC5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBNb2RhbENhcmQgPSAoe1xyXG5cdGF1dGhvcixcclxuXHRib29rTmFtZSxcclxuXHRwcmljZSxcclxuXHRsb2NhdGlvbixcclxuXHR5ZWFyLFxyXG5cdHRleHQsXHJcblx0aW1nU3JjLFxyXG5cdGltZ0FsdCxcclxuXHRsaW5rLFxyXG59KSA9PiB7XHJcblx0Y29uc3QgW21vZGFsSXNPcGVuLCBzZXRNb2RhbElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2XHJcblx0XHRcdGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLnN0b3JlfVxyXG5cdFx0XHRvbkNsaWNrPXsoKSA9PiB7XHJcblx0XHRcdFx0c2V0TW9kYWxJc09wZW4odHJ1ZSk7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJDbGljayByZWdpc3RlcmVkXCIpO1xyXG5cdFx0XHR9fVxyXG5cdFx0PlxyXG5cdFx0XHQ8Q2FyZFxyXG5cdFx0XHRcdGJvb2tJbWc9e2ltZ1NyY31cclxuXHRcdFx0XHRib29rTmFtZT17Ym9va05hbWV9XHJcblx0XHRcdFx0YXV0aG9yPXthdXRob3J9XHJcblx0XHRcdFx0aW1nQWx0PXtpbWdBbHR9XHJcblx0XHRcdFx0dGV4dD17dGV4dH1cclxuXHRcdFx0Lz5cclxuXHRcdFx0PE1vZGFsXHJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiTW9kYWxcIlxyXG5cdFx0XHRcdGlzT3Blbj17bW9kYWxJc09wZW59XHJcblx0XHRcdFx0b25SZXF1ZXN0Q2xvc2U9eygpID0+IHtcclxuXHRcdFx0XHRcdHNldE1vZGFsSXNPcGVuKGZhbHNlKTtcclxuXHRcdFx0XHR9fVxyXG5cdFx0XHQ+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5tb2RhbH0+XHJcblx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLnN0b3JlX2xlZnR9IHNyYz17aW1nU3JjfSBhbHQ9XCJcIiAvPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e21vZGFsQ2FyZFN0eWxlcy5zdG9yZV9yaWdodH0+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXttb2RhbENhcmRTdHlsZXMubW9kYWxfaGVhZGVyfT5cclxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPXttb2RhbENhcmRTdHlsZXMubW9kYWxfdGl0bGV9Pntib29rTmFtZX08L2gxPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b25cclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLmNsb3NlX2J1dHRvbn1cclxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0TW9kYWxJc09wZW4oZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fX1cclxuXHRcdFx0XHRcdFx0XHQ+XHJcblx0XHRcdFx0XHRcdFx0XHQmdGltZXM7XHJcblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLm1vZGFsX2JvZHl9PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXttb2RhbENhcmRTdHlsZXMubW9kYWxfZGV0YWlsc30+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8aDI+QXV0aG9yOiB7YXV0aG9yfTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMj5QcmljZToge3ByaWNlfTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMj5Mb2NhdGlvbjoge2xvY2F0aW9ufTwvaDI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxoMj5ZZWFyOiB7eWVhcn08L2gyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PHA+RGVzY3JpcHRpb246IHt0ZXh0fTwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLmJ0bl9jYXJkfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLmJ0bl9saW5rfSBocmVmPXtsaW5rfT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0U2VlIE1vcmVcclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLmJ0bl9jYXJkfT5cclxuXHRcdFx0XHRcdFx0XHRcdDxhIGNsYXNzTmFtZT17bW9kYWxDYXJkU3R5bGVzLmJ0bl9saW5rfSBocmVmPVwiL3NpZ24tdXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0Q29udGFjdFxyXG5cdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L01vZGFsPlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsQ2FyZDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==