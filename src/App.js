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
        this.removeFromPlaylist = this.removeFromPlaylist.bind(this);
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

    removeFromPlaylist(item) {
        console.log(`Remove ${item.trackName} from playlist`);
        // Search the state playlist array for an item with a specific string
        // This should be very unique
        // Get the index of that element
        const stateItem = this.state.playlist.find(
            stateItem => stateItem.id === item.id,
        );
        const index = this.state.playlist.indexOf(stateItem);
        const tempPlaylistArray = this.state.playlist;
        if (index !== -1) {
            tempPlaylistArray.splice(index, 1);
            // Remove the element at that index from the playlist state
            this.setState({
                playlist: tempPlaylistArray,
            });
        }
    }

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
