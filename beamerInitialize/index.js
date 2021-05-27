"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = beamerInitialize;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function beamerInitialize(id) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!window) {
    return;
  }

  if (!id) {
    throw Error('Must provide "id". https://app.getbeamer.com/embed');
  }

  window.beamer_config = _objectSpread({
    product_id: id
  }, args);
  var beamerURL = url || "https://app.getbeamer.com/js/beamer-embed.js";
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.defer = "defer";
  script.src = beamerURL;
  head.appendChild(script);
}