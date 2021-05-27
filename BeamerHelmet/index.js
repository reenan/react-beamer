"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ = require("../");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BeamerHelmet = (_ref) => {
  var {
    id,
    url,
    args
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_reactHelmet.default, null, (0, _.beamerInitialize)(id, url, args));
};

BeamerHelmet.propTypes = {
  id: _propTypes.default.string.isRequired,
  url: _propTypes.default.string.isRequired,
  args: _propTypes.default.object.isRequired
};
BeamerHelmet.defaultProps = {
  url: "https://app.getbeamer.com/js/beamer-embed.js",
  args: {}
};
var _default = BeamerHelmet;
exports.default = _default;