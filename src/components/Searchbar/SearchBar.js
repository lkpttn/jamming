import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="searchbar">
        <div className="searchbar field">
          {/* onChange function sets a state change of the term to search for */}
          <input
            placeholder="Search for a song, artist or album"
            onChange="Function goes here"
          />
          <div className="searchbar button">
            {/* When the button is clicked, search Spotify for the terms in state */}
            <a onClick="Button here">Search</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
