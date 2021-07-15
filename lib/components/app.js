"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _giphyApi = _interopRequireDefault(require("giphy-api"));

require("./FontawsomeIcons");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _search_bar = _interopRequireDefault(require("./search_bar"));

var _gif = _interopRequireDefault(require("./gif"));

var _gif_list = _interopRequireDefault(require("./gif_list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _this.search = function (query) {
      // API call
      (0, _giphyApi.default)('nE5e0lRHeSZr0DEAAT8QOVkX4cZWGQQx').search({
        q: query,
        rating: 'g',
        limit: 10
      }, function (error, result) {
        _this.setState({
          gifs: result.data
        });
      });
    };

    _this.state = {
      gifs: [],
      selectedGifId: "5bdhq6YF0szPaCEk9Y"
    };

    _this.search("cute");

    _this.selectGif = _this.selectGif.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(App, [{
    key: "selectGif",
    value: function selectGif(id) {
      this.setState({
        selectedGifId: id
      });
    }
  }, {
    key: "render",
    value: function render() {
      // const gifs = [
      //   { id: "dz1b117ztVkHBG6b6p" },
      //   { id: "V3pYaPO9QdLPO" }
      // ];
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: "left-scene"
      }, _react.default.createElement("div", {
        className: "search-section"
      }, _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: "search",
        className: "search-icon"
      }), _react.default.createElement(_search_bar.default, {
        searchFunction: this.search
      })), _react.default.createElement("div", {
        className: "selected-gif"
      }, _react.default.createElement(_gif.default, {
        id: this.state.selectedGifId
      }))), _react.default.createElement("div", {
        className: "right-scene"
      }, _react.default.createElement(_gif_list.default, {
        gifs: this.state.gifs,
        selectGif: this.selectGif
      })));
    }
  }]);

  return App;
}(_react.Component);

var _default = App;
exports.default = _default;