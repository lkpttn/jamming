import React from 'react';
import './PlaylistList.css';

import List from '../List/List';

class PlaylistList extends React.Component {
  render() {
    return (
      <div className={this.props.className}>
        <h2>Playlist</h2>
        <List />
        <button>Save to Spotify</button>
      </div>
    );
  }
}

export default PlaylistList;
