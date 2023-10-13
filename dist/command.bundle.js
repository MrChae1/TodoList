"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["command"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.special-btn {
  background-color: red;
  color: black;
  transition: ease-in-out 1s;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  max-height: 100vh;
  max-width: 100vw;
  height: 100vh;
  width: 100vw;
}

main {
  display: grid;
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 10px;
  grid-template: 0.5fr 0.5fr 5fr 0.5fr/2fr 5fr;
  border: none;
  gap: 0.5rem;
}

header {
  display: flex;
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 10px;
  justify-content: center;
  grid-area: 1/1/2/3;
}
header svg {
  height: 34px;
  width: 43px;
}

nav {
  display: flex;
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 10px;
  grid-area: 2/1/3/3;
  justify-content: space-evenly;
  gap: 1rem;
}
nav button {
  display: inline;
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 10px;
  padding: 0.5rem 2rem;
  font-weight: bold;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

aside {
  display: flex;
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 10px;
  grid-area: 3/1/4/3;
  position: relative;
  padding: 0;
}
aside main {
  display: flex;
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 10px;
  border: none;
}
aside main section:nth-child(1) {
  height: 100%;
  width: 100%;
}
aside main section:nth-child(2) {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(50px, 1fr));
}
aside main section:nth-child(2) .tasks-div {
  display: block;
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 10px;
  padding: 0;
  border-radius: 0;
  background-color: green;
}
aside main section:nth-child(2) .tasks-div .tasks {
  height: 100%;
  width: 100%;
  margin-left: 2%;
  width: 98%;
  display: grid;
  grid-template-columns: 0.2fr 5fr 1fr 1.5fr repeat(2, 0.5fr);
  padding: 0.5rem;
  background-color: white;
  align-content: center;
  gap: 0.5rem;
  text-align: justify;
}
aside main section:nth-child(2) .tasks-div input {
  height: 100%;
  width: 100%;
  grid-column: 1/2;
}
aside main section:nth-child(2) .tasks-div label {
  height: 100%;
  width: 100%;
  grid-column: 2/3;
  padding-top: 8px;
}
aside main section:nth-child(2) .tasks-div button {
  display: block;
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 10px;
  grid-column: 3/4;
  font-weight: bold;
  background-color: transparent;
  cursor: pointer;
}
aside main section:nth-child(2) .tasks-div p {
  height: 100%;
  width: 100%;
  grid-column: 4/5;
  padding-top: 8px;
  text-align: center;
}
aside main section:nth-child(2) .tasks-div .edit {
  height: 100%;
  width: 100%;
  grid-column: 5/6;
}
aside main section:nth-child(2) .tasks-div .delete {
  height: 100%;
  width: 100%;
  grid-column: 6/7;
}
aside main section:nth-child(3) {
  height: 100%;
  width: 100%;
}
aside main .asideSVG {
  display: none;
  position: absolute;
  bottom: 10px;
  right: 10px;
  height: 50px;
  width: 50px;
  cursor: pointer;
}
aside main .asideSVG:hover {
  fill: blue;
}

footer {
  display: flex;
  height: 100%;
  width: 100%;
  padding: 0.5rem;
  border: 2px solid black;
  border-radius: 10px;
  grid-area: 4/1/5/3;
  justify-content: center;
}`, "",{"version":3,"sources":["webpack://./src/style/_variables.scss","webpack://./src/style/style.scss"],"names":[],"mappings":"AAYA;EACI,qBAAA;EACA,YAAA;EACA,0BAAA;ACXJ;;AAFA;EACI,sBAAA;EACA,UAAA;EACA,SAAA;AAKJ;;AAHA;EACI,yCAAA;EACA,iBAAA;EACA,gBAAA;EACA,aAAA;EACA,YAAA;AAMJ;;AAJA;EDbI,aCcsB;EDbtB,YAAA;EACA,WAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;ECUA,4CAAA;EACA,YAAA;EACA,WAAA;AAYJ;;AAVA;EDnBI,aCoBsB;EDnBtB,YAAA;EACA,WAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;ECgBA,uBAAA;EACA,kBAAA;AAkBJ;AAjBI;EACI,YAAA;EACA,WAAA;AAmBR;;AAhBA;ED5BI,aC6BsB;ED5BtB,YAAA;EACA,WAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;ECyBA,kBAAA;EACA,6BAAA;EACA,SAAA;AAwBJ;AAvBI;EDjCA,eCkC0B;EDjC1B,YAAA;EACA,WAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EC8BI,oBAAA;EACA,iBAAA;EACA,YAAA;EACA,6BAAA;EACA,eAAA;AA8BR;;AA3BA;ED1CI,aC2CsB;ED1CtB,YAAA;EACA,WAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;ECuCA,kBAAA;EACA,kBAAA;EACA,UAAA;AAmCJ;AAjCI;EDhDA,aCiD0B;EDhD1B,YAAA;EACA,WAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EC6CI,YAAA;AAwCR;AAvCQ;ED3CJ,YAAA;EACA,WAAA;ACqFJ;AAxCQ;ED9CJ,YAAA;EACA,WAAA;EC+CQ,aAAA;EACA,wDAAA;AA2CZ;AA1CY;ED1DR,cC2DkC;ED1DlC,YAAA;EACA,WAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;ECuDY,UAAA;EACA,gBAAA;EACA,uBAAA;AAiDhB;AAhDgB;EDvDZ,YAAA;EACA,WAAA;ECwDgB,eAAA;EACA,UAAA;EACA,aAAA;EACA,2DAAA;EACA,eAAA;EACA,uBAAA;EACA,qBAAA;EACA,WAAA;EACA,mBAAA;AAmDpB;AAhDgB;EDpEZ,YAAA;EACA,WAAA;ECqEgB,gBAAA;AAmDpB;AAjDgB;EDxEZ,YAAA;EACA,WAAA;ECyEgB,gBAAA;EACA,gBAAA;AAoDpB;AAlDgB;EDrFZ,cCsFsC;EDrFtC,YAAA;EACA,WAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;ECkFgB,gBAAA;EACA,iBAAA;EACA,6BAAA;EACA,eAAA;AAyDpB;AAvDgB;EDpFZ,YAAA;EACA,WAAA;ECqFgB,gBAAA;EACA,gBAAA;EACA,kBAAA;AA0DpB;AAxDgB;ED1FZ,YAAA;EACA,WAAA;EC2FgB,gBAAA;AA2DpB;AAzDgB;ED9FZ,YAAA;EACA,WAAA;EC+FgB,gBAAA;AA4DpB;AAtDQ;EDtGJ,YAAA;EACA,WAAA;AC+JJ;AAtDQ;EACI,aAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,WAAA;EACA,eAAA;AAwDZ;AAvDY;EACI,UAAA;AAyDhB;;AAnDA;EDjII,aCkIsB;EDjItB,YAAA;EACA,WAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EC8HA,kBAAA;EACA,uBAAA;AA2DJ","sourcesContent":["@mixin ContainerTag($display){\r\n    display: $display;\r\n    height: 100%;\r\n    width: 100%;\r\n    padding: .5rem;\r\n    border: 2px solid black;\r\n    border-radius: 10px ;\r\n}\r\n@mixin forHandW(){\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n.special-btn{\r\n    background-color: red;\r\n    color: black;\r\n    transition: ease-in-out 1s;\r\n} \r\n","@import './variables';\r\n\r\n*{\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;   \r\n}\r\nbody{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    max-height: 100vh;\r\n    max-width: 100vw;\r\n    height: 100vh;\r\n    width: 100vw;\r\n}\r\nmain{\r\n    @include ContainerTag(grid);\r\n    grid-template: .5fr .5fr 5fr .5fr / 2fr 5fr;\r\n    border: none;\r\n    gap: .5rem;\r\n}\r\nheader{\r\n    @include ContainerTag(flex);\r\n    justify-content: center;   \r\n    grid-area: 1/1/2/3;\r\n    svg{\r\n        height: 34px;\r\n        width: 43px;\r\n    }\r\n}\r\nnav{\r\n    @include ContainerTag(flex);\r\n    grid-area: 2/1/3/3;\r\n    justify-content: space-evenly;\r\n    gap: 1rem;\r\n    button{\r\n        @include ContainerTag(inline);\r\n        padding: .5rem 2rem;\r\n        font-weight: bold;\r\n        border: none;\r\n        background-color: transparent;\r\n        cursor: pointer;\r\n    }\r\n}\r\naside{\r\n    @include ContainerTag(flex);\r\n    grid-area: 3/1/4/3;\r\n    position: relative;\r\n    padding: 0;\r\n    \r\n    main{\r\n        @include ContainerTag(flex);\r\n        border: none;\r\n        section:nth-child(1){\r\n            @include forHandW();\r\n        }\r\n        section:nth-child(2){\r\n            @include forHandW();\r\n            display: grid;\r\n            grid-template-rows: repeat(auto-fill, minmax(50px, 1fr));\r\n            .tasks-div{\r\n                @include ContainerTag(block);\r\n                padding: 0;\r\n                border-radius: 0;\r\n                background-color: green;\r\n                .tasks{\r\n                    @include forHandW();\r\n                    margin-left: 2%;\r\n                    width: 98%;\r\n                    display: grid;\r\n                    grid-template-columns: .2fr 5fr 1fr 1.5fr repeat(2, .5fr);\r\n                    padding: .5rem;\r\n                    background-color: white;\r\n                    align-content: center;\r\n                    gap: .5rem;\r\n                    text-align: justify;\r\n                    \r\n                }\r\n                input{\r\n                    @include forHandW();\r\n                    grid-column: 1/2;\r\n                }\r\n                label{\r\n                    @include forHandW();\r\n                    grid-column: 2/3;\r\n                    padding-top: 8px; \r\n                }\r\n                button{\r\n                    @include ContainerTag(block);\r\n                    grid-column: 3/4;\r\n                    font-weight: bold;\r\n                    background-color: transparent;\r\n                    cursor: pointer;\r\n                }\r\n                p{\r\n                    @include forHandW();\r\n                    grid-column: 4/5;\r\n                    padding-top: 8px;\r\n                    text-align: center\r\n                }\r\n                .edit{\r\n                    @include forHandW();\r\n                    grid-column: 5/6;\r\n                }\r\n                .delete{\r\n                    @include forHandW();\r\n                    grid-column: 6/7;\r\n                }\r\n\r\n            }\r\n            \r\n        }\r\n        section:nth-child(3){\r\n            @include forHandW();\r\n        }\r\n        \r\n        .asideSVG{\r\n            display: none;\r\n            position: absolute;\r\n            bottom: 10px;\r\n            right: 10px;\r\n            height: 50px;\r\n            width: 50px;\r\n            cursor: pointer;\r\n            &:hover{\r\n                fill: blue;\r\n            }\r\n        }\r\n    }\r\n\r\n}\r\nfooter{\r\n    @include ContainerTag(flex);\r\n    grid-area:4/1/5/3;\r\n    justify-content: center;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/command.js":
/*!************************!*\
  !*** ./src/command.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   commandRun: () => (/* binding */ commandRun)
/* harmony export */ });
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.scss */ "./src/style/style.scss");


function commandRun(){
    const navClick = (nav) =>{
        const btn = Array.from(nav.querySelectorAll('button'));
        nav.addEventListener('click', function(event){
            if(event.target.className === 'Home-btn'){
                navVerify(btn[0], btn);
            }
            else if(event.target.className === 'Task-btn'){
                navVerify(btn[1], btn);
            }
            else if(event.target.className === 'Notes-btn'){
                navVerify(btn[2], btn);                
            }
        });
    }

    const navVerify = (navBtn, allbtn) =>{
        const addBtn = document.querySelector('.asideSVG');
        const allSection = Array.from(document.querySelectorAll('section'));
        allSection.forEach(key => key.style.display = 'none');
        allbtn.forEach(key => key.classList.remove('special-btn'));
        if(navBtn.classList.contains('Home-btn')){
            navBtn.classList.add('special-btn');
            allSection[0].style.display = allSection[0].style.display === 'none' ? 'grid' : 'none';
            addBtn.style.display = 'none';
        }
        else if(navBtn.classList.contains('Task-btn')){
            navBtn.classList.add('special-btn');
            allSection[1].style.display = allSection[1].style.display === 'none' ? 'grid' : 'none';
            addBtn.style.display = 'block';
            addClick(addBtn, navBtn);        
        }
        else if(navBtn.classList.contains('Notes-btn')){
            navBtn.classList.add('special-btn');
            allSection[2].style.display = allSection[2].style.display === 'none' ? 'grid' : 'none';
            addBtn.style.display = 'block';
            addClick(addBtn, navBtn);
        }
    }

    const addClick = (add, nBtn) => {
        add.addEventListener('click', () =>{
            if((nBtn.classList.contains('Task-btn')) && (nBtn.classList.contains('special-btn'))){
                
            }
            else if((nBtn.classList.contains('Notes-btn')) && (nBtn.classList.contains('special-btn'))){
                
            }
        });
    }

    return {navClick}
} 

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.scss */ "./src/style/style.scss");
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/print.js");



function component(){
    const mainContainer = document.createElement('main');
    const subContainer = (0,_print__WEBPACK_IMPORTED_MODULE_1__.subComponent)();
    mainContainer.append(subContainer.forHeader(), subContainer.forNav(), subContainer.forAside(), subContainer.forFooter());
    return mainContainer;
}

document.body.appendChild(component());

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   subComponent: () => (/* binding */ subComponent)
/* harmony export */ });
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.scss */ "./src/style/style.scss");
/* harmony import */ var _command__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./command */ "./src/command.js");



function subComponent(){
    const com = (0,_command__WEBPACK_IMPORTED_MODULE_1__.commandRun)();
    const forHeader = () => {
        const headerTag = document.createElement('header');
        headerTag.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>hand-pointing-right</title><path d="M21,9A1,1 0 0,1 22,10A1,1 0 0,1 21,11H16.53L16.4,12.21L14.2,17.15C14,17.65 13.47,18 12.86,18H8.5C7.7,18 7,17.27 7,16.5V10C7,9.61 7.16,9.26 7.43,9L11.63,4.1L12.4,4.84C12.6,5.03 12.72,5.29 12.72,5.58L12.69,5.8L11,9H21M2,18V10H5V18H2Z" /></svg>
            <h1>TodoThis</h1>
        `;
        return headerTag;
    }

    const forNav = () => {
        const navTag = document.createElement('nav');
        navTag.innerHTML = `
            <button class="Home-btn special-btn">HOME</button>
            <button class="Task-btn">TASKS</button>
            <button class="Notes-btn">NOTES</button>
        `;
        
        com.navClick(navTag);

        return navTag;
    }

    const forAside = () => {
        const asideTag = document.createElement('aside');
        asideTag.innerHTML = `
            <main> 
                <section>
                    
                </section>
                <section>
                    <div class="tasks-div">
                        <div class="tasks">
                            <input type="checkbox" name="myCheckbox" id="myCheckbox" value="checkboxValue">
                            <label for="myCheckbox">Checkbox Label</label>
                            <button>Details</button>
                            <p>Dec 12th</p>
                            <svg class="edit" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>playlist-edit</title><path d="M3 6V8H14V6H3M3 10V12H14V10H3M20 10.1C19.9 10.1 19.7 10.2 19.6 10.3L18.6 11.3L20.7 13.4L21.7 12.4C21.9 12.2 21.9 11.8 21.7 11.6L20.4 10.3C20.3 10.2 20.2 10.1 20 10.1M18.1 11.9L12 17.9V20H14.1L20.2 13.9L18.1 11.9M3 14V16H10V14H3Z" /></svg>
                            <svg class="delete" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>trash-can</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z" /></svg>
                        </div>
                    </div>
                </section>
                <section>
                    
                </section>
                <svg class="asideSVG" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus-circle</title><path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
                
            </main>
        `;

        return asideTag;
    }

    const forFooter = () => {
        const footerTag = document.createElement('footer');
        footerTag.innerHTML = `
            <p>&copy; 2023 TodoThis. All rights reserved.</p>
        `;
        return footerTag;
    }

    return {forHeader, forNav, forAside, forFooter}
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWFuZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sK0hBQStILFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssYUFBYSxZQUFZLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLGFBQWEsWUFBWSxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxhQUFhLFlBQVksVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLGFBQWEsWUFBWSxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sTUFBTSxhQUFhLFlBQVksVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLGFBQWEsWUFBWSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsWUFBWSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLFdBQVcsVUFBVSxhQUFhLE9BQU8sT0FBTyxXQUFXLFVBQVUsYUFBYSxXQUFXLE9BQU8sT0FBTyxhQUFhLFlBQVksVUFBVSxVQUFVLFdBQVcsV0FBVyxhQUFhLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxXQUFXLFVB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsWUFBWTtBQUNaOzs7Ozs7Ozs7Ozs7O0FDdEQ0QjtBQUNTO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixvREFBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDVjRCO0FBQ1c7QUFDdkM7QUFDTztBQUNQLGdCQUFnQixvREFBVTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9zdHlsZS9zdHlsZS5zY3NzPzc0N2UiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9jb21tYW5kLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3ByaW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3BlY2lhbC1idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIGNvbG9yOiBibGFjaztcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgMXM7XG59XG5cbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGdyaWQtdGVtcGxhdGU6IDAuNWZyIDAuNWZyIDVmciAwLjVmci8yZnIgNWZyO1xuICBib3JkZXI6IG5vbmU7XG4gIGdhcDogMC41cmVtO1xufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ3JpZC1hcmVhOiAxLzEvMi8zO1xufVxuaGVhZGVyIHN2ZyB7XG4gIGhlaWdodDogMzRweDtcbiAgd2lkdGg6IDQzcHg7XG59XG5cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGdyaWQtYXJlYTogMi8xLzMvMztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGdhcDogMXJlbTtcbn1cbm5hdiBidXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hc2lkZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGdyaWQtYXJlYTogMy8xLzQvMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwO1xufVxuYXNpZGUgbWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbn1cbmFzaWRlIG1haW4gc2VjdGlvbjpudGgtY2hpbGQoMSkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuYXNpZGUgbWFpbiBzZWN0aW9uOm50aC1jaGlsZCgyKSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDUwcHgsIDFmcikpO1xufVxuYXNpZGUgbWFpbiBzZWN0aW9uOm50aC1jaGlsZCgyKSAudGFza3MtZGl2IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xufVxuYXNpZGUgbWFpbiBzZWN0aW9uOm50aC1jaGlsZCgyKSAudGFza3MtZGl2IC50YXNrcyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgd2lkdGg6IDk4JTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjJmciA1ZnIgMWZyIDEuNWZyIHJlcGVhdCgyLCAwLjVmcik7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5hc2lkZSBtYWluIHNlY3Rpb246bnRoLWNoaWxkKDIpIC50YXNrcy1kaXYgaW5wdXQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBncmlkLWNvbHVtbjogMS8yO1xufVxuYXNpZGUgbWFpbiBzZWN0aW9uOm50aC1jaGlsZCgyKSAudGFza3MtZGl2IGxhYmVsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZ3JpZC1jb2x1bW46IDIvMztcbiAgcGFkZGluZy10b3A6IDhweDtcbn1cbmFzaWRlIG1haW4gc2VjdGlvbjpudGgtY2hpbGQoMikgLnRhc2tzLWRpdiBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZ3JpZC1jb2x1bW46IDMvNDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5hc2lkZSBtYWluIHNlY3Rpb246bnRoLWNoaWxkKDIpIC50YXNrcy1kaXYgcCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGdyaWQtY29sdW1uOiA0LzU7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmFzaWRlIG1haW4gc2VjdGlvbjpudGgtY2hpbGQoMikgLnRhc2tzLWRpdiAuZWRpdCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGdyaWQtY29sdW1uOiA1LzY7XG59XG5hc2lkZSBtYWluIHNlY3Rpb246bnRoLWNoaWxkKDIpIC50YXNrcy1kaXYgLmRlbGV0ZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGdyaWQtY29sdW1uOiA2Lzc7XG59XG5hc2lkZSBtYWluIHNlY3Rpb246bnRoLWNoaWxkKDMpIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbmFzaWRlIG1haW4gLmFzaWRlU1ZHIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5hc2lkZSBtYWluIC5hc2lkZVNWRzpob3ZlciB7XG4gIGZpbGw6IGJsdWU7XG59XG5cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGdyaWQtYXJlYTogNC8xLzUvMztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvX3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvc3R5bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFZQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDWEo7O0FBRkE7RUFDSSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBS0o7O0FBSEE7RUFDSSx5Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQU1KOztBQUpBO0VEYkksYUNjc0I7RURidEIsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQ1VBLDRDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFZSjs7QUFWQTtFRG5CSSxhQ29Cc0I7RURuQnRCLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUNnQkEsdUJBQUE7RUFDQSxrQkFBQTtBQWtCSjtBQWpCSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBbUJSOztBQWhCQTtFRDVCSSxhQzZCc0I7RUQ1QnRCLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUN5QkEsa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFNBQUE7QUF3Qko7QUF2Qkk7RURqQ0EsZUNrQzBCO0VEakMxQixZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VDOEJJLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBOEJSOztBQTNCQTtFRDFDSSxhQzJDc0I7RUQxQ3RCLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUN1Q0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFtQ0o7QUFqQ0k7RURoREEsYUNpRDBCO0VEaEQxQixZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VDNkNJLFlBQUE7QUF3Q1I7QUF2Q1E7RUQzQ0osWUFBQTtFQUNBLFdBQUE7QUNxRko7QUF4Q1E7RUQ5Q0osWUFBQTtFQUNBLFdBQUE7RUMrQ1EsYUFBQTtFQUNBLHdEQUFBO0FBMkNaO0FBMUNZO0VEMURSLGNDMkRrQztFRDFEbEMsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQ3VEWSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWlEaEI7QUFoRGdCO0VEdkRaLFlBQUE7RUFDQSxXQUFBO0VDd0RnQixlQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSwyREFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBbURwQjtBQWhEZ0I7RURwRVosWUFBQTtFQUNBLFdBQUE7RUNxRWdCLGdCQUFBO0FBbURwQjtBQWpEZ0I7RUR4RVosWUFBQTtFQUNBLFdBQUE7RUN5RWdCLGdCQUFBO0VBQ0EsZ0JBQUE7QUFvRHBCO0FBbERnQjtFRHJGWixjQ3NGc0M7RURyRnRDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUNrRmdCLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUF5RHBCO0FBdkRnQjtFRHBGWixZQUFBO0VBQ0EsV0FBQTtFQ3FGZ0IsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBMERwQjtBQXhEZ0I7RUQxRlosWUFBQTtFQUNBLFdBQUE7RUMyRmdCLGdCQUFBO0FBMkRwQjtBQXpEZ0I7RUQ5RlosWUFBQTtFQUNBLFdBQUE7RUMrRmdCLGdCQUFBO0FBNERwQjtBQXREUTtFRHRHSixZQUFBO0VBQ0EsV0FBQTtBQytKSjtBQXREUTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBd0RaO0FBdkRZO0VBQ0ksVUFBQTtBQXlEaEI7O0FBbkRBO0VEaklJLGFDa0lzQjtFRGpJdEIsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQzhIQSxrQkFBQTtFQUNBLHVCQUFBO0FBMkRKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtaXhpbiBDb250YWluZXJUYWcoJGRpc3BsYXkpe1xcclxcbiAgICBkaXNwbGF5OiAkZGlzcGxheTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcGFkZGluZzogLjVyZW07XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDtcXHJcXG59XFxyXFxuQG1peGluIGZvckhhbmRXKCl7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcbi5zcGVjaWFsLWJ0bntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDFzO1xcclxcbn0gXFxyXFxuXCIsXCJAaW1wb3J0ICcuL3ZhcmlhYmxlcyc7XFxyXFxuXFxyXFxuKntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwOyAgIFxcclxcbn1cXHJcXG5ib2R5e1xcclxcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxyXFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxubWFpbntcXHJcXG4gICAgQGluY2x1ZGUgQ29udGFpbmVyVGFnKGdyaWQpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAuNWZyIC41ZnIgNWZyIC41ZnIgLyAyZnIgNWZyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGdhcDogLjVyZW07XFxyXFxufVxcclxcbmhlYWRlcntcXHJcXG4gICAgQGluY2x1ZGUgQ29udGFpbmVyVGFnKGZsZXgpO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgICBcXHJcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8zO1xcclxcbiAgICBzdmd7XFxyXFxuICAgICAgICBoZWlnaHQ6IDM0cHg7XFxyXFxuICAgICAgICB3aWR0aDogNDNweDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5uYXZ7XFxyXFxuICAgIEBpbmNsdWRlIENvbnRhaW5lclRhZyhmbGV4KTtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8zO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gICAgZ2FwOiAxcmVtO1xcclxcbiAgICBidXR0b257XFxyXFxuICAgICAgICBAaW5jbHVkZSBDb250YWluZXJUYWcoaW5saW5lKTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IC41cmVtIDJyZW07XFxyXFxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICB9XFxyXFxufVxcclxcbmFzaWRle1xcclxcbiAgICBAaW5jbHVkZSBDb250YWluZXJUYWcoZmxleCk7XFxyXFxuICAgIGdyaWQtYXJlYTogMy8xLzQvMztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBcXHJcXG4gICAgbWFpbntcXHJcXG4gICAgICAgIEBpbmNsdWRlIENvbnRhaW5lclRhZyhmbGV4KTtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIHNlY3Rpb246bnRoLWNoaWxkKDEpe1xcclxcbiAgICAgICAgICAgIEBpbmNsdWRlIGZvckhhbmRXKCk7XFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBzZWN0aW9uOm50aC1jaGlsZCgyKXtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBmb3JIYW5kVygpO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoNTBweCwgMWZyKSk7XFxyXFxuICAgICAgICAgICAgLnRhc2tzLWRpdntcXHJcXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgQ29udGFpbmVyVGFnKGJsb2NrKTtcXHJcXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICAgICAgICAgICAgICAgIC50YXNrc3tcXHJcXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZvckhhbmRXKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMiU7XFxyXFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTglO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogLjJmciA1ZnIgMWZyIDEuNWZyIHJlcGVhdCgyLCAuNWZyKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgICAgICBnYXA6IC41cmVtO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIFxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIGlucHV0e1xcclxcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgZm9ySGFuZFcoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzI7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgbGFiZWx7XFxyXFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBmb3JIYW5kVygpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcXHJcXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4cHg7IFxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIGJ1dHRvbntcXHJcXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIENvbnRhaW5lclRhZyhibG9jayk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMy80O1xcclxcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICBwe1xcclxcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgZm9ySGFuZFcoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiA0LzU7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgLmVkaXR7XFxyXFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBmb3JIYW5kVygpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDUvNjtcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICAuZGVsZXRle1xcclxcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgZm9ySGFuZFcoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiA2Lzc7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgICBzZWN0aW9uOm50aC1jaGlsZCgzKXtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBmb3JIYW5kVygpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgXFxyXFxuICAgICAgICAuYXNpZGVTVkd7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgJjpob3ZlcntcXHJcXG4gICAgICAgICAgICAgICAgZmlsbDogYmx1ZTtcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuZm9vdGVye1xcclxcbiAgICBAaW5jbHVkZSBDb250YWluZXJUYWcoZmxleCk7XFxyXFxuICAgIGdyaWQtYXJlYTo0LzEvNS8zO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tbWFuZFJ1bigpe1xyXG4gICAgY29uc3QgbmF2Q2xpY2sgPSAobmF2KSA9PntcclxuICAgICAgICBjb25zdCBidG4gPSBBcnJheS5mcm9tKG5hdi5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKSk7XHJcbiAgICAgICAgbmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICBpZihldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnSG9tZS1idG4nKXtcclxuICAgICAgICAgICAgICAgIG5hdlZlcmlmeShidG5bMF0sIGJ0bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnVGFzay1idG4nKXtcclxuICAgICAgICAgICAgICAgIG5hdlZlcmlmeShidG5bMV0sIGJ0bik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihldmVudC50YXJnZXQuY2xhc3NOYW1lID09PSAnTm90ZXMtYnRuJyl7XHJcbiAgICAgICAgICAgICAgICBuYXZWZXJpZnkoYnRuWzJdLCBidG4pOyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5hdlZlcmlmeSA9IChuYXZCdG4sIGFsbGJ0bikgPT57XHJcbiAgICAgICAgY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFzaWRlU1ZHJyk7XHJcbiAgICAgICAgY29uc3QgYWxsU2VjdGlvbiA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnc2VjdGlvbicpKTtcclxuICAgICAgICBhbGxTZWN0aW9uLmZvckVhY2goa2V5ID0+IGtleS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKTtcclxuICAgICAgICBhbGxidG4uZm9yRWFjaChrZXkgPT4ga2V5LmNsYXNzTGlzdC5yZW1vdmUoJ3NwZWNpYWwtYnRuJykpO1xyXG4gICAgICAgIGlmKG5hdkJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ0hvbWUtYnRuJykpe1xyXG4gICAgICAgICAgICBuYXZCdG4uY2xhc3NMaXN0LmFkZCgnc3BlY2lhbC1idG4nKTtcclxuICAgICAgICAgICAgYWxsU2VjdGlvblswXS5zdHlsZS5kaXNwbGF5ID0gYWxsU2VjdGlvblswXS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgPyAnZ3JpZCcgOiAnbm9uZSc7XHJcbiAgICAgICAgICAgIGFkZEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKG5hdkJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ1Rhc2stYnRuJykpe1xyXG4gICAgICAgICAgICBuYXZCdG4uY2xhc3NMaXN0LmFkZCgnc3BlY2lhbC1idG4nKTtcclxuICAgICAgICAgICAgYWxsU2VjdGlvblsxXS5zdHlsZS5kaXNwbGF5ID0gYWxsU2VjdGlvblsxXS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgPyAnZ3JpZCcgOiAnbm9uZSc7XHJcbiAgICAgICAgICAgIGFkZEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgYWRkQ2xpY2soYWRkQnRuLCBuYXZCdG4pOyAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYobmF2QnRuLmNsYXNzTGlzdC5jb250YWlucygnTm90ZXMtYnRuJykpe1xyXG4gICAgICAgICAgICBuYXZCdG4uY2xhc3NMaXN0LmFkZCgnc3BlY2lhbC1idG4nKTtcclxuICAgICAgICAgICAgYWxsU2VjdGlvblsyXS5zdHlsZS5kaXNwbGF5ID0gYWxsU2VjdGlvblsyXS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgPyAnZ3JpZCcgOiAnbm9uZSc7XHJcbiAgICAgICAgICAgIGFkZEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgICAgICAgYWRkQ2xpY2soYWRkQnRuLCBuYXZCdG4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhZGRDbGljayA9IChhZGQsIG5CdG4pID0+IHtcclxuICAgICAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcclxuICAgICAgICAgICAgaWYoKG5CdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdUYXNrLWJ0bicpKSAmJiAobkJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ3NwZWNpYWwtYnRuJykpKXtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoKG5CdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdOb3Rlcy1idG4nKSkgJiYgKG5CdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdzcGVjaWFsLWJ0bicpKSl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7bmF2Q2xpY2t9XHJcbn0gIiwiaW1wb3J0ICcuL3N0eWxlL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQge3N1YkNvbXBvbmVudH0gZnJvbSAnLi9wcmludCc7XHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQoKXtcclxuICAgIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICBjb25zdCBzdWJDb250YWluZXIgPSBzdWJDb21wb25lbnQoKTtcclxuICAgIG1haW5Db250YWluZXIuYXBwZW5kKHN1YkNvbnRhaW5lci5mb3JIZWFkZXIoKSwgc3ViQ29udGFpbmVyLmZvck5hdigpLCBzdWJDb250YWluZXIuZm9yQXNpZGUoKSwgc3ViQ29udGFpbmVyLmZvckZvb3RlcigpKTtcclxuICAgIHJldHVybiBtYWluQ29udGFpbmVyO1xyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTsiLCJpbXBvcnQgJy4vc3R5bGUvc3R5bGUuc2Nzcyc7XHJcbmltcG9ydCB7IGNvbW1hbmRSdW4gfSBmcm9tICcuL2NvbW1hbmQnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1YkNvbXBvbmVudCgpe1xyXG4gICAgY29uc3QgY29tID0gY29tbWFuZFJ1bigpO1xyXG4gICAgY29uc3QgZm9ySGVhZGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlclRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgICAgIGhlYWRlclRhZy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+aGFuZC1wb2ludGluZy1yaWdodDwvdGl0bGU+PHBhdGggZD1cIk0yMSw5QTEsMSAwIDAsMSAyMiwxMEExLDEgMCAwLDEgMjEsMTFIMTYuNTNMMTYuNCwxMi4yMUwxNC4yLDE3LjE1QzE0LDE3LjY1IDEzLjQ3LDE4IDEyLjg2LDE4SDguNUM3LjcsMTggNywxNy4yNyA3LDE2LjVWMTBDNyw5LjYxIDcuMTYsOS4yNiA3LjQzLDlMMTEuNjMsNC4xTDEyLjQsNC44NEMxMi42LDUuMDMgMTIuNzIsNS4yOSAxMi43Miw1LjU4TDEyLjY5LDUuOEwxMSw5SDIxTTIsMThWMTBINVYxOEgyWlwiIC8+PC9zdmc+XHJcbiAgICAgICAgICAgIDxoMT5Ub2RvVGhpczwvaDE+XHJcbiAgICAgICAgYDtcclxuICAgICAgICByZXR1cm4gaGVhZGVyVGFnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvck5hdiA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBuYXZUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgICAgICBuYXZUYWcuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiSG9tZS1idG4gc3BlY2lhbC1idG5cIj5IT01FPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJUYXNrLWJ0blwiPlRBU0tTPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJOb3Rlcy1idG5cIj5OT1RFUzwvYnV0dG9uPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29tLm5hdkNsaWNrKG5hdlRhZyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuYXZUYWc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9yQXNpZGUgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXNpZGVUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhc2lkZScpO1xyXG4gICAgICAgIGFzaWRlVGFnLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPG1haW4+IFxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza3MtZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJteUNoZWNrYm94XCIgaWQ9XCJteUNoZWNrYm94XCIgdmFsdWU9XCJjaGVja2JveFZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibXlDaGVja2JveFwiPkNoZWNrYm94IExhYmVsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+RGV0YWlsczwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGVjIDEydGg8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiZWRpdFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnBsYXlsaXN0LWVkaXQ8L3RpdGxlPjxwYXRoIGQ9XCJNMyA2VjhIMTRWNkgzTTMgMTBWMTJIMTRWMTBIM00yMCAxMC4xQzE5LjkgMTAuMSAxOS43IDEwLjIgMTkuNiAxMC4zTDE4LjYgMTEuM0wyMC43IDEzLjRMMjEuNyAxMi40QzIxLjkgMTIuMiAyMS45IDExLjggMjEuNyAxMS42TDIwLjQgMTAuM0MyMC4zIDEwLjIgMjAuMiAxMC4xIDIwIDEwLjFNMTguMSAxMS45TDEyIDE3LjlWMjBIMTQuMUwyMC4yIDEzLjlMMTguMSAxMS45TTMgMTRWMTZIMTBWMTRIM1pcIiAvPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImRlbGV0ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnRyYXNoLWNhbjwvdGl0bGU+PHBhdGggZD1cIk05LDNWNEg0VjZINVYxOUEyLDIgMCAwLDAgNywyMUgxN0EyLDIgMCAwLDAgMTksMTlWNkgyMFY0SDE1VjNIOU05LDhIMTFWMTdIOVY4TTEzLDhIMTVWMTdIMTNWOFpcIiAvPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImFzaWRlU1ZHXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+cGx1cy1jaXJjbGU8L3RpdGxlPjxwYXRoIGQ9XCJNMTcsMTNIMTNWMTdIMTFWMTNIN1YxMUgxMVY3SDEzVjExSDE3TTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyWlwiIC8+PC9zdmc+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIHJldHVybiBhc2lkZVRhZztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JGb290ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9vdGVyVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICAgICAgZm9vdGVyVGFnLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPHA+JmNvcHk7IDIwMjMgVG9kb1RoaXMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuPC9wPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgcmV0dXJuIGZvb3RlclRhZztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge2ZvckhlYWRlciwgZm9yTmF2LCBmb3JBc2lkZSwgZm9yRm9vdGVyfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=