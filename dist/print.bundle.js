"use strict";
(self["webpackChunktodolist"] = self["webpackChunktodolist"] || []).push([["print"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLCtIQUErSCxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLGFBQWEsWUFBWSxVQUFVLFVBQVUsV0FBVyxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE9BQU8sTUFBTSxhQUFhLFlBQVksVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sYUFBYSxZQUFZLFVBQVUsVUFBVSxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxhQUFhLFlBQVksVUFBVSxVQUFVLFdBQVcsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sYUFBYSxZQUFZLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxhQUFhLFlBQVksVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxVQUFVLFlBQVksVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsYUFBYSxPQUFPLE9BQU8sV0FBVyxVQUFVLGFBQWEsV0FBVyxPQUFPLE9BQU8sYUFBYSxZQUFZLFVBQVUsVUFBVSxXQUFXLFdBQVcsYUFBYSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sV0FBVyxVQUFV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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFlBQVk7QUFDWjs7Ozs7Ozs7Ozs7OztBQ3RENEI7QUFDUztBQUNyQztBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsb0RBQVk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1Y0QjtBQUNXO0FBQ3ZDO0FBQ087QUFDUCxnQkFBZ0Isb0RBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG9saXN0Ly4vc3JjL3N0eWxlL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvc3R5bGUvc3R5bGUuc2Nzcz83NDdlIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kb2xpc3QvLi9zcmMvY29tbWFuZC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvbGlzdC8uL3NyYy9wcmludC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNwZWNpYWwtYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBjb2xvcjogYmxhY2s7XG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IDFzO1xufVxuXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwdnc7XG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBncmlkLXRlbXBsYXRlOiAwLjVmciAwLjVmciA1ZnIgMC41ZnIvMmZyIDVmcjtcbiAgYm9yZGVyOiBub25lO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtYXJlYTogMS8xLzIvMztcbn1cbmhlYWRlciBzdmcge1xuICBoZWlnaHQ6IDM0cHg7XG4gIHdpZHRoOiA0M3B4O1xufVxuXG5uYXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBncmlkLWFyZWE6IDIvMS8zLzM7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBnYXA6IDFyZW07XG59XG5uYXYgYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYXNpZGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBncmlkLWFyZWE6IDMvMS80LzM7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMDtcbn1cbmFzaWRlIG1haW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5hc2lkZSBtYWluIHNlY3Rpb246bnRoLWNoaWxkKDEpIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbmFzaWRlIG1haW4gc2VjdGlvbjpudGgtY2hpbGQoMikge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg1MHB4LCAxZnIpKTtcbn1cbmFzaWRlIG1haW4gc2VjdGlvbjpudGgtY2hpbGQoMikgLnRhc2tzLWRpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbn1cbmFzaWRlIG1haW4gc2VjdGlvbjpudGgtY2hpbGQoMikgLnRhc2tzLWRpdiAudGFza3Mge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIHdpZHRoOiA5OCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMC4yZnIgNWZyIDFmciAxLjVmciByZXBlYXQoMiwgMC41ZnIpO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuYXNpZGUgbWFpbiBzZWN0aW9uOm50aC1jaGlsZCgyKSAudGFza3MtZGl2IGlucHV0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZ3JpZC1jb2x1bW46IDEvMjtcbn1cbmFzaWRlIG1haW4gc2VjdGlvbjpudGgtY2hpbGQoMikgLnRhc2tzLWRpdiBsYWJlbCB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGdyaWQtY29sdW1uOiAyLzM7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5hc2lkZSBtYWluIHNlY3Rpb246bnRoLWNoaWxkKDIpIC50YXNrcy1kaXYgYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGdyaWQtY29sdW1uOiAzLzQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYXNpZGUgbWFpbiBzZWN0aW9uOm50aC1jaGlsZCgyKSAudGFza3MtZGl2IHAge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBncmlkLWNvbHVtbjogNC81O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5hc2lkZSBtYWluIHNlY3Rpb246bnRoLWNoaWxkKDIpIC50YXNrcy1kaXYgLmVkaXQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBncmlkLWNvbHVtbjogNS82O1xufVxuYXNpZGUgbWFpbiBzZWN0aW9uOm50aC1jaGlsZCgyKSAudGFza3MtZGl2IC5kZWxldGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBncmlkLWNvbHVtbjogNi83O1xufVxuYXNpZGUgbWFpbiBzZWN0aW9uOm50aC1jaGlsZCgzKSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5hc2lkZSBtYWluIC5hc2lkZVNWRyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMHB4O1xuICByaWdodDogMTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuYXNpZGUgbWFpbiAuYXNpZGVTVkc6aG92ZXIge1xuICBmaWxsOiBibHVlO1xufVxuXG5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBncmlkLWFyZWE6IDQvMS81LzM7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBWUE7RUFDSSxxQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ1hKOztBQUZBO0VBQ0ksc0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUtKOztBQUhBO0VBQ0kseUNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFNSjs7QUFKQTtFRGJJLGFDY3NCO0VEYnRCLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUNVQSw0Q0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBWUo7O0FBVkE7RURuQkksYUNvQnNCO0VEbkJ0QixZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VDZ0JBLHVCQUFBO0VBQ0Esa0JBQUE7QUFrQko7QUFqQkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQW1CUjs7QUFoQkE7RUQ1QkksYUM2QnNCO0VENUJ0QixZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VDeUJBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxTQUFBO0FBd0JKO0FBdkJJO0VEakNBLGVDa0MwQjtFRGpDMUIsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQzhCSSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQThCUjs7QUEzQkE7RUQxQ0ksYUMyQ3NCO0VEMUN0QixZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VDdUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBbUNKO0FBakNJO0VEaERBLGFDaUQwQjtFRGhEMUIsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQzZDSSxZQUFBO0FBd0NSO0FBdkNRO0VEM0NKLFlBQUE7RUFDQSxXQUFBO0FDcUZKO0FBeENRO0VEOUNKLFlBQUE7RUFDQSxXQUFBO0VDK0NRLGFBQUE7RUFDQSx3REFBQTtBQTJDWjtBQTFDWTtFRDFEUixjQzJEa0M7RUQxRGxDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUN1RFksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFpRGhCO0FBaERnQjtFRHZEWixZQUFBO0VBQ0EsV0FBQTtFQ3dEZ0IsZUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQW1EcEI7QUFoRGdCO0VEcEVaLFlBQUE7RUFDQSxXQUFBO0VDcUVnQixnQkFBQTtBQW1EcEI7QUFqRGdCO0VEeEVaLFlBQUE7RUFDQSxXQUFBO0VDeUVnQixnQkFBQTtFQUNBLGdCQUFBO0FBb0RwQjtBQWxEZ0I7RURyRlosY0NzRnNDO0VEckZ0QyxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VDa0ZnQixnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBeURwQjtBQXZEZ0I7RURwRlosWUFBQTtFQUNBLFdBQUE7RUNxRmdCLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQTBEcEI7QUF4RGdCO0VEMUZaLFlBQUE7RUFDQSxXQUFBO0VDMkZnQixnQkFBQTtBQTJEcEI7QUF6RGdCO0VEOUZaLFlBQUE7RUFDQSxXQUFBO0VDK0ZnQixnQkFBQTtBQTREcEI7QUF0RFE7RUR0R0osWUFBQTtFQUNBLFdBQUE7QUMrSko7QUF0RFE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQXdEWjtBQXZEWTtFQUNJLFVBQUE7QUF5RGhCOztBQW5EQTtFRGpJSSxhQ2tJc0I7RURqSXRCLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUM4SEEsa0JBQUE7RUFDQSx1QkFBQTtBQTJESlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAbWl4aW4gQ29udGFpbmVyVGFnKCRkaXNwbGF5KXtcXHJcXG4gICAgZGlzcGxheTogJGRpc3BsYXk7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmc6IC41cmVtO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCA7XFxyXFxufVxcclxcbkBtaXhpbiBmb3JIYW5kVygpe1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG4uc3BlY2lhbC1idG57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluLW91dCAxcztcXHJcXG59IFxcclxcblwiLFwiQGltcG9ydCAnLi92YXJpYWJsZXMnO1xcclxcblxcclxcbip7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDsgICBcXHJcXG59XFxyXFxuYm9keXtcXHJcXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcbm1haW57XFxyXFxuICAgIEBpbmNsdWRlIENvbnRhaW5lclRhZyhncmlkKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogLjVmciAuNWZyIDVmciAuNWZyIC8gMmZyIDVmcjtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBnYXA6IC41cmVtO1xcclxcbn1cXHJcXG5oZWFkZXJ7XFxyXFxuICAgIEBpbmNsdWRlIENvbnRhaW5lclRhZyhmbGV4KTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICAgXFxyXFxuICAgIGdyaWQtYXJlYTogMS8xLzIvMztcXHJcXG4gICAgc3Zne1xcclxcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDQzcHg7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxubmF2e1xcclxcbiAgICBAaW5jbHVkZSBDb250YWluZXJUYWcoZmxleCk7XFxyXFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgYnV0dG9ue1xcclxcbiAgICAgICAgQGluY2x1ZGUgQ29udGFpbmVyVGFnKGlubGluZSk7XFxyXFxuICAgICAgICBwYWRkaW5nOiAuNXJlbSAycmVtO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5hc2lkZXtcXHJcXG4gICAgQGluY2x1ZGUgQ29udGFpbmVyVGFnKGZsZXgpO1xcclxcbiAgICBncmlkLWFyZWE6IDMvMS80LzM7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgXFxyXFxuICAgIG1haW57XFxyXFxuICAgICAgICBAaW5jbHVkZSBDb250YWluZXJUYWcoZmxleCk7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBzZWN0aW9uOm50aC1jaGlsZCgxKXtcXHJcXG4gICAgICAgICAgICBAaW5jbHVkZSBmb3JIYW5kVygpO1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgc2VjdGlvbjpudGgtY2hpbGQoMil7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgZm9ySGFuZFcoKTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDUwcHgsIDFmcikpO1xcclxcbiAgICAgICAgICAgIC50YXNrcy1kaXZ7XFxyXFxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIENvbnRhaW5lclRhZyhibG9jayk7XFxyXFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XFxyXFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcclxcbiAgICAgICAgICAgICAgICAudGFza3N7XFxyXFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBmb3JIYW5kVygpO1xcclxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDk4JTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IC4yZnIgNWZyIDFmciAxLjVmciByZXBlYXQoMiwgLjVmcik7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAuNXJlbTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICBpbnB1dHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZvckhhbmRXKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMS8yO1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIGxhYmVse1xcclxcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgZm9ySGFuZFcoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XFxyXFxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogOHB4OyBcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgICBidXR0b257XFxyXFxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBDb250YWluZXJUYWcoYmxvY2spO1xcclxcbiAgICAgICAgICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDMvNDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgcHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZvckhhbmRXKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogNC81O1xcclxcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlclxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgIC5lZGl0e1xcclxcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgZm9ySGFuZFcoKTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGdyaWQtY29sdW1uOiA1LzY7XFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgLmRlbGV0ZXtcXHJcXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGZvckhhbmRXKCk7XFxyXFxuICAgICAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogNi83O1xcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIFxcclxcbiAgICAgICAgfVxcclxcbiAgICAgICAgc2VjdGlvbjpudGgtY2hpbGQoMyl7XFxyXFxuICAgICAgICAgICAgQGluY2x1ZGUgZm9ySGFuZFcoKTtcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICAgIFxcclxcbiAgICAgICAgLmFzaWRlU1ZHe1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIGJvdHRvbTogMTBweDtcXHJcXG4gICAgICAgICAgICByaWdodDogMTBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgICY6aG92ZXJ7XFxyXFxuICAgICAgICAgICAgICAgIGZpbGw6IGJsdWU7XFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcbmZvb3RlcntcXHJcXG4gICAgQGluY2x1ZGUgQ29udGFpbmVyVGFnKGZsZXgpO1xcclxcbiAgICBncmlkLWFyZWE6NC8xLzUvMztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlL3N0eWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hbmRSdW4oKXtcclxuICAgIGNvbnN0IG5hdkNsaWNrID0gKG5hdikgPT57XHJcbiAgICAgICAgY29uc3QgYnRuID0gQXJyYXkuZnJvbShuYXYucXVlcnlTZWxlY3RvckFsbCgnYnV0dG9uJykpO1xyXG4gICAgICAgIG5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ0hvbWUtYnRuJyl7XHJcbiAgICAgICAgICAgICAgICBuYXZWZXJpZnkoYnRuWzBdLCBidG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ1Rhc2stYnRuJyl7XHJcbiAgICAgICAgICAgICAgICBuYXZWZXJpZnkoYnRuWzFdLCBidG4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ05vdGVzLWJ0bicpe1xyXG4gICAgICAgICAgICAgICAgbmF2VmVyaWZ5KGJ0blsyXSwgYnRuKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuYXZWZXJpZnkgPSAobmF2QnRuLCBhbGxidG4pID0+e1xyXG4gICAgICAgIGNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hc2lkZVNWRycpO1xyXG4gICAgICAgIGNvbnN0IGFsbFNlY3Rpb24gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlY3Rpb24nKSk7XHJcbiAgICAgICAgYWxsU2VjdGlvbi5mb3JFYWNoKGtleSA9PiBrZXkuc3R5bGUuZGlzcGxheSA9ICdub25lJyk7XHJcbiAgICAgICAgYWxsYnRuLmZvckVhY2goa2V5ID0+IGtleS5jbGFzc0xpc3QucmVtb3ZlKCdzcGVjaWFsLWJ0bicpKTtcclxuICAgICAgICBpZihuYXZCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdIb21lLWJ0bicpKXtcclxuICAgICAgICAgICAgbmF2QnRuLmNsYXNzTGlzdC5hZGQoJ3NwZWNpYWwtYnRuJyk7XHJcbiAgICAgICAgICAgIGFsbFNlY3Rpb25bMF0uc3R5bGUuZGlzcGxheSA9IGFsbFNlY3Rpb25bMF0uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnID8gJ2dyaWQnIDogJ25vbmUnO1xyXG4gICAgICAgICAgICBhZGRCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihuYXZCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdUYXNrLWJ0bicpKXtcclxuICAgICAgICAgICAgbmF2QnRuLmNsYXNzTGlzdC5hZGQoJ3NwZWNpYWwtYnRuJyk7XHJcbiAgICAgICAgICAgIGFsbFNlY3Rpb25bMV0uc3R5bGUuZGlzcGxheSA9IGFsbFNlY3Rpb25bMV0uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnID8gJ2dyaWQnIDogJ25vbmUnO1xyXG4gICAgICAgICAgICBhZGRCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGFkZENsaWNrKGFkZEJ0biwgbmF2QnRuKTsgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKG5hdkJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ05vdGVzLWJ0bicpKXtcclxuICAgICAgICAgICAgbmF2QnRuLmNsYXNzTGlzdC5hZGQoJ3NwZWNpYWwtYnRuJyk7XHJcbiAgICAgICAgICAgIGFsbFNlY3Rpb25bMl0uc3R5bGUuZGlzcGxheSA9IGFsbFNlY3Rpb25bMl0uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnID8gJ2dyaWQnIDogJ25vbmUnO1xyXG4gICAgICAgICAgICBhZGRCdG4uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgICAgIGFkZENsaWNrKGFkZEJ0biwgbmF2QnRuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkQ2xpY2sgPSAoYWRkLCBuQnRuKSA9PiB7XHJcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XHJcbiAgICAgICAgICAgIGlmKChuQnRuLmNsYXNzTGlzdC5jb250YWlucygnVGFzay1idG4nKSkgJiYgKG5CdG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdzcGVjaWFsLWJ0bicpKSl7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmKChuQnRuLmNsYXNzTGlzdC5jb250YWlucygnTm90ZXMtYnRuJykpICYmIChuQnRuLmNsYXNzTGlzdC5jb250YWlucygnc3BlY2lhbC1idG4nKSkpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge25hdkNsaWNrfVxyXG59ICIsImltcG9ydCAnLi9zdHlsZS9zdHlsZS5zY3NzJztcclxuaW1wb3J0IHtzdWJDb21wb25lbnR9IGZyb20gJy4vcHJpbnQnO1xyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KCl7XHJcbiAgICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgY29uc3Qgc3ViQ29udGFpbmVyID0gc3ViQ29tcG9uZW50KCk7XHJcbiAgICBtYWluQ29udGFpbmVyLmFwcGVuZChzdWJDb250YWluZXIuZm9ySGVhZGVyKCksIHN1YkNvbnRhaW5lci5mb3JOYXYoKSwgc3ViQ29udGFpbmVyLmZvckFzaWRlKCksIHN1YkNvbnRhaW5lci5mb3JGb290ZXIoKSk7XHJcbiAgICByZXR1cm4gbWFpbkNvbnRhaW5lcjtcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7IiwiaW1wb3J0ICcuL3N0eWxlL3N0eWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBjb21tYW5kUnVuIH0gZnJvbSAnLi9jb21tYW5kJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdWJDb21wb25lbnQoKXtcclxuICAgIGNvbnN0IGNvbSA9IGNvbW1hbmRSdW4oKTtcclxuICAgIGNvbnN0IGZvckhlYWRlciA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBoZWFkZXJUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgICAgICBoZWFkZXJUYWcuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmhhbmQtcG9pbnRpbmctcmlnaHQ8L3RpdGxlPjxwYXRoIGQ9XCJNMjEsOUExLDEgMCAwLDEgMjIsMTBBMSwxIDAgMCwxIDIxLDExSDE2LjUzTDE2LjQsMTIuMjFMMTQuMiwxNy4xNUMxNCwxNy42NSAxMy40NywxOCAxMi44NiwxOEg4LjVDNy43LDE4IDcsMTcuMjcgNywxNi41VjEwQzcsOS42MSA3LjE2LDkuMjYgNy40Myw5TDExLjYzLDQuMUwxMi40LDQuODRDMTIuNiw1LjAzIDEyLjcyLDUuMjkgMTIuNzIsNS41OEwxMi42OSw1LjhMMTEsOUgyMU0yLDE4VjEwSDVWMThIMlpcIiAvPjwvc3ZnPlxyXG4gICAgICAgICAgICA8aDE+VG9kb1RoaXM8L2gxPlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgcmV0dXJuIGhlYWRlclRhZztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmb3JOYXYgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmF2VGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICAgICAgbmF2VGFnLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIkhvbWUtYnRuIHNwZWNpYWwtYnRuXCI+SE9NRTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiVGFzay1idG5cIj5UQVNLUzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiTm90ZXMtYnRuXCI+Tk9URVM8L2J1dHRvbj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbS5uYXZDbGljayhuYXZUYWcpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmF2VGFnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZvckFzaWRlID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFzaWRlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYXNpZGUnKTtcclxuICAgICAgICBhc2lkZVRhZy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxtYWluPiBcclxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2tzLWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFza3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwibXlDaGVja2JveFwiIGlkPVwibXlDaGVja2JveFwiIHZhbHVlPVwiY2hlY2tib3hWYWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm15Q2hlY2tib3hcIj5DaGVja2JveCBMYWJlbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkRldGFpbHM8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkRlYyAxMnRoPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBjbGFzcz1cImVkaXRcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5wbGF5bGlzdC1lZGl0PC90aXRsZT48cGF0aCBkPVwiTTMgNlY4SDE0VjZIM00zIDEwVjEySDE0VjEwSDNNMjAgMTAuMUMxOS45IDEwLjEgMTkuNyAxMC4yIDE5LjYgMTAuM0wxOC42IDExLjNMMjAuNyAxMy40TDIxLjcgMTIuNEMyMS45IDEyLjIgMjEuOSAxMS44IDIxLjcgMTEuNkwyMC40IDEwLjNDMjAuMyAxMC4yIDIwLjIgMTAuMSAyMCAxMC4xTTE4LjEgMTEuOUwxMiAxNy45VjIwSDE0LjFMMjAuMiAxMy45TDE4LjEgMTEuOU0zIDE0VjE2SDEwVjE0SDNaXCIgLz48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJkZWxldGVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT50cmFzaC1jYW48L3RpdGxlPjxwYXRoIGQ9XCJNOSwzVjRINFY2SDVWMTlBMiwyIDAgMCwwIDcsMjFIMTdBMiwyIDAgMCwwIDE5LDE5VjZIMjBWNEgxNVYzSDlNOSw4SDExVjE3SDlWOE0xMyw4SDE1VjE3SDEzVjhaXCIgLz48L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJhc2lkZVNWR1wiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnBsdXMtY2lyY2xlPC90aXRsZT48cGF0aCBkPVwiTTE3LDEzSDEzVjE3SDExVjEzSDdWMTFIMTFWN0gxM1YxMUgxN00xMiwyQTEwLDEwIDAgMCwwIDIsMTJBMTAsMTAgMCAwLDAgMTIsMjJBMTAsMTAgMCAwLDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIiAvPjwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICByZXR1cm4gYXNpZGVUYWc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZm9yRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZvb3RlclRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgICAgIGZvb3RlclRhZy5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxwPiZjb3B5OyAyMDIzIFRvZG9UaGlzLiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvcD5cclxuICAgICAgICBgO1xyXG4gICAgICAgIHJldHVybiBmb290ZXJUYWc7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtmb3JIZWFkZXIsIGZvck5hdiwgZm9yQXNpZGUsIGZvckZvb3Rlcn1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9