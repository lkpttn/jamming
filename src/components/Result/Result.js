import React from 'react';
import './Result.css';

class Result extends React.Component {
  render() {
    return (
      <li className="result">
        <div className="song-name">{this.props.trackName}</div>
        <div className="artist-name">{this.props.artistName}</div>
        <div className="album-name">{this.props.albumName}</div>
        <div className="button">+</div>
      </li>
    );
  }
}

export default Result;
