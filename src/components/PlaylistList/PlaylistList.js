import React from 'react';
import './PlaylistList.css';

import List from '../List/List';
import Spotify from '../../util/Spotify';

class PlaylistList extends React.Component {
    constructor(props) {
        super(props);

        this.saveToSpotify = this.saveToSpotify.bind(this);
    }

    saveToSpotify() {
        Spotify.savePlaylist(this.props.results);
    }
    render() {
        return (
            <div className={this.props.className}>
                <h2>Playlist</h2>
                <List
                    results={this.props.results}
                    type="playlist"
                    removeFromPlaylist={this.props.removeFromPlaylist}
                />
                <button onClick={this.saveToSpotify}>Save to Spotify</button>
            </div>
        );
    }
}

export default PlaylistList;
