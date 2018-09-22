import React from 'react';
import './List.css';

import Result from '../Result/Result';

class List extends React.Component {
    render() {
        // If this is the results list, add the addToPlaylist method
        let method;
        if (this.props.type === 'results') {
            method = this.props.addToPlaylist;
        } else if (this.props.type === 'playlist') {
            method = this.props.removeFromPlaylist;
        }

        return (
            <ul className="song-list">
                {this.props.results.map(result => {
                    return (
                        <Result
                            key={result.id}
                            id={result.id}
                            uri={result.uri}
                            trackName={result.trackName}
                            artistName={result.artistName}
                            albumName={result.albumName}
                            type={this.props.type}
                            method={method}
                        />
                    );
                })}
            </ul>
        );
    }
}

export default List;
