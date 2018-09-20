import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    // This is what we'll pass to Spotify API
    // It needs to change when someone types something new in our field
    this.state = {
      term: '',
    };

    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleTermChange(event) {
    // When someone types (an event), change the state to that value.
    this.setState({ term: event.target.value });
  }

  handleSearch(event) {
    // This runs a function passed by the parent to alter it's state
    this.props.searchSpotify(this.state.term);
    event.preventDefault();
  }

  render() {
    return (
      <div className="searchbar">
        <div className="searchbar field">
          {/* onChange function sets a state change of the term to search for */}
          <input
            placeholder="Search for a song, artist or album"
            onChange={this.handleTermChange}
          />
          {/* onClick sends this component's state back to the parent via searchSpotify */}
          <button className="searchbar button" onClick={this.handleSearch}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
