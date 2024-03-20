/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/usertable/components/ResponsiveSlider.js":
/*!******************************************************!*\
  !*** ./src/usertable/components/ResponsiveSlider.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getDevieType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDevieType */ "./src/usertable/components/getDevieType.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);



const ResponsiveSlider = props => {
  const deviceType = (0,_getDevieType__WEBPACK_IMPORTED_MODULE_1__.useDeviceType)();
  const output = {};
  output.Desktop = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: "Columns",
    value: parseInt(props.data.desktop.value),
    onChange: value => props.setAttributes({
      [props.data.desktop.label]: value
    }),
    min: 2,
    max: 100
  }));
  output.Tablet = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: "Columns",
    value: parseInt(props.data.tablet.value),
    onChange: value => props.setAttributes({
      [props.data.tablet.label]: value
    }),
    min: 2,
    max: 100
  }));
  output.Mobile = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.RangeControl, {
    label: "Columns",
    value: parseInt(props.data.mobile.value),
    onChange: value => props.setAttributes({
      [props.data.mobile.label]: value
    }),
    min: 2,
    max: 100
  }));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "responsive-slider"
  }, output[deviceType] ? output[deviceType] : output["Desktop"]);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveSlider);

/***/ }),

/***/ "./src/usertable/components/ResponsiveToggle.js":
/*!******************************************************!*\
  !*** ./src/usertable/components/ResponsiveToggle.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _getDevieType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDevieType */ "./src/usertable/components/getDevieType.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);






const ResponsiveToggle = () => {
  const deviceType = (0,_getDevieType__WEBPACK_IMPORTED_MODULE_2__.useDeviceType)();
  const [displayResponsive, toggleResponsive] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const customSetPreviewDeviceType = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useCallback)(device => {
    if (null !== (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)("core/edit-post")) {
      const {
        __experimentalSetPreviewDeviceType: setPreviewDeviceType
      } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.dispatch)("core/edit-post");
      setPreviewDeviceType(device);
    }
    toggleResponsive(false);
  }, []);
  const devicesSvgs = {
    desktop: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "8",
      height: "7",
      viewBox: "0 0 8 7",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"
    })),
    tablet: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "6",
      height: "7",
      viewBox: "0 0 6 7",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"
    })),
    mobile: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      width: "4",
      height: "7",
      viewBox: "0 0 4 7",
      xmlns: "http://www.w3.org/2000/svg"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"
    }))
  };
  const devices = [{
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Desktop", "ultimate-addons-for-gutenberg"),
    staticName: "Desktop",
    title: devicesSvgs.desktop,
    itemClass: "uagb-desktop-tab uagb-responsive-tabs"
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Tablet", "ultimate-addons-for-gutenberg"),
    staticName: "Tablet",
    title: devicesSvgs.tablet,
    itemClass: "uagb-tablet-tab uagb-responsive-tabs"
  }, {
    name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Mobile", "ultimate-addons-for-gutenberg"),
    staticName: "Mobile",
    key: "mobile",
    title: devicesSvgs.mobile,
    itemClass: "uagb-mobile-tab uagb-responsive-tabs"
  }];
  const handleResponsiveToggle = () => {
    toggleResponsive(!displayResponsive);
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, !displayResponsive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: handleResponsiveToggle
  }, devicesSvgs[deviceType.toLowerCase()]), displayResponsive && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    className: "uagb-range-control-responsive components-tab-panel__tabs",
    "aria-label": (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.__)("Device", "ultimate-addons-for-gutenberg")
  }, devices.map(_ref => {
    let {
      name,
      staticName,
      key,
      title,
      itemClass
    } = _ref;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Tooltip, {
      text: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__.sprintf)( /* translators: abbreviation for units */
      "%s", name),
      key: key
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
      key: key,
      className: `components-button components-tab-panel__tabs-item ${itemClass}${staticName === deviceType ? " active-tab" : ""}`,
      "aria-pressed": deviceType === staticName,
      onClick: () => customSetPreviewDeviceType(staticName)
    }, title));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponsiveToggle);

/***/ }),

/***/ "./src/usertable/components/addDevicetype.js":
/*!***************************************************!*\
  !*** ./src/usertable/components/addDevicetype.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _getDevieType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDevieType */ "./src/usertable/components/getDevieType.js");



const AddDevicetype = Component => {
  return props => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      deviceType: (0,_getDevieType__WEBPACK_IMPORTED_MODULE_2__.useDeviceType)()
    }));
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddDevicetype);

/***/ }),

/***/ "./src/usertable/components/getDevieType.js":
/*!**************************************************!*\
  !*** ./src/usertable/components/getDevieType.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useDeviceType": () => (/* binding */ useDeviceType)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const useDeviceType = () => {
  const {
    deviceType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    return {
      deviceType: select("core/edit-post")?.__experimentalGetPreviewDeviceType() || "Desktop"
    };
  }, []);
  return deviceType || "";
};

/***/ }),

/***/ "./src/usertable/components/processCss.js":
/*!************************************************!*\
  !*** ./src/usertable/components/processCss.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const processCss = attributes => {
  const {
    fontsizeDesktop,
    fontsizeTablet,
    fontsizeMobile
  } = attributes;
  const selectors = {};
  const tabletSelectors = {};
  const mobileSelectors = {};
  let cssfull = "";
  selectors[".umar-eg-com"] = {
    "font-size": fontsizeDesktop + "px"
  };
  tabletSelectors[".umar-eg-com"] = {
    "font-size": fontsizeTablet + "px"
  };
  mobileSelectors[".umar-eg-com"] = {
    "font-size": fontsizeMobile + "px"
  };
  const genCss = function (selectorsObj) {
    let base = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    let responsiveType = arguments.length > 2 ? arguments[2] : undefined;
    let gen_styling_css = "";
    const id = "umar-eg";
    for (const selector in selectorsObj) {
      const cssProps = selectorsObj[selector];
      let css = "";
      for (const property in cssProps) {
        if (typeof cssProps[property] === "undefined" || cssProps[property] === null || cssProps[property]?.length === 0) {
          continue;
        }
        const propertyValue = cssProps[property];
        if ("font-family" === property && "Default" === propertyValue) {
          continue;
        }
        if ("font-family" === property) {
          css += property + ": " + "'" + propertyValue + "'" + ";";
        } else {
          css += property + ": " + propertyValue + ";";
        }
      }
      if (css.length !== 0) {
        if (responsiveType === "tablet") {
          gen_styling_css += "@media only screen and (max-width: " + 976 + "px) {";
          gen_styling_css += selector + "{";
          gen_styling_css += css;
          gen_styling_css += "}}";
        } else if (responsiveType === "mobile") {
          gen_styling_css += "@media only screen and (max-width: " + 767 + "px) {";
          gen_styling_css += selector + "{";
          gen_styling_css += css;
          gen_styling_css += "}}";
        } else {
          gen_styling_css += selector + "{";
          gen_styling_css += css;
          gen_styling_css += "}";
        }
      }
    }
    return gen_styling_css;
  };
  cssfull = genCss(selectors, "", "desktop");
  cssfull += genCss(tabletSelectors, "", "tablet");
  cssfull += genCss(mobileSelectors, "", "mobile");
  return cssfull;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (processCss);

/***/ }),

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
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_addDevicetype__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/addDevicetype */ "./src/usertable/components/addDevicetype.js");
/* harmony import */ var _components_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ResponsiveSlider */ "./src/usertable/components/ResponsiveSlider.js");
/* harmony import */ var _components_ResponsiveToggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ResponsiveToggle */ "./src/usertable/components/ResponsiveToggle.js");
/* harmony import */ var _components_processCss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/processCss */ "./src/usertable/components/processCss.js");










const edit = _ref => {
  let {
    attributes: {
      fontsizeDesktop,
      fontsizeTablet,
      fontsizeMobile
    },
    setAttributes
  } = _ref;
  console.log((0,_components_processCss__WEBPACK_IMPORTED_MODULE_7__["default"])({
    fontsizeDesktop,
    fontsizeTablet,
    fontsizeMobile
  }));
  const blockprops = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockprops, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "setting"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    initialOpen: true,
    title: "User Table"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ResponsiveToggle__WEBPACK_IMPORTED_MODULE_6__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_ResponsiveSlider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: {
      desktop: {
        value: fontsizeDesktop,
        label: "fontsizeDesktop"
      },
      tablet: {
        value: fontsizeTablet,
        label: "fontsizeTablet"
      },
      mobile: {
        value: fontsizeMobile,
        label: "fontsizeMobile"
      }
    },
    setAttributes: setAttributes
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, (0,_components_processCss__WEBPACK_IMPORTED_MODULE_7__["default"])({
    fontsizeDesktop,
    fontsizeTablet,
    fontsizeMobile
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    className: "umar-eg-com"
  }, "Click"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_3__.compose)((0,_components_addDevicetype__WEBPACK_IMPORTED_MODULE_4__["default"])(edit)));

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
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", {
    className: "umar-eg-com"
  }, "Click"));
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

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["compose"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

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



(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)("assignment-blocks/usertable", {
  attributes: {
    tabletitle: {
      type: "string",
      default: "User Table"
    },
    tabledata: {
      type: "array"
    },
    fontsizeDesktop: {
      type: "string",
      default: "20"
    },
    fontsizeTablet: {
      type: "string",
      default: "15"
    },
    fontsizeMobile: {
      type: "string",
      default: "10"
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map