import React, { Component } from 'react';
import './App.css';

import Searchbar from './components/Searchbar/SearchBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searchbar />
        <div>Results</div>
        <div>Playlist</div>
      </div>
    );
  }
}

export default App;
