// eslint jsx-a11y/alt-text: off 
// eslint jsx-a11y/no-noninteractive-element-interactions: off

import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    if (!this.props.id) {
      return null;
    }

    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
    return (
      <img src={src} className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;