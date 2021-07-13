import React, { Component } from 'react';

class Gif extends Component {
  handleImageUpdate = (event) => {
    this.props.selectGif
  }
  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
    return (
      <img src={src} height="400" alt="" className="gif" 
        onClick={this.handleImageUpdate}/>
    )
  }
}

export default Gif;