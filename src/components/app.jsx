import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifts: [],
      selectedGifId:"5bdhq6YF0szPaCEk9Y"
    }
  }

  render() {
    const gifs = [
      { id: "dz1b117ztVkHBG6b6p" },
      { id: "V3pYaPO9QdLPO" }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id= {this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifts} />
        </div>
      </div>
    );
  }
}

export default App;