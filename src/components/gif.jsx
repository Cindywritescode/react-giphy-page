import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
    return (
      <img src={src} height="400" alt="" className="gif" />
    )
  }
}

export default Gif;