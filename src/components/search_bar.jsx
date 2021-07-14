import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBar extends Component {
  handleUpdate = (event) => {
    //  console.log(event.target.value);
    this.props.searchFunction(event.target.value);
  }

  render() {
    return (
      <div className="searchbar">
        {/* <FontAwesomeIcon icon="search" /> */}
        <input 
          type="text" 
          className="form-control form-search"
          onChange={this.handleUpdate} 
        />
      </div>
    );
  }
}

export default SearchBar;