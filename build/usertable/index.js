/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/usertable/edit.js":
/*!*******************************!*\
  !*** ./src/usertable/edit.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);





const edit = _ref => {
  let {
    attributes: {
      tabledata,
      tabletitle
    },
    setAttributes
  } = _ref;
  const blockprops = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const getuser = async () => {
    const request = await fetch("https://jsonplaceholder.typicode.com/users");
    const response = await request.json();
    if (response) {
      const users = response.map(user => {
        return {
          ...user,
          extrafield: ''
        };
      });
      setLoading(false);
      setAttributes({
        tabledata: users
      });
    }
  };
  const updateExtraField = (id, value) => {
    const updatedExtra = tabledata.map(table => {
      if (table.id == id) {
        table.extrafield = value;
      }
      return table;
    });
    setAttributes({
      tabledata: updatedExtra
    });
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getuser();
  }, []);
  if (loading) {
    return '...Loading';
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockprops, console.log(tabledata), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "setting"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: true,
    title: "User Table"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
    label: "Table Title",
    value: tabletitle,
    onChange: value => setAttributes({
      tabletitle: value
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "font-Outfit"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "text-center mb-6 font-bold "
  }, tabletitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "relative overflow-x-auto shadow-md sm:rounded-lg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "w-full text-sm text-left text-gray-500 dark:text-gray-400"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", {
    className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    scope: "col",
    className: "px-6 py-3"
  }, "Name"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    scope: "col",
    className: "px-6 py-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center"
  }, "Username")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    scope: "col",
    className: "px-6 py-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center"
  }, "Email")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    scope: "col",
    className: "px-6 py-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center"
  }, "Address")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    scope: "col",
    className: "px-6 py-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center"
  }, "Phone")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    scope: "col",
    className: "px-6 py-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center"
  }, "Website")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    scope: "col",
    className: "px-6 py-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center"
  }, "Company")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    scope: "col",
    className: "px-6 py-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex items-center"
  }, "Extra Field")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, Array.isArray(tabledata) && tabledata.map((table, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700",
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    scope: "row",
    className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
  }, table.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "px-6 py-4"
  }, table.username), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "px-6 py-4"
  }, table.email), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "px-6 py-4"
  }, `${table.address.street}, ${table.address.suite}, ${table.address.city}, ${table.address.zipcode},Lang:${table.address.geo.lat} Lat:${table.address.geo.lng}`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "px-6 py-4"
  }, table.phone), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "px-6 py-4"
  }, table.website), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "px-6 py-4"
  }, `${table.company.name},${table.company.catchPhrase},${table.company.bs}`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", {
    className: "px-6 py-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    onChange: e => updateExtraField(table.id, e.target.value),
    value: table.extrafield
  })))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (edit);

/***/ }),

/***/ "./src/usertable/save.js":
/*!*******************************!*\
  !*** ./src/usertable/save.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



const save = _ref => {
  let {
    attributes: {
      tabledata,
      tabletitle
    }
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save(), {
    className: "font-Outfit"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "font-Outfit"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", {
    className: "text-center mb-6 font-bold"
  }, tabletitle), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "flex w-full justify-end mb-4"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("input", {
    type: "text",
    id: "search",
    class: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    placeholder: "Serach By User Name"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "relative overflow-x-auto shadow-md sm:rounded-lg"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", {
    className: " w-full text-sm text-left text-gray-500 dark:text-gray-400"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("thead", {
    className: "text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
    scope: "col",
    className: "px-6 py-3"
  }, "Name"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
    scope: "col",
    className: "px-6 py-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "flex items-center"
  }, "Username")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
    scope: "col",
    className: "px-6 py-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "flex items-center"
  }, "Email")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
    scope: "col",
    className: "px-6 py-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "flex items-center"
  }, "Address")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
    scope: "col",
    className: "px-6 py-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "flex items-center"
  }, "Phone")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
    scope: "col",
    className: "px-6 py-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "flex items-center"
  }, "Website")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
    scope: "col",
    className: "px-6 py-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "flex items-center"
  }, "Company")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
    scope: "col",
    className: "px-6 py-3"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "flex items-center"
  }, "Extra Field")))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", {
    id: "usertable"
  }, Array.isArray(tabledata) && tabledata.map((table, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", {
    className: "bg-white border-b dark:bg-gray-800 dark:border-gray-700",
    key: index
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", {
    scope: "row",
    className: "px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
  }, table.name), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
    className: "px-6 py-4"
  }, table.username), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
    className: "px-6 py-4"
  }, table.email), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
    className: "px-6 py-4"
  }, `${table.address.street}, ${table.address.suite}, ${table.address.city}, ${table.address.zipcode},Lang:${table.address.geo.lat} Lat:${table.address.geo.lng}`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
    className: "px-6 py-4"
  }, table.phone), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
    className: "px-6 py-4"
  }, table.website), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
    className: "px-6 py-4"
  }, `${table.company.name},${table.company.catchPhrase},${table.company.bs}`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", {
    className: "px-6 py-4"
  }, table.extrafield))))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (save);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/usertable/index.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/usertable/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/usertable/save.js");



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('assignment-blocks/usertable', {
  attributes: {
    tabletitle: {
      type: "string",
      default: "User Table"
    },
    tabledata: {
      type: "array"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map