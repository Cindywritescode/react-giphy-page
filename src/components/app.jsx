import React, { Component } from 'react';
import giphy from 'giphy-api';

import "./FontawsomeIcons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null //"5bdhq6YF0szPaCEk9Y"
    };
    this.search("cute");
    this.selectGif = this.selectGif.bind(this);
  }

  search = (query) => {
    // API call
    giphy('nE5e0lRHeSZr0DEAAT8QOVkX4cZWGQQx').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  selectGif(id) {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    // const gifs = [
    //   { id: "dz1b117ztVkHBG6b6p" },
    //   { id: "V3pYaPO9QdLPO" }
    // ];

    return (
      <div>
        <div className="left-scene">
          <div className="search-section">
            <FontAwesomeIcon icon="search" className="search-icon" />
            <SearchBar searchFunction={this.search} />
          </div>
          <div className="selected-gif">
            <Gif id= {this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;