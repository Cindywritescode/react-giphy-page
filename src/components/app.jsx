import React, { Component } from 'react';
import giphy from 'giphy-api';

import "./FontawsomeIcons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      searchTerm: "",
      gifs: [],
      selectedGifId: "5bdhq6YF0szPaCEk9Y" // null
    };
    this.search("cute");

    this.search = this.search.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.selectGif = this.selectGif.bind(this);
  }

  search = (query, page = 0) => {
    // API call
    giphy({
      https: true,
      apiKey: 'nE5e0lRHeSZr0DEAAT8QOVkX4cZWGQQx'
    }).search({
      q: query,
      rating: 'g',
      limit: 10,
      offset: 10 * page
    }, (error, result) => {
      this.setState({
        page,
        searchTerm: query,
        gifs: page > 0 ? this.state.gifs.concat(result.data) : result.data
      });
    });
  }

  selectGif(id) {
    this.setState({
      selectedGifId: id
    });
  }

  nextPage() {
    this.search(this.state.searchTerm, this.state.page + 1);
  }

  render() {
    const {
      gifs,
      selectedGifId
    } = this.state;

    return (
      <div>
        <div className="left-scene">
          <div className="search-section">
            <FontAwesomeIcon icon="search" className="search-icon" />
            <SearchBar searchFunction={this.search} />
          </div>
          <div className="selected-gif">
            <Gif id={selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} selectGif={this.selectGif} />
          {gifs.length > 0 && (
            <div align="center" className="my-3">
              <button className="btn btn-primary" type="button" onClick={this.nextPage}>
                Load more
              </button>
            </div>
          )}
          {gifs.length === 0 && (
            <div className="text-center">
              Oops, no results here.
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
