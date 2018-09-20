import React, { Component } from 'react';
import './App.css';

import Searchbar from './components/Searchbar/SearchBar';
import List from './components/List/List';
import PlaylistList from './components/PlaylistList/PlaylistList';
import Spotify from './util/Spotify';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      playlist: [],
    };

    this.searchSpotify = this.searchSpotify.bind(this);
  }

  searchSpotify(term) {
    // References the Spotify utility to make a request
    // using the terms fed by the child object that gets passed this prop
    console.log('Searching for ' + term);
    Spotify.search(term).then(tracks => {
      console.log('Setting the state to the search result');
      this.setState({ results: tracks });
    });
  }

  render() {
    return (
      <div className="App">
        <Searchbar searchSpotify={this.searchSpotify} />
        <div className="search-results">
          <div className="column">
            <h2>Results</h2>
            <List results={this.state.results} type="results" />
          </div>
          <PlaylistList className="column" results={this.state.playlist} />
        </div>
      </div>
    );
  }
}

export default App;
