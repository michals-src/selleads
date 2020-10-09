(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./src/column/edit.js":
/*!****************************!*\
  !*** ./src/column/edit.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var INNER_BLOCKS_TEMPLATE = [['core/heading', {
  level: 6,
  placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Label'),
  className: 'is-uppercase is-sub_title'
}], ['core/heading', {
  level: 4,
  placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Custome title')
}]];

var MyColorPalette = function MyColorPalette(_ref) {
  var _onChange = _ref.onChange,
      value = _ref.value;
  var color = value ? value : '#f00';
  var colors = [{
    name: 'red',
    color: '#f00'
  }, {
    name: 'white',
    color: '#fff'
  }, {
    name: 'blue',
    color: '#00f'
  }];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ColorPalette"], {
    colors: colors,
    value: color,
    onChange: function onChange(color) {
      return _onChange({
        color: color
      });
    }
  });
};

var MyBorderRadiusRange = function MyBorderRadiusRange(_ref2) {
  var _onChange2 = _ref2.onChange,
      value = _ref2.value;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    label: "Zaokr\u0105glenie",
    value: value,
    onChange: function onChange(columns) {
      return _onChange2(columns);
    },
    min: 0,
    max: 50
  });
};

function edit(_ref3) {
  var attributes = _ref3.attributes,
      setAttributes = _ref3.setAttributes,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref3, ["attributes", "setAttributes"]);

  var content = attributes.content,
      picture = attributes.picture,
      bgColor = attributes.bgColor,
      borderRadius = attributes.borderRadius,
      alignSelf = attributes.alignSelf,
      padding = attributes.padding,
      width = attributes.width;
  var isPicture = picture ? true : false;

  var handleColor = function handleColor(color) {
    return setAttributes({
      bgColor: color
    });
  };

  var handleBorderRadius = function handleBorderRadius(radius) {
    return setAttributes({
      borderRadius: radius
    });
  };

  var handlePicture = function handlePicture(e) {
    return setAttributes({
      picture: _objectSpread(_objectSpread({}, picture), {}, {
        id: e.id,
        url: e.url
      })
    });
  };

  var handleText = function handleText() {
    return setAttributes({
      picture: null
    });
  };

  var containerStyle = _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({
    width: '100%',
    padding: '30px',
    borderRadius: "".concat(borderRadius, "px")
  }, "padding", "".concat(padding, "px"));

  var parentStyle = {
    alignSelf: alignSelf
  };

  if (!picture && bgColor) {
    containerStyle.backgroundColor = bgColor === null || bgColor === void 0 ? void 0 : bgColor.color;
  } // if( width !== null && width !== undefined ){
  //     parentStyle.flex = `0 0 ${width}%`;
  // }


  var ColumnContentText = function ColumnContentText() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("header", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["InnerBlocks"], {
      templateLock: "all",
      __experimentalPassedProps: {
        className: 'columns-item-heading'
      },
      template: INNER_BLOCKS_TEMPLATE
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
      className: "columns-item-content"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["RichText"], {
      identifier: "content",
      tagName: "p",
      value: content,
      onChange: function onChange(value) {
        return setAttributes({
          content: value
        });
      },
      onSplit: function onSplit(value) {
        if (!value) {
          return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__["createBlock"])('core/paragraph');
        }

        return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_8__["createBlock"])('core/heading', _objectSpread(_objectSpread({}, attributes), {}, {
          content: value
        }));
      },
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Simple text filling the column ...') // { ...blockWrapperProps }

    })));
  };

  var ColumnContentPicture = function ColumnContentPicture() {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("figure", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("img", {
      src: picture === null || picture === void 0 ? void 0 : picture.url
    }));
  };

  var ColumnContent = function ColumnContent() {
    if (isPicture) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(ColumnContentPicture, null);
    } else {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(ColumnContentText, null);
    }
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Toolbar"], null, !picture && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["MediaUpload"], {
    label: "Dodaj grafik\u0119",
    multiple: false,
    onSelect: function onSelect(e) {
      return handlePicture(e);
    },
    render: function render(_ref4) {
      var open = _ref4.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ToolbarButton"], {
        onClick: function onClick(event) {
          event.stopPropagation();
          open();
        }
      }, "Zamie\u0144 na obraz");
    }
  }), picture && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ToolbarButton"], {
    onClick: function onClick(event) {
      event.stopPropagation();
      handleText();
    }
  }, "Zamie\u0144 na tekst"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_7__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    label: "Szeroko\u015B\u0107 kolumny",
    value: width,
    onChange: function onChange(value) {
      return setAttributes({
        width: value
      });
    },
    min: 10,
    max: 100
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(MyColorPalette, {
    onChange: handleColor,
    value: bgColor
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(MyBorderRadiusRange, {
    onChange: handleBorderRadius,
    value: borderRadius
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("p", null, "Pionowe po\u0142o\u017Cenie kolumny"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
    value: alignSelf,
    options: [{
      label: 'Góra',
      value: 'flex-start'
    }, {
      label: 'Środek',
      value: 'center'
    }, {
      label: 'Dół',
      value: 'flex-end'
    }],
    onChange: function onChange(value) {
      setAttributes({
        alignSelf: value
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    label: "Wg\u0142\u0119bienie",
    value: padding,
    onChange: function onChange(value) {
      setAttributes({
        padding: value
      });
    },
    min: 0,
    max: 60
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "columns-item",
    style: parentStyle,
    identifier: "content"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])("div", {
    className: "columns-item-container",
    style: containerStyle
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(ColumnContent, null))));
}

var withClientIdClassName = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["createHigherOrderComponent"])(function (BlockListBlock) {
  return function (props) {
    if (props.name !== 'selleads/column') {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(BlockListBlock, props);
    } // console.log(props.attributes.width);


    var wrapperProps = {};
    wrapperProps.style = {
      flex: "0 0 ".concat(props.attributes.width, "%")
    };
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["createElement"])(BlockListBlock, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
      className: "block-" + props.clientId,
      wrapperProps: wrapperProps
    }));
  };
}, 'withClientIdClassName');
Object(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_10__["addFilter"])('editor.BlockListBlock', 'my-plugin/with-client-id-class-name', withClientIdClassName);
/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["withFilters"])('editor.BlockListBlock')(edit));

/***/ }),

/***/ "./src/column/index.js":
/*!*****************************!*\
  !*** ./src/column/index.js ***!
  \*****************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/column/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/column/save.js");
 // import { audio as icon } from '@wordpress/icons';



var name = "selleads/column";
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Selleads - Kolumna'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Kolumna'),
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('selleads'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('column')],
  "category": "design",
  attributes: {
    content: {
      type: 'string',
      selector: 'p'
    },
    picture: {
      id: {
        type: 'number'
      },
      url: {
        type: 'string'
      }
    },
    bgColor: {
      type: 'string'
    },
    borderRadius: {
      type: 'number'
    },
    alignSelf: {
      type: 'string',
      default: "center"
    },
    padding: {
      type: "number",
      default: "30"
    },
    width: {
      type: "number"
    }
  },
  "supports": {
    "html": false
  },
  // icon,
  // transforms,
  // deprecated,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/column/save.js":
/*!****************************!*\
  !*** ./src/column/save.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Selleads – hello from the saved content!', 'selleads'));
}

/***/ }),

/***/ "./src/dotted-label/edit.css":
/*!***********************************!*\
  !*** ./src/dotted-label/edit.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/dotted-label/edit.js":
/*!**********************************!*\
  !*** ./src/dotted-label/edit.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit.css */ "./src/dotted-label/edit.css");
/* harmony import */ var _edit_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_edit_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var INNER_BLOCKS_TEMPLATE = [['core/heading', {
  level: 5,
  placeholder: 'Nagłówek',
  className: 'selleads-label--header'
}]];

var hex_to_rgb = function hex_to_rgb(hex) {
  var normal = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
  if (normal) return normal.slice(1).map(function (e) {
    return parseInt(e, 16);
  });
  var shorthand = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
  if (shorthand) return shorthand.slice(1).map(function (e) {
    return 0x11 * parseInt(e, 16);
  });
  return null;
};

function edit(_ref) {
  var _padding$outer, _padding$inner, _border$radius, _border$width, _border$color, _dot$width, _dot$width2, _dot$width3, _dot$color, _background$color, _border$radius2, _border$width2, _border$color2, _padding$outer2, _padding$inner2, _dot$color2, _dot$width4;

  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["attributes", "setAttributes"]);

  var background = attributes.background,
      border = attributes.border,
      padding = attributes.padding,
      dot = attributes.dot,
      content = attributes.content;
  var wrapperStyle = {
    "padding": "".concat(padding === null || padding === void 0 ? void 0 : (_padding$outer = padding.outer) === null || _padding$outer === void 0 ? void 0 : _padding$outer.value, "px")
  };
  var itemStyle = {
    "padding": "".concat(padding === null || padding === void 0 ? void 0 : (_padding$inner = padding.inner) === null || _padding$inner === void 0 ? void 0 : _padding$inner.value, "px"),
    "borderRadius": "".concat(border === null || border === void 0 ? void 0 : (_border$radius = border.radius) === null || _border$radius === void 0 ? void 0 : _border$radius.value, "px"),
    "borderWidth": "".concat(border === null || border === void 0 ? void 0 : (_border$width = border.width) === null || _border$width === void 0 ? void 0 : _border$width.value, "px"),
    "borderColor": border === null || border === void 0 ? void 0 : (_border$color = border.color) === null || _border$color === void 0 ? void 0 : _border$color.value
  };

  if (background === null || background === void 0 ? void 0 : background.image) {
    itemStyle.background = "".concat(background === null || background === void 0 ? void 0 : background.color.value, " url(").concat(background.image.value, ") center/center no-repeat");
  } else {
    itemStyle.backgroundColor = background === null || background === void 0 ? void 0 : background.color.value;
  }

  var dotStyle = {
    padding: "".concat(dot === null || dot === void 0 ? void 0 : (_dot$width = dot.width) === null || _dot$width === void 0 ? void 0 : _dot$width.value, "px")
  };
  var colors = [{
    name: 'red',
    color: '#f00'
  }, {
    name: 'white',
    color: '#fff'
  }, {
    name: 'blue',
    color: '#00f'
  }];
  var dotBeforeStyle = {
    width: "".concat(dot === null || dot === void 0 ? void 0 : (_dot$width2 = dot.width) === null || _dot$width2 === void 0 ? void 0 : _dot$width2.value, "px"),
    height: "".concat(dot === null || dot === void 0 ? void 0 : (_dot$width3 = dot.width) === null || _dot$width3 === void 0 ? void 0 : _dot$width3.value, "px"),
    backgroundColor: dot === null || dot === void 0 ? void 0 : (_dot$color = dot.color) === null || _dot$color === void 0 ? void 0 : _dot$color.value
  };

  if (dot === null || dot === void 0 ? void 0 : dot.color) {
    var hex2rgb = hex_to_rgb(dot === null || dot === void 0 ? void 0 : dot.color.value);
    dotStyle.backgroundColor = "rgba(".concat(hex2rgb[0], ",").concat(hex2rgb[1], ",").concat(hex2rgb[2], ",0.5)");
  }

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    title: "Zarz\u0105danie t\u0142em",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
    className: "components-custom-select-control__label"
  }, "Kolor t\u0142a")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ColorPicker"], {
    color: background === null || background === void 0 ? void 0 : (_background$color = background.color) === null || _background$color === void 0 ? void 0 : _background$color.value,
    onChangeComplete: function onChangeComplete(e) {
      return setAttributes({
        background: _objectSpread(_objectSpread({}, background), {}, {
          color: {
            value: e.hex
          }
        })
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    title: "Obramowanie",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    label: "Zaokr\u0105glenie",
    value: border === null || border === void 0 ? void 0 : (_border$radius2 = border.radius) === null || _border$radius2 === void 0 ? void 0 : _border$radius2.value,
    onChange: function onChange(e) {
      return setAttributes({
        border: _objectSpread(_objectSpread({}, border), {}, {
          radius: {
            value: e
          }
        })
      });
    },
    min: 0,
    max: 50
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    label: "Grubo\u015B\u0107 ramki",
    value: border === null || border === void 0 ? void 0 : (_border$width2 = border.width) === null || _border$width2 === void 0 ? void 0 : _border$width2.value,
    onChange: function onChange(e) {
      return setAttributes({
        border: _objectSpread(_objectSpread({}, border), {}, {
          width: {
            value: e
          }
        })
      });
    },
    min: 0,
    max: 50
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
    className: "components-custom-select-control__label"
  }, "Kolor obramowania")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ColorPicker"], {
    color: border === null || border === void 0 ? void 0 : (_border$color2 = border.color) === null || _border$color2 === void 0 ? void 0 : _border$color2.value,
    onChangeComplete: function onChangeComplete(e) {
      return setAttributes({
        border: _objectSpread(_objectSpread({}, border), {}, {
          color: {
            value: e.hex
          }
        })
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    title: "Wg\u0142\u0119bienie",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    label: "Zewn\u0119trzne",
    value: padding === null || padding === void 0 ? void 0 : (_padding$outer2 = padding.outer) === null || _padding$outer2 === void 0 ? void 0 : _padding$outer2.value,
    onChange: function onChange(e) {
      return setAttributes({
        padding: _objectSpread(_objectSpread({}, padding), {}, {
          outer: {
            value: e
          }
        })
      });
    },
    min: 0,
    max: 50
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    label: "Wewn\u0119trzne",
    value: padding === null || padding === void 0 ? void 0 : (_padding$inner2 = padding.inner) === null || _padding$inner2 === void 0 ? void 0 : _padding$inner2.value,
    onChange: function onChange(e) {
      return setAttributes({
        padding: _objectSpread(_objectSpread({}, padding), {}, {
          inner: {
            value: e
          }
        })
      });
    },
    min: 0,
    max: 50
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    title: "Ustawienia kropki",
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
    className: "components-custom-select-control__label"
  }, "Kolor")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ColorPicker"], {
    color: dot === null || dot === void 0 ? void 0 : (_dot$color2 = dot.color) === null || _dot$color2 === void 0 ? void 0 : _dot$color2.value,
    onChangeComplete: function onChangeComplete(e) {
      return setAttributes({
        dot: _objectSpread(_objectSpread({}, dot), {}, {
          color: {
            value: e.hex
          }
        })
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    label: "Rozmiar",
    value: dot === null || dot === void 0 ? void 0 : (_dot$width4 = dot.width) === null || _dot$width4 === void 0 ? void 0 : _dot$width4.value,
    onChange: function onChange(e) {
      return setAttributes({
        dot: _objectSpread(_objectSpread({}, dot), {}, {
          width: {
            value: e
          }
        })
      });
    },
    min: 10,
    max: 50
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "selleads-label--wrapper",
    style: wrapperStyle
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "selleads-label--item",
    style: itemStyle
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "selleads-label-dot",
    style: dotStyle
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "selleads-label-dot--pseudo-before",
    style: dotBeforeStyle
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", null, "Dot before"))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "selleads-label-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["InnerBlocks"], {
    templateLock: "all",
    __experimentalPassedProps: {// className: 'selleads-label--header',
    },
    template: INNER_BLOCKS_TEMPLATE
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["RichText"], {
    identifier: "content",
    tagName: "p",
    value: content,
    onChange: function onChange(value) {
      return setAttributes({
        content: value
      });
    },
    onSplit: function onSplit(value) {
      if (!value) {
        return createBlock('core/paragraph');
      }

      return createBlock('core/heading', _objectSpread(_objectSpread({}, attributes), {}, {
        content: value
      }));
    },
    placeholder: 'Simple text filling the column ...',
    className: "selleads-label--header" // { ...blockWrapperProps }

  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/dotted-label/index.js":
/*!***********************************!*\
  !*** ./src/dotted-label/index.js ***!
  \***********************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/dotted-label/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/dotted-label/save.js");
 // import { audio as icon } from '@wordpress/icons';



var name = "selleads/label";
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Selleads - Etykieta'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Etykieta z kolorową kropką'),
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('selleads'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('label')],
  "category": "design",
  attributes: {
    "background": {
      "color": {
        "type": "string",
        "default": "#ffffff"
      },
      "image": {
        "type": "string"
      }
    },
    border: {
      radius: {
        type: "number",
        default: 5
      },
      width: {
        type: "number",
        default: 1
      },
      color: {
        type: "string",
        default: "#ffffff"
      }
    },
    padding: {
      inner: {
        type: "number",
        default: 25
      },
      outer: {
        type: "number",
        default: 15
      }
    },
    dot: {
      color: {
        type: "string",
        default: "#ffffff"
      },
      width: {
        type: "string",
        default: "#ffffff"
      }
    },
    content: {
      type: "string",
      selector: "p"
    },
    heading: {
      type: "string",
      selector: "h1,h2,h3,h4,h5,h6"
    }
  },
  "supports": {
    "html": false
  },
  // icon,
  // transforms,
  // deprecated,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/dotted-label/save.js":
/*!**********************************!*\
  !*** ./src/dotted-label/save.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Selleads – hello from the saved content!', 'selleads'));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./section */ "./src/section/index.js");
/* harmony import */ var _column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./column */ "./src/column/index.js");
/* harmony import */ var _dotted_label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dotted-label */ "./src/dotted-label/index.js");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */





/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */

var registerBlock = function registerBlock(block) {
  if (!block) {
    return;
  }

  var settings = block.settings,
      name = block.name; // if ( metadata ) {
  // 	unstable__bootstrapServerSideBlockDefinitions( { [ name ]: metadata } );
  // }

  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])(name, settings);
};

var registerSelleadsBlocks = function registerSelleadsBlocks(blocks) {
  if (!blocks) return; // Common blocks are grouped at the top to prioritize their display
  // in various contexts — like the inserter and auto-complete components.

  blocks.forEach(registerBlock); // setDefaultBlockName( paragraph.name );
  // if ( window.wp && window.wp.oldEditor ) {
  // 	setFreeformContentHandlerName( classic.name );
  // }
  // setUnregisteredTypeHandlerName( missing.name );
  // setGroupingBlockName( group.name );
};

registerSelleadsBlocks([_section__WEBPACK_IMPORTED_MODULE_3__, _column__WEBPACK_IMPORTED_MODULE_4__, _dotted_label__WEBPACK_IMPORTED_MODULE_5__]);
/**
 * Internal dependencies
 */
// import Edit1 from './column/edit';
// import save1 from './column/save';
// import edit from './columns/ColumnsEdit';
// import save from './columns/save2';
// import edit3 from './dotted-label/edit';
// import save3 from './dotted-label/save';
// import Edit3 from './edit';
// import save3 from './save';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
// registerBlockType( 'selleads/column', {
// 	/**
// 	 * This is the display title for your block, which can be translated with `i18n` functions.
// 	 * The block inserter will show this name.
// 	 */
// 	title: __( 'Selleads', 'Selleads column' ),
// 	/**
// 	 * This is a short description for your block, can be translated with `i18n` functions.
// 	 * It will be shown in the Block Tab in the Settings Sidebar.
// 	 */
// 	description: __(
// 		'Example block written with ESNext standard and JSX support – build step required.',
// 		'selleads'
// 	),
// 	/**
// 	 * Blocks are grouped into categories to help users browse and discover them.
// 	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
// 	 */
// 	category: 'design',
// 	/**
// 	 * An icon property should be specified to make it easier to identify a block.
// 	 * These can be any of WordPress’ Dashicons, or a custom svg element.
// 	 */
// 	icon: 'smiley',
// 	/**
// 	 * Optional block extended support features.
// 	 */
// 	supports: {
// 		// Removes support for an HTML mode.
// 		html: false,
// 	},
// 	attributes: {
// 		content: {
// 			type: 'string',
// 			selector: 'p',
// 		},
// 		picture: {
// 			id: {
// 				type: 'number'
// 			},
// 			url: {
// 				type: 'string'
// 			}
// 		},
// 		bgColor: {
// 			type: 'string',
// 		},
// 		borderRadius:{
// 			type: 'number'
// 		},
// 		alignSelf: {
// 			type: 'string',
// 			default: "center"
// 		},
// 		padding: {
// 			type: "number",
// 			default: "30"
// 		},
// 		width: {
// 			type: "number"
// 		}
// 	},
// 	/**
// 	 * @see ./edit.js
// 	 */
// 	edit: Edit1,
// 	/**
// 	 * @see ./save.js
// 	 */
// 	save1,
// } );
// registerBlockType( 'selleads/columns', {
// 	/**
// 	 * This is the display title for your block, which can be translated with `i18n` functions.
// 	 * The block inserter will show this name.
// 	 */
// 	title: __( 'Selleads columns', 'Selleads Columns' ),
// 	/**
// 	 * This is a short description for your block, can be translated with `i18n` functions.
// 	 * It will be shown in the Block Tab in the Settings Sidebar.
// 	 */
// 	description: __(
// 		'Example block written with ESNext standard and JSX support – build step required.',
// 		'selleads'
// 	),
// 	/**
// 	 * Blocks are grouped into categories to help users browse and discover them.
// 	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
// 	 */
// 	category: 'design',
// 	/**
// 	 * An icon property should be specified to make it easier to identify a block.
// 	 * These can be any of WordPress’ Dashicons, or a custom svg element.
// 	 */
// 	icon: 'smiley',
// 	/**
// 	 * Optional block extended support features.
// 	 */
// 	supports: {
// 		// Removes support for an HTML mode.
// 		"html": false,
// 		"anchor": true,
// 	},
// 	attributes: {
// 		columns: {
// 			type: "number",
// 			default: "2"
// 		},
// 		colorParent: {
// 			type: "string"
// 		},
// 		colorColumns: {
// 			type: "string"
// 		}, 
// 		radiusParent: {
// 			type: "number"
// 		}, 
// 		radiusColumns: {
// 			type: "number"
// 		}, 
// 		paddingParent: {
// 			type: "number",
// 			default: 0
// 		}, 
// 		paddingColumns: {
// 			type: "number",
// 			default: 0
// 		},
// 		className: {
// 			type: "string",
// 			default: "aaaaaaaaaaa"
// 		}
// 	},
// 	// getEditWrapperProps(props) {
// 	// 	return {
// 	// 		className: 'abc'
// 	// 	}
// 	// },
// 	/**
// 	 * @see ./edit.js
// 	 */
// 	edit: edit,
// 	/**
// 	 * @see ./save.js
// 	 */
// 	save
// } );
// registerBlockType( 'selleads/label', {
// 	/**
// 	 * This is the display title for your block, which can be translated with `i18n` functions.
// 	 * The block inserter will show this name.
// 	 */
// 	title: __( 'Selleads label', 'Selleads' ),
// 	/**
// 	 * This is a short description for your block, can be translated with `i18n` functions.
// 	 * It will be shown in the Block Tab in the Settings Sidebar.
// 	 */
// 	description: __(
// 		'',
// 		'selleads'
// 	),
// 	/**
// 	 * Blocks are grouped into categories to help users browse and discover them.
// 	 * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
// 	 */
// 	category: 'design',
// 	/**
// 	 * An icon property should be specified to make it easier to identify a block.
// 	 * These can be any of WordPress’ Dashicons, or a custom svg element.
// 	 */
// 	icon: 'smiley',
// 	/**
// 	 * Optional block extended support features.
// 	 */
// 	supports: {
// 		// Removes support for an HTML mode.
// 		html: false,
// 	},
// 	attributes: {
// 		"background": {
// 			"color": {
// 				"type": "string",
// 				"default": "#ffffff"
// 			},
// 			"image": {
// 				"type": "string",
// 			}
// 		},
// 		border: {
// 			radius: {
// 				type: "number",
// 				default: 5
// 			},
// 			width: {
// 				type: "number",
// 				default: 1
// 			},
// 			color: {
// 				type: "string",
// 				default: "#ffffff"
// 			}
// 		},
// 		padding: {
// 			inner: {
// 				type: "number",
// 				default: 25
// 			},
// 			outer: {
// 				type: "number",
// 				default: 15
// 			}
// 		},
// 		dot: {
// 			color: {
// 				type: "string",
// 				default: "#ffffff"
// 			},
// 			width: {
// 				type: "string",
// 				default: "#ffffff"
// 			},
// 		},
// 		content: {
// 			type: "string",
// 			selector: "p"
// 		},
// 		heading: {
// 			type: "string",
// 			selector: "h1,h2,h3,h4,h5,h6"
// 		}
// 	},
// 	/**
// 	 * @see ./edit.js
// 	 */
// 	edit: edit3,
// 	/**
// 	 * @see ./save.js
// 	 */
// 	save3,
// } );

/**
 * WordPress dependencies
 */
// import {
// 	// registerBlockType,
// 	setDefaultBlockName,
// 	setFreeformContentHandlerName,
// 	setUnregisteredTypeHandlerName,
// 	setGroupingBlockName,
// 	unstable__bootstrapServerSideBlockDefinitions, // eslint-disable-line camelcase
// } from '@wordpress/blocks';

/***/ }),

/***/ "./src/section/edit.js":
/*!*****************************!*\
  !*** ./src/section/edit.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.css */ "./src/section/editor.css");
/* harmony import */ var _editor_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editor_css__WEBPACK_IMPORTED_MODULE_3__);





var edit = function edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes;
  var align = attributes.align,
      alignItems = attributes.alignItems,
      image = attributes.image,
      color = attributes.color,
      padding = attributes.padding,
      borderRadius = attributes.borderRadius,
      borderWidth = attributes.borderWidth,
      borderColor = attributes.borderColor;
  var styling = {
    backgroundColor: color,
    padding: "".concat(padding, "px"),
    borderRadius: "".concat(borderRadius, "px"),
    border: "".concat(borderWidth, "px solid ").concat(borderColor),
    alignItems: alignItems
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: "Zarz\u0105dzanie t\u0142em"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
    color: color,
    onChangeComplete: function onChangeComplete(e) {
      return setAttributes({
        color: e.hex
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: "Zarz\u0105dzanie t\u0142em"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    label: "Zaokr\u0105glenie",
    value: borderRadius,
    onChange: function onChange(e) {
      return setAttributes({
        borderRadius: e
      });
    },
    min: 0,
    max: 50
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    label: "Grubo\u015B\u0107 ramki",
    value: borderWidth,
    onChange: function onChange(e) {
      return setAttributes({
        borderWidth: e
      });
    },
    min: 0,
    max: 50
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", {
    className: "components-custom-select-control__label"
  }, "Kolor obramowania")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
    color: borderColor ? borderColor : '#fff',
    onChangeComplete: function onChangeComplete(e) {
      return setAttributes({
        borderColor: e.hex
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["PanelBody"], {
    title: "Zarz\u0105dzanie tre\u015Bci\u0105"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    label: "Wg\u0142\u0119bienie tre\u015Bci",
    value: padding,
    onChange: function onChange(e) {
      return setAttributes({
        padding: e
      });
    },
    min: 0,
    max: 50
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: "Pozycja tre\u015Bci",
    value: alignItems,
    options: [{
      label: 'Góra',
      value: 'flex-start'
    }, {
      label: 'Środek',
      value: 'center'
    }, {
      label: 'Dół',
      value: 'flex-end'
    }],
    onChange: function onChange(e) {
      setAttributes({
        alignItems: e
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "selleads-section is-".concat(align),
    style: styling
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "selleads-section-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], null))));
};

/* harmony default export */ __webpack_exports__["default"] = (edit);

/***/ }),

/***/ "./src/section/editor.css":
/*!********************************!*\
  !*** ./src/section/editor.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/section/index.js":
/*!******************************!*\
  !*** ./src/section/index.js ***!
  \******************************/
/*! exports provided: name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/section/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/section/save.js");
 // import { audio as icon } from '@wordpress/icons';



var name = "selleads/section";
var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Selleads - sekcja elementów'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Element, który tworzy zbiornik dla elementów w nim umieszczonych'),
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('selleads'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('section')],
  "category": "design",
  "attributes": {
    "align": {
      "type": "string",
      "default": 'full'
    },
    "alignItems": {
      "type": "string",
      "default": "center"
    },
    "image": {
      "type": "string"
    },
    "color": {
      "type": "string",
      "default": "#fff"
    },
    "padding": {
      "type": "number",
      "default": 25
    },
    "borderRadius": {
      "type": "number",
      "default": 5
    },
    "borderWidth": {
      "type": "number",
      "default": 0
    },
    "borderColor": {
      "type": "string",
      "default": null
    }
  },
  "supports": {
    "anchor": true,
    "align": ["full", "wide"],
    "html": false
  },
  // icon,
  // transforms,
  // deprecated,
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/section/save.js":
/*!*****************************!*\
  !*** ./src/section/save.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save2; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);


/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */

function save2() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("dv", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"].Content, null));
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/hooks":
/*!****************************************!*\
  !*** external {"this":["wp","hooks"]} ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["hooks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map