import React, { Component } from 'react';
import './App.css';

import Searchbar from './components/Searchbar/SearchBar';
import ResultList from './components/ResultList/ResultList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar />
        <div className="search-results clearfix">
          <ResultList className="column" />
          <div className="column">Playlist</div>
        </div>
      </div>
    );
  }
}

export default App;
