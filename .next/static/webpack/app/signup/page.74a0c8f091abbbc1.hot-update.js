"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/signup/page",{

/***/ "(app-pages-browser)/./src/app/signup/page.tsx":
/*!*********************************!*\
  !*** ./src/app/signup/page.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignupPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction SignupPage() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\",\n        firstName: \"\",\n        lastName: \"\",\n        phoneNumber: \"\"\n    });\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/signup\", formData);\n            if (response.status === 201) {\n                alert(\"Signup successful\");\n            }\n        } catch (error) {\n            console.error(\"Error during signup:\", error);\n            alert(\"Signup failed\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"email\",\n                value: formData.email,\n                onChange: (e)=>setFormData({\n                        ...formData,\n                        email: e.target.value\n                    }),\n                placeholder: \"Email\",\n                required: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\Documents\\\\GitHub\\\\FitWay\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"password\",\n                value: formData.password,\n                onChange: (e)=>setFormData({\n                        ...formData,\n                        password: e.target.value\n                    }),\n                placeholder: \"Password\",\n                required: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\Documents\\\\GitHub\\\\FitWay\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: formData.firstName,\n                onChange: (e)=>setFormData({\n                        ...formData,\n                        firstName: e.target.value\n                    }),\n                placeholder: \"First Name\",\n                required: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\Documents\\\\GitHub\\\\FitWay\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: formData.lastName,\n                onChange: (e)=>setFormData({\n                        ...formData,\n                        lastName: e.target.value\n                    }),\n                placeholder: \"Last Name\",\n                required: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\Documents\\\\GitHub\\\\FitWay\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: formData.phoneNumber,\n                onChange: (e)=>setFormData({\n                        ...formData,\n                        phoneNumber: e.target.value\n                    }),\n                placeholder: \"Phone Number\",\n                required: true\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\Documents\\\\GitHub\\\\FitWay\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Sign Up\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\Documents\\\\GitHub\\\\FitWay\\\\src\\\\app\\\\signup\\\\page.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Acer\\\\Documents\\\\GitHub\\\\FitWay\\\\src\\\\app\\\\signup\\\\page.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(SignupPage, \"06l2IPZ3JXo6jrqUSrJxqGmGMe0=\");\n_c = SignupPage;\nvar _c;\n$RefreshReg$(_c, \"SignupPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc2lnbnVwL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDaUM7QUFDUDtBQUdYLFNBQVNFOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUM7UUFBRUssT0FBTztRQUFJQyxVQUFVO1FBQUlDLFdBQVc7UUFBSUMsVUFBVTtRQUFJQyxhQUFhO0lBQUc7SUFFakgsTUFBTUMsZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUVoQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNWiw2Q0FBS0EsQ0FBQ2EsSUFBSSxDQUFDLGVBQWVYO1lBQ2pELElBQUlVLFNBQVNFLE1BQU0sS0FBSyxLQUFLO2dCQUMzQkMsTUFBTTtZQUNSO1FBQ0YsRUFBRSxPQUFPQyxPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3RDRCxNQUFNO1FBQ1I7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRztRQUFLQyxVQUFVVjs7MEJBQ2QsOERBQUNXO2dCQUNDQyxNQUFLO2dCQUNMQyxPQUFPcEIsU0FBU0UsS0FBSztnQkFDckJtQixVQUFVLENBQUNiLElBQU1QLFlBQVk7d0JBQUUsR0FBR0QsUUFBUTt3QkFBRUUsT0FBT00sRUFBRWMsTUFBTSxDQUFDRixLQUFLO29CQUFDO2dCQUNsRUcsYUFBWTtnQkFDWkMsUUFBUTs7Ozs7OzBCQUVWLDhEQUFDTjtnQkFDQ0MsTUFBSztnQkFDTEMsT0FBT3BCLFNBQVNHLFFBQVE7Z0JBQ3hCa0IsVUFBVSxDQUFDYixJQUFNUCxZQUFZO3dCQUFFLEdBQUdELFFBQVE7d0JBQUVHLFVBQVVLLEVBQUVjLE1BQU0sQ0FBQ0YsS0FBSztvQkFBQztnQkFDckVHLGFBQVk7Z0JBQ1pDLFFBQVE7Ozs7OzswQkFFViw4REFBQ047Z0JBQ0NDLE1BQUs7Z0JBQ0xDLE9BQU9wQixTQUFTSSxTQUFTO2dCQUN6QmlCLFVBQVUsQ0FBQ2IsSUFBTVAsWUFBWTt3QkFBRSxHQUFHRCxRQUFRO3dCQUFFSSxXQUFXSSxFQUFFYyxNQUFNLENBQUNGLEtBQUs7b0JBQUM7Z0JBQ3RFRyxhQUFZO2dCQUNaQyxRQUFROzs7Ozs7MEJBRVYsOERBQUNOO2dCQUNDQyxNQUFLO2dCQUNMQyxPQUFPcEIsU0FBU0ssUUFBUTtnQkFDeEJnQixVQUFVLENBQUNiLElBQU1QLFlBQVk7d0JBQUUsR0FBR0QsUUFBUTt3QkFBRUssVUFBVUcsRUFBRWMsTUFBTSxDQUFDRixLQUFLO29CQUFDO2dCQUNyRUcsYUFBWTtnQkFDWkMsUUFBUTs7Ozs7OzBCQUVWLDhEQUFDTjtnQkFDQ0MsTUFBSztnQkFDTEMsT0FBT3BCLFNBQVNNLFdBQVc7Z0JBQzNCZSxVQUFVLENBQUNiLElBQU1QLFlBQVk7d0JBQUUsR0FBR0QsUUFBUTt3QkFBRU0sYUFBYUUsRUFBRWMsTUFBTSxDQUFDRixLQUFLO29CQUFDO2dCQUN4RUcsYUFBWTtnQkFDWkMsUUFBUTs7Ozs7OzBCQUVWLDhEQUFDQztnQkFBT04sTUFBSzswQkFBUzs7Ozs7Ozs7Ozs7O0FBRzVCO0dBekR3QnBCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2lnbnVwL3BhZ2UudHN4P2I2ZmUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ251cFBhZ2UoKSB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSB1c2VTdGF0ZSh7IGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnLCBmaXJzdE5hbWU6ICcnLCBsYXN0TmFtZTogJycsIHBob25lTnVtYmVyOiAnJyB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9zaWdudXAnLCBmb3JtRGF0YSk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMSkge1xyXG4gICAgICAgIGFsZXJ0KCdTaWdudXAgc3VjY2Vzc2Z1bCcpO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgc2lnbnVwOicsIGVycm9yKTtcclxuICAgICAgYWxlcnQoJ1NpZ251cCBmYWlsZWQnKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWxcIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZmlyc3ROYW1lfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9ybURhdGEoeyAuLi5mb3JtRGF0YSwgZmlyc3ROYW1lOiBlLnRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICB2YWx1ZT17Zm9ybURhdGEubGFzdE5hbWV9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBsYXN0TmFtZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGhvbmVOdW1iZXJ9XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBwaG9uZU51bWJlcjogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJQaG9uZSBOdW1iZXJcIlxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNpZ24gVXA8L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXhpb3MiLCJTaWdudXBQYWdlIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsInBob25lTnVtYmVyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJwb3N0Iiwic3RhdHVzIiwiYWxlcnQiLCJlcnJvciIsImNvbnNvbGUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/signup/page.tsx\n"));

/***/ })

});