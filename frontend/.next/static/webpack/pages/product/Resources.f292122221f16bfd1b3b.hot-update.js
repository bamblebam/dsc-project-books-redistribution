webpackHotUpdate_N_E("pages/product/Resources",{

/***/ "./pages/product/Resources.js":
/*!************************************!*\
  !*** ./pages/product/Resources.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ModalCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ModalCard */ "./components/ModalCard.js");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SearchBar */ "./components/SearchBar.js");
/* harmony import */ var _styles_css_Resources_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/css/Resources.module.css */ "./styles/css/Resources.module.css");
/* harmony import */ var _styles_css_Resources_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_css_Resources_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _data_testData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../data/testData */ "./data/testData.js");


var _jsxFileName = "C:\\Users\\vedant\\Desktop\\DSC\\dsc-project-books-redistribution\\frontend\\pages\\product\\Resources.js",
    _this = undefined;






var Resources = function Resources() {
  var Items = _data_testData__WEBPACK_IMPORTED_MODULE_4__["test"].slice(0, 3);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_css_Resources_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.head,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
        children: "Some text "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 5
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SearchBar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 4
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _styles_css_Resources_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,
      children: Items.map(function (data, key) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ModalCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          author: data.author,
          bookName: data.bookName,
          price: data.price,
          location: data.location,
          year: data.year,
          text: data.text,
          imgSrc: data.imgSrc,
          imgAlt: data.imgAlt,
          link: data.link
        }, key, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 7
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 4
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }, _this);
};

_c = Resources;
/* harmony default export */ __webpack_exports__["default"] = (Resources);

var _c;

$RefreshReg$(_c, "Resources");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9SZXNvdXJjZXMuanMiXSwibmFtZXMiOlsiUmVzb3VyY2VzIiwiSXRlbXMiLCJ0ZXN0Iiwic2xpY2UiLCJyZXNvdXJjZXNTdHlsZSIsImhlYWQiLCJtYWluIiwibWFwIiwiZGF0YSIsImtleSIsImF1dGhvciIsImJvb2tOYW1lIiwicHJpY2UiLCJsb2NhdGlvbiIsInllYXIiLCJ0ZXh0IiwiaW1nU3JjIiwiaW1nQWx0IiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3ZCLE1BQU1DLEtBQUssR0FBR0MsbURBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQVgsRUFBYyxDQUFkLENBQWQ7QUFDQSxzQkFDQztBQUFBLDRCQUNDO0FBQUssZUFBUyxFQUFFQyx1RUFBYyxDQUFDQyxJQUEvQjtBQUFBLDhCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsZUFFQyxxRUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZUFLQztBQUFLLGVBQVMsRUFBRUQsdUVBQWMsQ0FBQ0UsSUFBL0I7QUFBQSxnQkFDRUwsS0FBSyxDQUFDTSxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQWU7QUFDekIsNEJBQ0MscUVBQUMsNkRBQUQ7QUFFQyxnQkFBTSxFQUFFRCxJQUFJLENBQUNFLE1BRmQ7QUFHQyxrQkFBUSxFQUFFRixJQUFJLENBQUNHLFFBSGhCO0FBSUMsZUFBSyxFQUFFSCxJQUFJLENBQUNJLEtBSmI7QUFLQyxrQkFBUSxFQUFFSixJQUFJLENBQUNLLFFBTGhCO0FBTUMsY0FBSSxFQUFFTCxJQUFJLENBQUNNLElBTlo7QUFPQyxjQUFJLEVBQUVOLElBQUksQ0FBQ08sSUFQWjtBQVFDLGdCQUFNLEVBQUVQLElBQUksQ0FBQ1EsTUFSZDtBQVNDLGdCQUFNLEVBQUVSLElBQUksQ0FBQ1MsTUFUZDtBQVVDLGNBQUksRUFBRVQsSUFBSSxDQUFDVTtBQVZaLFdBQ01ULEdBRE47QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQWNBLE9BZkE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREQ7QUEwQkEsQ0E1QkQ7O0tBQU1ULFM7QUE4QlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3QvUmVzb3VyY2VzLmYyOTIxMjIyMjFmMTZiZmQxYjNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9kYWxDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01vZGFsQ2FyZFwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NlYXJjaEJhclwiO1xyXG5pbXBvcnQgcmVzb3VyY2VzU3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9jc3MvUmVzb3VyY2VzLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdGVzdCB9IGZyb20gXCIuLi8uLi9kYXRhL3Rlc3REYXRhXCI7XHJcblxyXG5jb25zdCBSZXNvdXJjZXMgPSAoKSA9PiB7XHJcblx0Y29uc3QgSXRlbXMgPSB0ZXN0LnNsaWNlKDAsIDMpO1xyXG5cdHJldHVybiAoXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17cmVzb3VyY2VzU3R5bGUuaGVhZH0+XHJcblx0XHRcdFx0PGgzPlNvbWUgdGV4dCA8L2gzPlxyXG5cdFx0XHRcdDxTZWFyY2hCYXIgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtyZXNvdXJjZXNTdHlsZS5tYWlufT5cclxuXHRcdFx0XHR7SXRlbXMubWFwKChkYXRhLCBrZXkpID0+IHtcclxuXHRcdFx0XHRcdHJldHVybiAoXHJcblx0XHRcdFx0XHRcdDxNb2RhbENhcmRcclxuXHRcdFx0XHRcdFx0XHRrZXk9e2tleX1cclxuXHRcdFx0XHRcdFx0XHRhdXRob3I9e2RhdGEuYXV0aG9yfVxyXG5cdFx0XHRcdFx0XHRcdGJvb2tOYW1lPXtkYXRhLmJvb2tOYW1lfVxyXG5cdFx0XHRcdFx0XHRcdHByaWNlPXtkYXRhLnByaWNlfVxyXG5cdFx0XHRcdFx0XHRcdGxvY2F0aW9uPXtkYXRhLmxvY2F0aW9ufVxyXG5cdFx0XHRcdFx0XHRcdHllYXI9e2RhdGEueWVhcn1cclxuXHRcdFx0XHRcdFx0XHR0ZXh0PXtkYXRhLnRleHR9XHJcblx0XHRcdFx0XHRcdFx0aW1nU3JjPXtkYXRhLmltZ1NyY31cclxuXHRcdFx0XHRcdFx0XHRpbWdBbHQ9e2RhdGEuaW1nQWx0fVxyXG5cdFx0XHRcdFx0XHRcdGxpbms9e2RhdGEubGlua31cclxuXHRcdFx0XHRcdFx0Lz5cclxuXHRcdFx0XHRcdCk7XHJcblx0XHRcdFx0fSl9XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc291cmNlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==