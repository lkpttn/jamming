import React, { Component } from 'react';
import './App.css';

import Searchbar from './components/Searchbar/SearchBar';
import List from './components/List/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar />
        <div className="search-results">
          <div className="column">
            <h2>Results</h2>
            <List />
          </div>
          <div className="column">Playlist</div>
        </div>
      </div>
    );
  }
}

export default App;
