import React from 'react';
import './Result.css';

class Result extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        // When clicked, send back a song object
        const clickResult = {
            albumName: this.props.albumName,
            artistName: this.props.artistName,
            id: this.props.id,
            uri: this.props.uri,
            trackName: this.props.trackName,
        };

        if (this.props.type === 'results') {
            this.props.method(clickResult);
        } else if (this.props.type === 'playlist') {
            this.props.method(clickResult);
        }
    }

    render() {
        return (
            <li className="result">
                <div className="song-name">{this.props.trackName}</div>
                <div className="button">
                    <a onClick={this.handleClick}>
                        {this.props.type === 'results' ? '+' : '-'}
                    </a>
                </div>
                <div className="artist-name">{this.props.artistName}</div>
                <div className="album-name">{this.props.albumName}</div>
            </li>
        );
    }
}

export default Result;
