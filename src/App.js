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
        this.addToPlaylist = this.addToPlaylist.bind(this);
    }

    searchSpotify(term) {
        Spotify.search(term).then(tracks => {
            console.log('Setting the state to the search result');
            this.setState({ results: tracks });
        });
    }

    addToPlaylist(item) {
        // Adds a Result item to the playlist state item, adding it to the new columm
        console.log(`Add ${item.trackName} to playlist`);
        this.setState({
            playlist: [...this.state.playlist, item],
        });
    }

    removeFromPlaylist() {}

    render() {
        return (
            <div className="App">
                <Searchbar searchSpotify={this.searchSpotify} />
                <div className="search-results">
                    <div className="column">
                        <h2>Results</h2>
                        <List
                            results={this.state.results}
                            type="results"
                            addToPlaylist={this.addToPlaylist}
                        />
                    </div>
                    <PlaylistList
                        className="column"
                        results={this.state.playlist}
                        removeFromPlaylist={this.removeFromPlaylist}
                    />
                </div>
            </div>
        );
    }
}

export default App;
