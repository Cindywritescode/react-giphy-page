"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gif = _interopRequireDefault(require("./gif"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import React, { Component } from 'react';
// class GifList extends Component {
//   renderList = () => {
//     return this.props.gifts.map(gif => <Gif id={gif.id} key={gif.id} />);
//   }
//   render() {
//     return (
//       <div className="gif-list">
//         {this.renderList()}
//       </div>
//     );
//   }
// }
var GifList = function GifList(props) {
  return _react.default.createElement("div", {
    className: "gif-list"
  }, props.gifs.map(function (gif) {
    return _react.default.createElement(_gif.default, {
      id: gif.id,
      key: gif.id,
      selectGif: props.selectGif
    });
  }));
};

var _default = GifList;
exports.default = _default;