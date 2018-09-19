import React, { Component } from 'react';
import './App.css';

import Searchbar from './components/Searchbar/SearchBar';
import ResultList from './components/ResultList/ResultList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar />
        <ResultList />
        <div>Playlist</div>
      </div>
    );
  }
}

export default App;
