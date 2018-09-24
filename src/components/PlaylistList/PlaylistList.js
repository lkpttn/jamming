import React from 'react';
import './PlaylistList.css';

import List from '../List/List';
import Spotify from '../../util/Spotify';

class PlaylistList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: 'Playlist',
        };

        this.saveToSpotify = this.saveToSpotify.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    saveToSpotify() {
        Spotify.savePlaylist(this.props.results, this.state.term);
    }

    handleTermChange(event) {
        // When someone types (an event), change the state to that value.
        this.setState({ term: event.target.value });
    }

    render() {
        return (
            <div className={this.props.className}>
                <h2>
                    <input
                        onChange={this.handleTermChange}
                        type="text"
                        placeholder="Playlist"
                    />
                </h2>
                <List
                    results={this.props.results}
                    type="playlist"
                    removeFromPlaylist={this.props.removeFromPlaylist}
                />
                <button className="save-button" onClick={this.saveToSpotify}>
                    Save to Spotify
                </button>
            </div>
        );
    }
}

export default PlaylistList;
