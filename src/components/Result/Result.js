import React from 'react';
import './Result.css';

class Result extends React.Component {
  render() {
    return (
      <li className="result">
        <div className="song-name">Hear the Wind Sing</div>
        <div className="artist-name">GFRIEND</div>
        <div className="album-name">The Awakening</div>
        <div className="button">+</div>
      </li>
    );
  }
}

export default Result;
