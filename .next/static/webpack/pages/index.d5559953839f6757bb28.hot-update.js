"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _Users_keshnen_Documents_GitHub_AIStock_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_keshnen_Documents_GitHub_AIStock_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_keshnen_Documents_GitHub_AIStock_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_keshnen_Documents_GitHub_AIStock_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.module.css */ \"./pages/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_IFTTB_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../public/IFTTB.png */ \"./public/IFTTB.png\");\n/* harmony import */ var _stockTicker_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stockTicker.js */ \"./pages/stockTicker.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/keshnen/Documents/GitHub/AIStock/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"),\n      animalInput = _useState[0],\n      setAnimalInput = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"TEST\"),\n      result = _useState2[0],\n      setResult = _useState2[1];\n\n  function onSubmit(_x) {\n    return _onSubmit.apply(this, arguments);\n  }\n\n  function _onSubmit() {\n    _onSubmit = (0,_Users_keshnen_Documents_GitHub_AIStock_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/_Users_keshnen_Documents_GitHub_AIStock_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(event) {\n      var response, data, eachStock;\n      return _Users_keshnen_Documents_GitHub_AIStock_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              event.preventDefault();\n              _context.next = 3;\n              return fetch(\"/api/generate\", {\n                method: \"POST\",\n                headers: {\n                  \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                  animal: animalInput\n                })\n              });\n\n            case 3:\n              response = _context.sent;\n              _context.next = 6;\n              return response.json();\n\n            case 6:\n              data = _context.sent;\n              setResult(\"Buy These 3 Stocks:, \" + data.result);\n              setAnimalInput(\"\");\n              console.log(data.result);\n              eachStock = data.result.split(\", \"); // eachStock[0]\n              // eachStock[1]\n              // {eachStock[2]}\n              // console.log(eachStock);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n    return _onSubmit.apply(this, arguments);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().div),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"title\", {\n        children: \"OpenAI Quickstart\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css\",\n        integrity: \"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\",\n        crossorigin: \"anonymous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.googleapis.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 12\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\",\n        crossorigin: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@700&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.googleapis.com\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        rel: \"preconnect\",\n        href: \"https://fonts.gstatic.com\",\n        crossorigin: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        href: \"https://fonts.googleapis.com/css2?family=Merriweather+Sans:wght@700&family=Ubuntu:wght@500&display=swap\",\n        rel: \"stylesheet\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 59,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/dog.png\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"main\", {\n      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"top\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"nav\", {\n          className: \"navbar navbar-expand-lg navbar-dark\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"a\", {\n            \"class\": \"navbar-brand\",\n            href: \"/\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n              width: \"100px\",\n              height: \"40px\",\n              src: _public_IFTTB_png__WEBPACK_IMPORTED_MODULE_5__.default,\n              title: \"\",\n              alt: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 71,\n              columnNumber: 11\n            }, this), \" \"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 70,\n            columnNumber: 11\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n            className: \"navbar-toggler\",\n            type: \"button\",\n            \"data-bs-toggle\": \"collapse\",\n            \"data-target\": \"#navbarSupportedContent\",\n            \"aria-controls\": \"navbarSupportedContent\",\n            \"aria-expanded\": \"false\",\n            \"aria-label\": \"Toggle navigation\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"span\", {\n              className: \"navbar-toggler-icon\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 73,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"collapse navbar-collapse\",\n            id: \"navbarSupportedContent\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"ul\", {\n              className: \"navbar-nav ml-auto\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"li\", {\n                className: \"nav-item\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"a\", {\n                  className: \"nav-link\",\n                  href: \"\",\n                  children: \"Insights\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 87,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 86,\n                columnNumber: 17\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"li\", {\n                className: \"nav-item\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"a\", {\n                  className: \"nav-link\",\n                  href: \"\",\n                  children: \"Portfolio\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 90,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 89,\n                columnNumber: 17\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"li\", {\n                className: \"nav-item\",\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"a\", {\n                  className: \"nav-link\",\n                  href: \"\",\n                  children: \"Conditions\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 93,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 92,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 85,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 84,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 7\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n        className: \"row\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: \"col-lg-6\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h1\", {\n            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().bigHeading),\n            children: \"Invest with simple English\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n              className: \"if\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h1\", {\n                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().if),\n                children: \"If\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 108,\n                columnNumber: 14\n              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"form\", {\n                onSubmit: onSubmit,\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n                  type: \"text\",\n                  name: \"animal\" //placeholder=\"Enter an Industry\"\n                  ,\n                  placeholder: \"enter an event\",\n                  value: animalInput,\n                  onChange: function onChange(e) {\n                    return setAnimalInput(e.target.value);\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 110,\n                  columnNumber: 8\n                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"input\", {\n                  type: \"submit\",\n                  value: \"Generate stocks\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 118,\n                  columnNumber: 8\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 109,\n                columnNumber: 13\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 106,\n              columnNumber: 13\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 104,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n            className: \"col-lg-6\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"img\", {\n              className: \"stock\",\n              src: \"my-app/public/realstock.png\",\n              alt: \"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 125,\n              columnNumber: 10\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 124,\n            columnNumber: 8\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 100,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          className: (_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().result),\n          children: [result !== undefined && result.split(\", \")[0] + \" \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 130,\n            columnNumber: 6\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 131,\n            columnNumber: 6\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().but),\n            id: \"stock1\",\n            type: \"button\",\n            \"class\": \"btn btn-success\",\n            children: result !== undefined && result.split(\", \")[1]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 133,\n            columnNumber: 6\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().but),\n            id: \"stock2\",\n            type: \"button\",\n            \"class\": \"btn btn-success\",\n            children: result !== undefined && result.split(\", \")[2]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 134,\n            columnNumber: 6\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"button\", {\n            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_8___default().but),\n            id: \"stock3\",\n            type: \"button\",\n            \"class\": \"btn btn-success\",\n            children: result !== undefined && result.split(\", \")[3]\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 135,\n            columnNumber: 6\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_stockTicker_js__WEBPACK_IMPORTED_MODULE_6__.default, {\n            symbol: \"NASDAQ:FB\",\n            children: \" \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 137,\n            columnNumber: 6\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 129,\n          columnNumber: 6\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 41,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"afCrdgnelIqD+RabXEApqg0Y4sw=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBR3lCLFNBQVQsSUFBc0J6QixNQUFNLENBQUNrQixLQUFQLENBQWEsSUFBYixFQUFtQixDQUFuQjtBQUExRztBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQU5BLGVBUUEsOERBQUMsb0RBQUQ7QUFBVSxrQkFBTSxFQUFHLFdBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE5Qkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBakNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFGRjtBQXdHRDs7R0F0SXVCckI7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzPzQ0ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgTG9nbyBmcm9tIFwiL3B1YmxpYy9JRlRUQi5wbmdcIlxuXG5pbXBvcnQgVGFic3Nob3cgZnJvbSAnLi9zdG9ja1RpY2tlci5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2FuaW1hbElucHV0LCBzZXRBbmltYWxJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Jlc3VsdCwgc2V0UmVzdWx0XSA9IHVzZVN0YXRlKFwiVEVTVFwiKTtcblxuICBhc3luYyBmdW5jdGlvbiBvblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9hcGkvZ2VuZXJhdGVcIiwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBhbmltYWw6IGFuaW1hbElucHV0IH0pLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIHNldFJlc3VsdChcIkJ1eSBUaGVzZSAzIFN0b2NrczosIFwiICsgZGF0YS5yZXN1bHQpO1xuICAgIHNldEFuaW1hbElucHV0KFwiXCIpO1xuXG4gICAgY29uc29sZS5sb2coZGF0YS5yZXN1bHQpXG5cbiAgICBsZXQgZWFjaFN0b2NrID0gZGF0YS5yZXN1bHQuc3BsaXQoXCIsIFwiKTtcblxuICAgIC8vIGVhY2hTdG9ja1swXVxuICAgIC8vIGVhY2hTdG9ja1sxXVxuICAgIC8vIHtlYWNoU3RvY2tbMl19XG4gICAgLy8gY29uc29sZS5sb2coZWFjaFN0b2NrKTtcblxuICB9XG4gXG4gIHJldHVybiAoXG4gICAgXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXZ9PlxuICAgICAgXG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk9wZW5BSSBRdWlja3N0YXJ0PC90aXRsZT5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANC4zLjEvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIlxuICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cImFub255bW91c1wiXG4gICAgICAgIC8+XG4gICAgICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3Nzb3JpZ2luIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWVycml3ZWF0aGVyK1NhbnM6d2dodEA3MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgY3Jvc3NvcmlnaW4gLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NZXJyaXdlYXRoZXIrU2Fuczp3Z2h0QDcwMCZmYW1pbHk9VWJ1bnR1OndnaHRANTAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2RvZy5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3BcIj5cbiAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrXCI+XG4gICAgICAgICAgPGEgY2xhc3M9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiL1wiPlxuICAgICAgICAgIDxJbWFnZSB3aWR0aD1cIjEwMHB4XCIgaGVpZ2h0PVwiNDBweFwiIHNyYz17TG9nb30gdGl0bGU9XCJcIiBhbHQ9XCJcIiAvPiA8L2E+XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgZGF0YS1icy10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXG4gICAgICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1sLWF1dG9cIiA+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCJcIj5JbnNpZ2h0czwvYT5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiXCI+UG9ydGZvbGlvPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCJcIj5Db25kaXRpb25zPC9hPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L25hdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmJpZ0hlYWRpbmd9PlxuICAgICAgICAgICAgICBJbnZlc3Qgd2l0aCBzaW1wbGUgRW5nbGlzaFxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpZlwiPlxuICAgICAgICAgICAgIFxuICAgICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSB7c3R5bGVzLmlmfT5JZjwvaDE+XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PiAgICAgICAgICAgICAgXG4gICAgICAgPGlucHV0XG4gICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICBuYW1lPVwiYW5pbWFsXCJcbiAgICAgICAgIC8vcGxhY2Vob2xkZXI9XCJFbnRlciBhbiBJbmR1c3RyeVwiXG4gICAgICAgICBwbGFjZWhvbGRlcj1cImVudGVyIGFuIGV2ZW50XCJcbiAgICAgICAgIHZhbHVlPXthbmltYWxJbnB1dH1cbiAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW5pbWFsSW5wdXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgIC8+XG4gICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkdlbmVyYXRlIHN0b2Nrc1wiIC8+XG4gICAgIDwvZm9ybT5cbiAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICA8L2Rpdj5cblxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cbiAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwic3RvY2tcIiBzcmM9XCJteS1hcHAvcHVibGljL3JlYWxzdG9jay5wbmdcIiBhbHQ9XCJcIiAvPlxuICAgICAgIDwvZGl2PlxuICAgICA8L2Rpdj5cblxuICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlc3VsdH0+e3Jlc3VsdCE9PXVuZGVmaW5lZCAmJiByZXN1bHQuc3BsaXQoXCIsIFwiKVswXSArIFwiIFwifSAgXG4gICAgIDxicj48L2JyPlxuICAgICA8YnI+PC9icj5cbiAgICAgXG4gICAgIDxidXR0b24gY2xhc3NOYW1lID0ge3N0eWxlcy5idXR9IGlkID0gXCJzdG9jazFcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj57cmVzdWx0IT09dW5kZWZpbmVkICYmIHJlc3VsdC5zcGxpdChcIiwgXCIpWzFdfTwvYnV0dG9uPlxuICAgICA8YnV0dG9uIGNsYXNzTmFtZSA9IHtzdHlsZXMuYnV0fSBpZD1cInN0b2NrMlwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiPntyZXN1bHQhPT11bmRlZmluZWQgJiYgcmVzdWx0LnNwbGl0KFwiLCBcIilbMl19PC9idXR0b24+XG4gICAgIDxidXR0b24gY2xhc3NOYW1lID0ge3N0eWxlcy5idXR9IGlkPVwic3RvY2szXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCI+e3Jlc3VsdCE9PXVuZGVmaW5lZCAmJiByZXN1bHQuc3BsaXQoXCIsIFwiKVszXX08L2J1dHRvbj5cblxuICAgICA8VGFic3Nob3cgc3ltYm9sID0gXCJOQVNEQVE6RkJcIj4gPC9UYWJzc2hvdz48L2Rpdj4gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj4gIFxuXG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkltYWdlIiwiTG9nbyIsIlRhYnNzaG93IiwiSG9tZSIsImFuaW1hbElucHV0Iiwic2V0QW5pbWFsSW5wdXQiLCJyZXN1bHQiLCJzZXRSZXN1bHQiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImFuaW1hbCIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZWFjaFN0b2NrIiwic3BsaXQiLCJkaXYiLCJtYWluIiwiYmlnSGVhZGluZyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInVuZGVmaW5lZCIsImJ1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});