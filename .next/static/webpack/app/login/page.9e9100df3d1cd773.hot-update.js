"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/login/page.tsx":
/*!********************************!*\
  !*** ./src/app/login/page.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../page.module.css */ \"(app-pages-browser)/./src/app/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction LoginPage() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const handleChange = (e)=>{\n        setFormData({\n            ...formData,\n            [e.target.name]: e.target.value\n        });\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            console.log(\"Submitting form:\", formData); // ตรวจสอบค่าก่อนส่ง\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/api/login\", formData);\n            if (response.status === 200) {\n                // ถ้าการเข้าสู่ระบบสำเร็จ ให้เก็บ token\n                localStorage.setItem(\"authToken\", response.data.token);\n                alert(\"Login successful\");\n            } else {\n                console.error(\"Login failed:\", response.data);\n                alert(\"Invalid login\");\n            }\n        } catch (error) {\n            var _error_response, _error_response_data, _error_response1;\n            console.error(\"Error during login:\", (error === null || error === void 0 ? void 0 : (_error_response = error.response) === null || _error_response === void 0 ? void 0 : _error_response.data) || error.message); // เพิ่มการตรวจสอบข้อผิดพลาด\n            alert((error === null || error === void 0 ? void 0 : (_error_response1 = error.response) === null || _error_response1 === void 0 ? void 0 : (_error_response_data = _error_response1.data) === null || _error_response_data === void 0 ? void 0 : _error_response_data.message) || \"Error during login\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().formContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\Documents\\\\GitHub\\\\FitWay\\\\src\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        name: \"email\",\n                        placeholder: \"Email\",\n                        onChange: handleChange,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\Documents\\\\GitHub\\\\FitWay\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        name: \"password\",\n                        placeholder: \"Password\",\n                        onChange: handleChange,\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\Documents\\\\GitHub\\\\FitWay\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Acer\\\\Documents\\\\GitHub\\\\FitWay\\\\src\\\\app\\\\login\\\\page.tsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Acer\\\\Documents\\\\GitHub\\\\FitWay\\\\src\\\\app\\\\login\\\\page.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Acer\\\\Documents\\\\GitHub\\\\FitWay\\\\src\\\\app\\\\login\\\\page.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(LoginPage, \"5q6mRSepCdu7alo9vTIaCtXVfOA=\");\n_c = LoginPage;\nvar _c;\n$RefreshReg$(_c, \"LoginPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ2U7QUFDRjtBQUV4QixTQUFTSTs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdILCtDQUFRQSxDQUFDO1FBQ3ZDSSxPQUFPO1FBQ1BDLFVBQVU7SUFDWjtJQUVBLE1BQU1DLGVBQWUsQ0FBQ0M7UUFDcEJKLFlBQVk7WUFBRSxHQUFHRCxRQUFRO1lBQUUsQ0FBQ0ssRUFBRUMsTUFBTSxDQUFDQyxJQUFJLENBQUMsRUFBRUYsRUFBRUMsTUFBTSxDQUFDRSxLQUFLO1FBQUM7SUFDN0Q7SUFFQSxNQUFNQyxlQUFlLE9BQU9KO1FBQzFCQSxFQUFFSyxjQUFjO1FBQ2hCLElBQUk7WUFDRkMsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQlosV0FBWSxvQkFBb0I7WUFDaEUsTUFBTWEsV0FBVyxNQUFNbEIsNkNBQUtBLENBQUNtQixJQUFJLENBQUMsY0FBY2Q7WUFFaEQsSUFBSWEsU0FBU0UsTUFBTSxLQUFLLEtBQUs7Z0JBQzNCLHdDQUF3QztnQkFDeENDLGFBQWFDLE9BQU8sQ0FBQyxhQUFhSixTQUFTSyxJQUFJLENBQUNDLEtBQUs7Z0JBQ3JEQyxNQUFNO1lBQ1IsT0FBTztnQkFDTFQsUUFBUVUsS0FBSyxDQUFDLGlCQUFpQlIsU0FBU0ssSUFBSTtnQkFDNUNFLE1BQU07WUFDUjtRQUNGLEVBQUUsT0FBT0MsT0FBWTtnQkFDa0JBLGlCQUMvQkEsc0JBQUFBO1lBRE5WLFFBQVFVLEtBQUssQ0FBQyx1QkFBdUJBLENBQUFBLGtCQUFBQSw2QkFBQUEsa0JBQUFBLE1BQU9SLFFBQVEsY0FBZlEsc0NBQUFBLGdCQUFpQkgsSUFBSSxLQUFJRyxNQUFNQyxPQUFPLEdBQUcsNEJBQTRCO1lBQzFHRixNQUFNQyxDQUFBQSxrQkFBQUEsNkJBQUFBLG1CQUFBQSxNQUFPUixRQUFRLGNBQWZRLHdDQUFBQSx1QkFBQUEsaUJBQWlCSCxJQUFJLGNBQXJCRywyQ0FBQUEscUJBQXVCQyxPQUFPLEtBQUk7UUFDMUM7SUFFRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXNUIsdUVBQW9COzswQkFDbEMsOERBQUM4QjswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBS0MsVUFBVW5COztrQ0FDZCw4REFBQ29CO3dCQUNDQyxNQUFLO3dCQUNMdkIsTUFBSzt3QkFDTHdCLGFBQVk7d0JBQ1pDLFVBQVU1Qjt3QkFDVjZCLFFBQVE7Ozs7OztrQ0FFViw4REFBQ0o7d0JBQ0NDLE1BQUs7d0JBQ0x2QixNQUFLO3dCQUNMd0IsYUFBWTt3QkFDWkMsVUFBVTVCO3dCQUNWNkIsUUFBUTs7Ozs7O2tDQUVWLDhEQUFDQzt3QkFBT0osTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTlCO0dBckR3Qi9CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9naW4vcGFnZS50c3g/ZmM2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIiBcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi8uLi9wYWdlLm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgUmVhY3QseyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luUGFnZSgpIHtcclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRGb3JtRGF0YSh7IC4uLmZvcm1EYXRhLCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdTdWJtaXR0aW5nIGZvcm06JywgZm9ybURhdGEpOyAgLy8g4LiV4Lij4Lin4LiI4Liq4Lit4Lia4LiE4LmI4Liy4LiB4LmI4Lit4LiZ4Liq4LmI4LiHXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGZvcm1EYXRhKTtcclxuICBcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgLy8g4LiW4LmJ4Liy4LiB4Liy4Lij4LmA4LiC4LmJ4Liy4Liq4Li54LmI4Lij4Liw4Lia4Lia4Liq4Liz4LmA4Lij4LmH4LiIIOC5g+C4q+C5ieC5gOC4geC5h+C4miB0b2tlblxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoVG9rZW4nLCByZXNwb25zZS5kYXRhLnRva2VuKTsgXHJcbiAgICAgICAgYWxlcnQoJ0xvZ2luIHN1Y2Nlc3NmdWwnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdMb2dpbiBmYWlsZWQ6JywgcmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgYWxlcnQoJ0ludmFsaWQgbG9naW4nKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkdXJpbmcgbG9naW46JywgZXJyb3I/LnJlc3BvbnNlPy5kYXRhIHx8IGVycm9yLm1lc3NhZ2UpOyAvLyDguYDguJ7guLTguYjguKHguIHguLLguKPguJXguKPguKfguIjguKrguK3guJrguILguYnguK3guJzguLTguJTguJ7guKXguLLguJRcclxuICAgICAgYWxlcnQoZXJyb3I/LnJlc3BvbnNlPy5kYXRhPy5tZXNzYWdlIHx8ICdFcnJvciBkdXJpbmcgbG9naW4nKTtcclxuICAgIH1cclxuICAgIFxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1Db250YWluZXJ9PlxyXG4gICAgICA8aDE+TG9naW48L2gxPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSJdLCJuYW1lcyI6WyJheGlvcyIsInN0eWxlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJMb2dpblBhZ2UiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJuYW1lIiwidmFsdWUiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInBvc3QiLCJzdGF0dXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZGF0YSIsInRva2VuIiwiYWxlcnQiLCJlcnJvciIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtQ29udGFpbmVyIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/page.tsx\n"));

/***/ })

});