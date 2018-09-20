import React from 'react';
import './List.css';

import Result from '../Result/Result';

class List extends React.Component {
  render() {
    return (
      <ul className="song-list">
        {this.props.results.map(result => {
          return (
            <Result
              key={result.id}
              trackName={result.trackName}
              artistName={result.artistName}
              albumName={result.albumName}
            />
          );
        })}
      </ul>
    );
  }
}

export default List;
