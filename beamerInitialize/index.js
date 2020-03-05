"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = beamerInitialize;

function beamerInitialize(id) {
  var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!id) {
    throw Error('Must provide "id". https://app.getbeamer.com/embed');
  } // Variable used by Beamer


  var beamer_config = {
    product_id: id
  };
  var beamerURL = url || 'https://app.getbeamer.com/js/beamer-embed.js';
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.defer = 'defer';
  script.src = beamerURL;
  head.appendChild(script);
}

;