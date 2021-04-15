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
/******/ 		1: 0
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
/******/ 	deferredModules.push([146,2]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(153);
module.exports = __webpack_require__(152);


/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 6,
	"./af.js": 6,
	"./ar": 7,
	"./ar-dz": 8,
	"./ar-dz.js": 8,
	"./ar-kw": 9,
	"./ar-kw.js": 9,
	"./ar-ly": 10,
	"./ar-ly.js": 10,
	"./ar-ma": 11,
	"./ar-ma.js": 11,
	"./ar-sa": 12,
	"./ar-sa.js": 12,
	"./ar-tn": 13,
	"./ar-tn.js": 13,
	"./ar.js": 7,
	"./az": 14,
	"./az.js": 14,
	"./be": 15,
	"./be.js": 15,
	"./bg": 16,
	"./bg.js": 16,
	"./bm": 17,
	"./bm.js": 17,
	"./bn": 18,
	"./bn-bd": 19,
	"./bn-bd.js": 19,
	"./bn.js": 18,
	"./bo": 20,
	"./bo.js": 20,
	"./br": 21,
	"./br.js": 21,
	"./bs": 22,
	"./bs.js": 22,
	"./ca": 23,
	"./ca.js": 23,
	"./cs": 24,
	"./cs.js": 24,
	"./cv": 25,
	"./cv.js": 25,
	"./cy": 26,
	"./cy.js": 26,
	"./da": 27,
	"./da.js": 27,
	"./de": 28,
	"./de-at": 29,
	"./de-at.js": 29,
	"./de-ch": 30,
	"./de-ch.js": 30,
	"./de.js": 28,
	"./dv": 31,
	"./dv.js": 31,
	"./el": 32,
	"./el.js": 32,
	"./en-au": 33,
	"./en-au.js": 33,
	"./en-ca": 34,
	"./en-ca.js": 34,
	"./en-gb": 35,
	"./en-gb.js": 35,
	"./en-ie": 36,
	"./en-ie.js": 36,
	"./en-il": 37,
	"./en-il.js": 37,
	"./en-in": 38,
	"./en-in.js": 38,
	"./en-nz": 39,
	"./en-nz.js": 39,
	"./en-sg": 40,
	"./en-sg.js": 40,
	"./eo": 41,
	"./eo.js": 41,
	"./es": 42,
	"./es-do": 43,
	"./es-do.js": 43,
	"./es-mx": 44,
	"./es-mx.js": 44,
	"./es-us": 45,
	"./es-us.js": 45,
	"./es.js": 42,
	"./et": 46,
	"./et.js": 46,
	"./eu": 47,
	"./eu.js": 47,
	"./fa": 48,
	"./fa.js": 48,
	"./fi": 49,
	"./fi.js": 49,
	"./fil": 50,
	"./fil.js": 50,
	"./fo": 51,
	"./fo.js": 51,
	"./fr": 52,
	"./fr-ca": 53,
	"./fr-ca.js": 53,
	"./fr-ch": 54,
	"./fr-ch.js": 54,
	"./fr.js": 52,
	"./fy": 55,
	"./fy.js": 55,
	"./ga": 56,
	"./ga.js": 56,
	"./gd": 57,
	"./gd.js": 57,
	"./gl": 58,
	"./gl.js": 58,
	"./gom-deva": 59,
	"./gom-deva.js": 59,
	"./gom-latn": 60,
	"./gom-latn.js": 60,
	"./gu": 61,
	"./gu.js": 61,
	"./he": 62,
	"./he.js": 62,
	"./hi": 63,
	"./hi.js": 63,
	"./hr": 64,
	"./hr.js": 64,
	"./hu": 65,
	"./hu.js": 65,
	"./hy-am": 66,
	"./hy-am.js": 66,
	"./id": 67,
	"./id.js": 67,
	"./is": 68,
	"./is.js": 68,
	"./it": 69,
	"./it-ch": 70,
	"./it-ch.js": 70,
	"./it.js": 69,
	"./ja": 71,
	"./ja.js": 71,
	"./jv": 72,
	"./jv.js": 72,
	"./ka": 73,
	"./ka.js": 73,
	"./kk": 74,
	"./kk.js": 74,
	"./km": 75,
	"./km.js": 75,
	"./kn": 76,
	"./kn.js": 76,
	"./ko": 77,
	"./ko.js": 77,
	"./ku": 78,
	"./ku.js": 78,
	"./ky": 79,
	"./ky.js": 79,
	"./lb": 80,
	"./lb.js": 80,
	"./lo": 81,
	"./lo.js": 81,
	"./lt": 82,
	"./lt.js": 82,
	"./lv": 83,
	"./lv.js": 83,
	"./me": 84,
	"./me.js": 84,
	"./mi": 85,
	"./mi.js": 85,
	"./mk": 86,
	"./mk.js": 86,
	"./ml": 87,
	"./ml.js": 87,
	"./mn": 88,
	"./mn.js": 88,
	"./mr": 89,
	"./mr.js": 89,
	"./ms": 90,
	"./ms-my": 91,
	"./ms-my.js": 91,
	"./ms.js": 90,
	"./mt": 92,
	"./mt.js": 92,
	"./my": 93,
	"./my.js": 93,
	"./nb": 94,
	"./nb.js": 94,
	"./ne": 95,
	"./ne.js": 95,
	"./nl": 96,
	"./nl-be": 97,
	"./nl-be.js": 97,
	"./nl.js": 96,
	"./nn": 98,
	"./nn.js": 98,
	"./oc-lnc": 99,
	"./oc-lnc.js": 99,
	"./pa-in": 100,
	"./pa-in.js": 100,
	"./pl": 101,
	"./pl.js": 101,
	"./pt": 102,
	"./pt-br": 103,
	"./pt-br.js": 103,
	"./pt.js": 102,
	"./ro": 104,
	"./ro.js": 104,
	"./ru": 105,
	"./ru.js": 105,
	"./sd": 106,
	"./sd.js": 106,
	"./se": 107,
	"./se.js": 107,
	"./si": 108,
	"./si.js": 108,
	"./sk": 109,
	"./sk.js": 109,
	"./sl": 110,
	"./sl.js": 110,
	"./sq": 111,
	"./sq.js": 111,
	"./sr": 112,
	"./sr-cyrl": 113,
	"./sr-cyrl.js": 113,
	"./sr.js": 112,
	"./ss": 114,
	"./ss.js": 114,
	"./sv": 115,
	"./sv.js": 115,
	"./sw": 116,
	"./sw.js": 116,
	"./ta": 117,
	"./ta.js": 117,
	"./te": 118,
	"./te.js": 118,
	"./tet": 119,
	"./tet.js": 119,
	"./tg": 120,
	"./tg.js": 120,
	"./th": 121,
	"./th.js": 121,
	"./tk": 122,
	"./tk.js": 122,
	"./tl-ph": 123,
	"./tl-ph.js": 123,
	"./tlh": 124,
	"./tlh.js": 124,
	"./tr": 125,
	"./tr.js": 125,
	"./tzl": 126,
	"./tzl.js": 126,
	"./tzm": 127,
	"./tzm-latn": 128,
	"./tzm-latn.js": 128,
	"./tzm.js": 127,
	"./ug-cn": 129,
	"./ug-cn.js": 129,
	"./uk": 130,
	"./uk.js": 130,
	"./ur": 131,
	"./ur.js": 131,
	"./uz": 132,
	"./uz-latn": 133,
	"./uz-latn.js": 133,
	"./uz.js": 132,
	"./vi": 134,
	"./vi.js": 134,
	"./x-pseudo": 135,
	"./x-pseudo.js": 135,
	"./yo": 136,
	"./yo.js": 136,
	"./zh-cn": 137,
	"./zh-cn.js": 137,
	"./zh-hk": 138,
	"./zh-hk.js": 138,
	"./zh-mo": 139,
	"./zh-mo.js": 139,
	"./zh-tw": 140,
	"./zh-tw.js": 140
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 149;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {



/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/js/bootstrap.esm.js + 54 modules
var bootstrap_esm = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/dropzone/dist/dropzone.js
var dropzone = __webpack_require__(2);
var dropzone_default = /*#__PURE__*/__webpack_require__.n(dropzone);

// CONCATENATED MODULE: ./src/js/dropzone.js
//
// dropzone.js
// Theme module
//



dropzone_default.a.autoDiscover = false;
dropzone_default.a.thumbnailWidth = null;
dropzone_default.a.thumbnailHeight = null;

const toggles = document.querySelectorAll('[data-dropzone]');

toggles.forEach(toggle => {
  let currentFile = undefined;

  const elementOptions = toggle.dataset.dropzone ? JSON.parse(toggle.dataset.dropzone) : {};

  const defaultOptions = {
    previewsContainer: toggle.querySelector('.dz-preview'),
    previewTemplate: toggle.querySelector('.dz-preview').innerHTML,
    init: function() {
      this.on('addedfile', function(file) {
        const maxFiles = elementOptions.maxFiles;

        if (maxFiles == 1 && currentFile) {
          this.removeFile(currentFile);
        }

        currentFile = file;
      });
    }
  }

  const options = {
    ...elementOptions,
    ...defaultOptions
  };

  // Clear preview
  toggle.querySelector('.dz-preview').innerHTML = '';

  // Init dropzone
  new dropzone_default.a(toggle, options);
});

// EXTERNAL MODULE: ./node_modules/inputmask/index.js
var inputmask = __webpack_require__(142);
var inputmask_default = /*#__PURE__*/__webpack_require__.n(inputmask);

// CONCATENATED MODULE: ./src/js/inputmask.js
//
// inputmask.js
// Theme module
//



const inputmask_toggles = document.querySelectorAll('[data-inputmask]');

const inputmask_options = {
    rightAlign: false,
};

inputmask_default()(inputmask_options).mask(inputmask_toggles);

// EXTERNAL MODULE: ./node_modules/chart.js/dist/Chart.js
var dist_Chart = __webpack_require__(1);
var Chart_default = /*#__PURE__*/__webpack_require__.n(dist_Chart);

// EXTERNAL MODULE: ./src/vendor/chart.js/Chart.extension.js
var Chart_extension = __webpack_require__(141);

// CONCATENATED MODULE: ./src/js/chart.js
//
// chart.js
// Theme module
//




const colors = {
  gray: {
    300: getCSSVariableValue('--bs-chart-gray-300'),
    600: getCSSVariableValue('--bs-chart-gray-600'),
    700: getCSSVariableValue('--bs-chart-gray-700'),
    800: getCSSVariableValue('--bs-chart-gray-800'),
    900: getCSSVariableValue('--bs-chart-gray-900'),
  },
  primary: {
    100: getCSSVariableValue('--bs-chart-primary-100'),
    300: getCSSVariableValue('--bs-chart-primary-300'),
    700: '#2C7BE5', // hardcoded because bar charts won't calculate proper hover background if set via CSS variables
  },
  black: getCSSVariableValue('--bs-dark'),
  white: getCSSVariableValue('--bs-white'),
  transparent: 'transparent',
};

const fonts = {
  base: 'Roboto'
};

const chart_toggles = document.querySelectorAll('[data-toggle="chart"]');
const legends = document.querySelectorAll('[data-toggle="legend"]');

//
// Functions
//

function getCSSVariableValue(variable) {
  return getComputedStyle(document.documentElement).getPropertyValue(variable);
}

function globalOptions() {

  // Global
  Chart_default.a.defaults.global.responsive = true;
  Chart_default.a.defaults.global.maintainAspectRatio = false;

  // // Default
  // Chart.defaults.global.defaultColor = getCSSVariableValue('--bs-chart-default-color');
  // Chart.defaults.global.defaultFontColor = getCSSVariableValue('--bs-chart-default-font-color');
  // Chart.defaults.global.defaultFontFamily = fonts.base;
  // Chart.defaults.global.defaultFontSize = 13;

  // // Layout
  // Chart.defaults.global.layout.padding = 0;

  // // Legend
  // Chart.defaults.global.legend.display = false;
  // Chart.defaults.global.legend.position = 'bottom';
  // Chart.defaults.global.legend.labels.usePointStyle = true;
  // Chart.defaults.global.legend.labels.padding = 16;

  // Point
  Chart_default.a.defaults.global.elements.point.radius = 5;
  Chart_default.a.defaults.global.elements.point.backgroundColor = colors.white;

  // Line
  Chart_default.a.defaults.global.elements.line.tension = .4;
  Chart_default.a.defaults.global.elements.line.borderWidth = 3;
  Chart_default.a.defaults.global.elements.line.borderColor = colors.primary[700];
  Chart_default.a.defaults.global.elements.line.backgroundColor = colors.transparent;
  Chart_default.a.defaults.global.elements.line.borderCapStyle = 'rounded';

  // Rectangle
  Chart_default.a.defaults.global.elements.rectangle.backgroundColor = colors.primary[700];
  Chart_default.a.defaults.global.elements.rectangle.borderColor = colors.primary[700];
  Chart_default.a.defaults.global.elements.rectangle.maxBarThickness = 18;

  // // Arc
  // Chart.defaults.global.elements.arc.backgroundColor = colors.primary[700];
  // Chart.defaults.global.elements.arc.borderColor = getCSSVariableValue('--bs-chart-arc-border-color');
  // Chart.defaults.global.elements.arc.borderWidth = 4;
  // Chart.defaults.global.elements.arc.hoverBorderColor = getCSSVariableValue('--bs-chart-arc-hover-border-color');

  // Tooltips
  Chart_default.a.defaults.global.tooltips.enabled = false;
  Chart_default.a.defaults.global.tooltips.mode = 'index';
  Chart_default.a.defaults.global.tooltips.intersect = false;
  Chart_default.a.defaults.global.tooltips.custom = function (model) {
    
    let tooltip = document.getElementById('chart-tooltip');
    const chartType = this._chart.config.type;

    // Create tooltip if doesn't exist
    if (!tooltip) {
      tooltip = document.createElement('div');

      tooltip.setAttribute('id', 'chart-tooltip');
      tooltip.setAttribute('role', 'tooltip');
      tooltip.classList.add('popover');
      tooltip.classList.add('bs-popover-top');

      document.body.appendChild(tooltip);
    }

    // Hide tooltip if not visible
    if (model.opacity === 0) {
      tooltip.style.visibility = 'hidden';

      return;
    }

    if (model.body) {

      const title = model.title || [];
      const body = model.body.map(function (body) {
        return body.lines;
      });

      // Add arrow
      let content = '<div class="popover-arrow"></div>';

      // Add title
      title.forEach(function (title) {
        content += '<h3 class="popover-header text-center">' + title + '</h3>';
      });

      // Add content
      body.forEach(function (body, i) {
        const colors = model.labelColors[i];

        console.log(model);

        const indicatorColor = (chartType === 'line' && colors.borderColor !== 'rgba(0,0,0,0)') ? colors.borderColor : colors.indicator;
        const indicator = '<span class="popover-body-indicator" style="background-color: ' + indicatorColor + '"></span>';
        const justifyContent = (body.length > 1) ? 'justify-content-left' : 'justify-content-center';

        content += '<div class="popover-body d-flex align-items-center ' + justifyContent + '">' + indicator + body + '</div>';
      });

      tooltip.innerHTML = content;
    }

    const canvas = this._chart.canvas;
    const canvasRect = canvas.getBoundingClientRect();

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;

    const canvasTop = canvasRect.top + scrollTop;
    const canvasLeft = canvasRect.left + scrollLeft;

    const tooltipWidth = tooltip.offsetWidth;
    const tooltipHeight = tooltip.offsetHeight;

    const top = canvasTop + model.caretY - tooltipHeight - 16;
    const left = canvasLeft + model.caretX - tooltipWidth / 2;

    tooltip.style.top = top + 'px';
    tooltip.style.left = left + 'px';
    tooltip.style.visibility = 'visible';
  };

  Chart_default.a.defaults.global.tooltips.callbacks.label = function (item, data) {
    let content = '';

    const value = item.yLabel;
    const dataset = data.datasets[item.datasetIndex]
    const label = dataset.label;

    const yAxisID = dataset.yAxisID ? dataset.yAxisID : 0;
    const yAxes = this._chart.options.scales.yAxes;
    const yAxis = yAxes[0];

    if (yAxisID) {
      const yAxis = yAxes.filter(function (item) {
        return item.id == yAxisID;
      })[0];
    }

    const callback = yAxis.ticks.callback;

    const activeDatasets = data.datasets.filter(function (dataset) {
      return !dataset.hidden;
    });

    if (activeDatasets.length > 1) {
      content = '<span class="popover-body-label mr-auto">' + label + '</span>';
    }

    content += '<span class="popover-body-value">' + callback(value) + '</span>';

    return content;
  };

  // Doughnut

  // yAxes
  Chart_default.a.scaleService.updateScaleDefaults('linear', {
    gridLines: {
      drawBorder: false,
      drawTicks: false,
      drawOnChartArea: true,
    },
    ticks: {
      beginAtZero: true,
      padding: 10,
      stepSize: 10
    }
  });

  // xAxes
  Chart_default.a.scaleService.updateScaleDefaults('category', {
    gridLines: {
      drawBorder: false,
      drawOnChartArea: false,
      drawTicks: false
    },
    ticks: {
      padding: 20
    }
  });
}

function getChartInstance(chart) {
  let chartInstance = undefined;

  Chart_default.a.helpers.each(Chart_default.a.instances, function (instance) {
    if (chart == instance.chart.canvas) {
      chartInstance = instance;
    }
  });

  return chartInstance;
}

function toggleDataset(toggle) {
  const id = toggle.dataset.target;
  const action = toggle.dataset.action;
  const index = parseInt(toggle.dataset.dataset);

  const chart = document.querySelector(id);
  const chartInstance = getChartInstance(chart);

  // Action: Toggle
  if (action === 'toggle') {
    const datasets = chartInstance.data.datasets;

    const activeDataset = datasets.filter(function (dataset) {
      return !dataset.hidden;
    })[0];

    let backupDataset = datasets.filter(function (dataset) {
      return dataset.order === 1000;
    })[0];

    // Backup active dataset
    if (!backupDataset) {
      backupDataset = {};

      for (const prop in activeDataset) {
        if (prop !== '_meta') {
          backupDataset[prop] = activeDataset[prop];
        }
      }

      backupDataset.order = 1000;
      backupDataset.hidden = true;

      // Push to the dataset list
      datasets.push(backupDataset);
    }

    // Toggle dataset
    const sourceDataset = (datasets[index] === activeDataset) ? backupDataset : datasets[index];

    for (const prop in activeDataset) {
      if (prop !== '_meta') {
        activeDataset[prop] = sourceDataset[prop];
      }
    }

    // Update chart
    chartInstance.update();
  }

  // Action: Add
  if (action === 'add') {
    const dataset = chartInstance.data.datasets[index];
    const isHidden = dataset.hidden;

    // Toggle dataset
    dataset.hidden = !isHidden;
  }

  // Update chart
  chartInstance.update();
}

function toggleLegend(legend) {
  const chart = getChartInstance(legend);
  const content = chart.generateLegend();

  const id = legend.dataset.target;
  const container = document.querySelector(id);

  container.innerHTML = content;
}

//
// Events
//

// Global options
globalOptions();

// Toggle dataset
chart_toggles.forEach(function (toggle) {
  const event = toggle.dataset.trigger;

  toggle.addEventListener(event, function () {
    toggleDataset(toggle);
  });
});

// Toggle legend
document.addEventListener('DOMContentLoaded', function () {
  legends.forEach(function (legend) {
    toggleLegend(legend);
  });
});

// EXTERNAL MODULE: ./node_modules/@dmuy/datepicker/dist/duDatepicker.js
var duDatepicker = __webpack_require__(3);
var duDatepicker_default = /*#__PURE__*/__webpack_require__.n(duDatepicker);

// EXTERNAL MODULE: ./node_modules/@yaireo/tagify/dist/tagify.min.js
var tagify_min = __webpack_require__(5);
var tagify_min_default = /*#__PURE__*/__webpack_require__.n(tagify_min);

// EXTERNAL MODULE: ./node_modules/sweetalert2/dist/sweetalert2.all.js
var sweetalert2_all = __webpack_require__(143);
var sweetalert2_all_default = /*#__PURE__*/__webpack_require__.n(sweetalert2_all);

// EXTERNAL MODULE: ./src/vendor/vanilla-notify/vanilla-notify.js
var vanilla_notify = __webpack_require__(150);

// EXTERNAL MODULE: ./src/js/pies.js
var pies = __webpack_require__(151);

// CONCATENATED MODULE: ./src/js/user.js
//
// user.js
// Use this to write your custom JS
//

// import 'bootstrap';












// const Swal = require("sweetalert2");

//Notification Global Settings;
window.Swal = sweetalert2_all_default.a;

jQuery(document).ready(function ($) {

	duDatepicker_default()(document.querySelector('.searchbar.with-date::before'));

	$("#create-new-invoice").click(function (e) {
		e.preventDefault();
		$("body").toggleClass("sidebar-left-visible sidebar-right-visible");
	});

	$("[data-new-invoice]").click(function (e) {
		e.preventDefault();
		$("body").toggleClass("sidebar-left-visible sidebar-right-visible");
	});

	$("[data-new-customer]").click(function (e) {
		e.preventDefault();
		$("body").toggleClass("sidebar-left-visible");
	});

	$("[data-new-item]").click(function (e) {
		e.preventDefault();
		$("body").toggleClass("sidebar-left-visible");
	});

	$("input[type=radio][name=invoiceTheme]").change(function () {
		var color = this.value;
		$(".colorRadio.active").removeClass("active");
		$(this).parent().addClass("active");

		$("head [data-custom-theme]").remove();

		$("head").append(
			'<style type="text/css" data-custom-theme>*{--accent-color: ' +
				color +
				";}</style>"
		);
	});

	$("input[name=invoiceThemeCustom]").change(function () {
		$(".themecustom").css({
			background: this.value,
		});

		$(".colorRadio.active").removeClass("active");
		$(this).parent().addClass("active");

		$("head [data-custom-theme]").remove();

		$("head").append(
			'<style type="text/css" data-custom-theme>*{--accent-color: ' +
				this.value +
				";}</style>"
		);
	});

	/* Hide Editor Sidebar */
	var editorToggle = $(".toggle-editor");
	var previewSidebar = $("#preview-sidebar-container");
	var editorSidebar = $(".editor-container");
	var rejectList = [
		"preview-editor-tab",
		"save-editor-tab",
		"print-editor-tab",
	];

	if (editorToggle) {
		editorToggle.click(function (e) {
			$("body").addClass("preview");
			editorSidebar.addClass("d-none");
			previewSidebar.removeClass("d-none");
		});
	}

	var triggerTabList = [].slice.call(document.querySelectorAll("#editNav a"));
	triggerTabList.forEach(function (triggerEl) {
		var triggerId = triggerEl.id;

		if (rejectList.indexOf(triggerId) > -1) {
			//Do nothing
		} else {
			var tabTrigger = new bootstrap_esm["a" /* Tab */](triggerEl);

			triggerEl.addEventListener("click", function (event) {
				event.preventDefault();
				tabTrigger.show();

				$(".sidebar-right").animate(
					{
						scrollTop: 0, //#DIV_ID is an example. Use the id of your destination on the page
					},
					"slow"
				);
			});
		}
	});

	/* Preview Sidebar Click Event */
	previewSidebar.find("li").click(function (e) {
		e.preventDefault();
		var tab = $(this).data("cap-tab");

		console.log(tab);

		if (rejectList.indexOf(tab) > -1) {
			//Do nothing
			// console.log("Handle Manually");
		} else {
			var triggerEl = document.querySelector("#" + tab);

			bootstrap_esm["a" /* Tab */].getInstance(triggerEl).show();

			$("body").removeClass("preview");
			editorSidebar.removeClass("d-none");
			previewSidebar.addClass("d-none");
		}
	});

	/* Check Preview Payment Settings */
	if ($(".estimate-preview")) {
		$("input[name=showPayment]").change(function () {
			var showPayment = this.value; //yes or no
			console.log(showPayment === "yes");

			if (showPayment === "yes") {
				console.log("Hitting yes");
				// $('.estimate-preview').removeClass("preview-hide");
				$(".estimate-preview").addClass("preview-show");
			}
		});
	}

	/* Date Picker */
	duDatepicker_default()("[data-date-picker]", {
		format: "mm/dd/yyyy",
		theme: "cap",
	});

	$('[data-sales-set^="sales-"]').click(function (e) {
		var currentPage = $(this).data("sales-set");

		/* Handle left sidebar */
		$(this).parent().find(".active").removeClass("active");
		$(this).addClass("active");

		/* Handle main content */
		$(".sales-pages.active").removeClass("active");
		$("[data-" + currentPage + "]").addClass("active");

		/* Handle Right sidebar */
		$(".sidebar-pan.active").removeClass("active");
		$("[data-sidebar-" + currentPage + "]").addClass("active");

		// data-sidebar-sales-set-logo
		console.log($(this).data("sales-set"));
	});
});

// Second whitelist, which is shown only when starting to type "#".
// Thiw whitelist is the most simple one possible.
var tagList = [
	"Your full name",
	"Your first name",
	"Your business name",
	"Client business name",
	"Client contact name",
	"Invoice number",
	"Due date",
	"Month",
	"Month and year",
	"Invoice amount",
];

// initialize Tagify
var subjectList = document.querySelectorAll(".template-subject");
var bodyList = document.querySelectorAll(".template-body");

[].forEach.call(subjectList, function (subject) {
	var tagify = new tagify_min_default.a(subject, {
		// mixTagsInterpolator: ["{{", "}}"],
		mode: "mix",
		pattern: /@|#/,
		tagTextProp: "text",
		// Array for initial interpolation, which allows only these tags to be used
		whitelist: tagList.map(function (item) {
			return typeof item == "string"
				? {
						value: item,
				  }
				: item;
		}),

		dropdown: {
			enabled: 1,
			position: "text",
			mapValueTo: "text",
			highlightFirst: true,
		},

		callbacks: {
			// add: console.log, // callback when adding a tag
			// remove: console.log // callback when removing a tag
		},
	});
});

[].forEach.call(bodyList, function (body) {
	var tagify = new tagify_min_default.a(body, {
		// mixTagsInterpolator: ["{{", "}}"],
		mode: "mix",
		pattern: /@|#/,
		tagTextProp: "text",
		// Array for initial interpolation, which allows only these tags to be used
		whitelist: tagList.map(function (item) {
			return typeof item == "string"
				? {
						value: item,
				  }
				: item;
		}),

		dropdown: {
			enabled: 1,
			position: "text",
			mapValueTo: "text",
			highlightFirst: true,
		},

		callbacks: {
			// add: console.log, // callback when adding a tag
			// remove: console.log // callback when removing a tag
		},
	});
});

function createPie(container) {
	var myPie = document.querySelector("#" + container);

	if (myPie != null) {
		var data = JSON.parse(myPie.dataset.piedata);
		var hasLabel = myPie.dataset.showlabel;

		var pieConfig = {
			header: {
				title: {
					text: "",
				},
				location: "pie-center",
			},
			size: {
				pieInnerRadius: "70%",
				pieOuterRadius: "100%",
			},
			data: {
				sortOrder: "label-asc",
				content: data,
			},
		};

		if (hasLabel == "false") {
			pieConfig.labels = {
				outer: {
					format: "none",
					pieDistance: 20,
				},
				inner: {
					format: "none",
				},
			};
		} else {
			pieConfig.size = {
				pieInnerRadius: "70%",
				pieOuterRadius: "70%",
			};

			pieConfig.labels = {
				outer: {
					format: "label-percentage2",
					pieDistance: 20,
				},
				inner: {
					format: "none",
				},
				mainLabel: {
					color: "#6f6f6f",
					font: "Roboto",
					fontSize: 16,
				},
				percentage: {
					color: "#6f6f6f",
					font: "Roboto",
					fontSize: 16,
					decimalPlaces: 0,
				},
				value: {
					color: "#6f6f6f",
					font: "Roboto",
					fontSize: 16,
				},
				lines: {
					enabled: true,
				},
				truncation: {
					enabled: true,
				},
			};
		}

		console.log(pieConfig);

		setTimeout(() => {
			new d3pie(container, pieConfig);
		}, 50);
	}
}

createPie("report-pie", true);

new Chart("feedChart", {
	type: "bar",
	options: {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			yAxes: [
				{
					ticks: {
						padding: 10,
						maxTicksLimit: 4,
						stepSize: 100,
						callback: function (value) {
							return "€" + value;
						},
					},
				},
			],
		},
		legend: {
			display: false,
		},
	},
	data: {
		labels: [
			" ",
			" ",
			" ",
			" ",
			" ",
			"SEP",
			"OCT",
			"NOV",
			"DEC",
			"JAN",
			"FEB",
			"MAR",
		],
		datasets: [
			{
				label: "Money In",
				data: [0, 0, 0, 0, 0, 100, 180, 260, 280, 260, 200, 120],
				backgroundColor: "#624096",
				fill: true,
			},
			{
				label: "Money Out",
				data: [0, 0, 0, 0, 0, 90, 120, 200, 230, 220, 140, 200],
				backgroundColor: "#CCAEF7",
				fill: true,
			},
		],
	},
});

var myToolTip = {
	enabled: false,

	custom: function (tooltipModel) {
		// Tooltip Element
		var tooltipEl = document.getElementById("chartjs-tooltip-inline");

		// Create element on first render
		if (!tooltipEl) {
			tooltipEl = document.createElement("div");
			tooltipEl.id = "chartjs-tooltip-inline";
			tooltipEl.innerHTML =
				'<div class="caret"></div><div class="d-flex legend-container"></div>';
			document.body.appendChild(tooltipEl);
		}

		// Hide if no tooltip
		if (tooltipModel.opacity === 0) {
			tooltipEl.style.opacity = 0;
			return;
		}

		//Set caret Position
		tooltipEl.classList.remove("above", "below", "no-transform");
		if (tooltipModel.yAlign) {
			tooltipEl.classList.add(tooltipModel.yAlign);
		} else {
			tooltipEl.classList.add("no-transform");
		}

		function getBody(bodyItem) {
			return bodyItem.lines;
		}

		// Set Text
		if (tooltipModel.body) {
			var bodyLines = tooltipModel.body.map(getBody);
			var innerHtml = "";
			bodyLines.forEach(function (body, i) {
				console.log(body);
				var colors = tooltipModel.labelColors[i];
				var style = "background:" + colors.backgroundColor;
				style += "; border-color:" + colors.borderColor;
				style += "; border-width: 2px";
				var span = '<span style="' + style + '"></span>';
				innerHtml += '<div class="legend">' + body + "</div>";
			});

			var tableRoot = tooltipEl.querySelector(".legend-container");
			tableRoot.innerHTML = innerHtml;
		}

		// `this` will be the overall tooltip
		var position = this._chart.canvas.getBoundingClientRect();

		// Display, position, and set styles for font
		var scrollTop =
			window.pageYOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop ||
			0;
		var scrollLeft =
			window.pageXOffset ||
			document.documentElement.scrollLeft ||
			document.body.scrollLeft ||
			0;

		var canvasTop = position.top + scrollTop;
		var canvasLeft = position.left + scrollLeft;

		var tooltipWidth = tooltipEl.offsetWidth;
		var tooltipHeight = tooltipEl.offsetHeight;

		var top = canvasTop + tooltipModel.caretY - tooltipHeight - 16;
		var left = canvasLeft + tooltipModel.caretX - tooltipWidth / 2;

		tooltipEl.style.opacity = 1;
		tooltipEl.style.position = "absolute";

		tooltipEl.style.top = top + "px";
		tooltipEl.style.left = left + "px";

		tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
		tooltipEl.style.fontSize = tooltipModel.bodyFontSize + "px";
		tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
		tooltipEl.style.padding =
			tooltipModel.yPadding + "px " + tooltipModel.xPadding + "px";
		tooltipEl.style.pointerEvents = "none";
	},
};

var homeSparkLine = document.getElementById("dashSalesLine").getContext("2d");

var gradient = homeSparkLine.createLinearGradient(0, 0, 0, 450);
gradient.addColorStop(0, "rgba(173, 158,196, 1)");
gradient.addColorStop(0.25, "rgba(209, 230, 250, 0)");

new Chart(homeSparkLine, {
	type: "line",
	data: {
		labels: [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		],
		datasets: [
			{
				data: [
					435,
					321,
					532,
					801,
					1231,
					1098,
					732,
					321,
					451,
					482,
					513,
					397,
				],
				backgroundColor: gradient,
			},
		],
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
			display: false,
		},
		elements: {
			line: {
				borderColor: "#624096",
				borderWidth: 1,
			},
			point: {
				radius: 0,
			},
		},
		tooltips: {
			enabled: false,
		},
		scales: {
			yAxes: [
				{
					display: false,
				},
			],
			xAxes: [
				{
					display: false,
				},
			],
		},
	},
});

new Chart("dashMainLine", {
	type: "line",
	options: {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			yAxes: [
				{
					gridLines: {
						drawBorder: false,
						drawTicks: false,
					},
					ticks: {
						display: false,
						padding: 0,
						maxTicksLimit: 4,
						callback: function (value) {
							return value;
						},
					},
				},
			],
		},
		legend: {
			display: false,
		},
		tooltips: myToolTip,
	},
	data: {
		labels: ["1Q 2019", "2Q 2019", "3Q 2019", "4Q 2019", "1Q 2020"],
		datasets: [
			{
				label: "",
				data: [10, 5, 15, 10, 15],
				borderColor: "rgba(0,0,0,0)",
				backgroundColor: "rgba(0,0,0,0)",
				fill: false,
				indicator: "red",
			},
			{
				label: "",
				data: [10, 5, 15, 20, 15],
				borderColor: "rgba(0,0,0,0)",
				backgroundColor: "rgba(0,0,0,0)",
				fill: false,
				indicator: "red",
			},
			{
				label: "",
				data: [10, 5, 25, 10, 15],
				borderColor: "#624096",
				// backgroundColor: '',
				fill: true,
				indicator: "red",
			},
		],
	},
});

// CONCATENATED MODULE: ./src/js/theme.js
// Vendor


// Theme
// import './autosize';
// import './checklist';
// import './choices';
// import './dropdown';

// import './flatpickr';
// import './highlight';

// import './kanban';
// import './list';
// import './map';
// import './navbar-collapse';
// import './popover';
// import './tooltip';
// import './quill';
// import './wizard';





// User




/***/ })

/******/ });
//# sourceMappingURL=theme.bundle.js.map