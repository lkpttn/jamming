import React from 'react';
import './List.css';

import Result from '../Result/Result';

class List extends React.Component {
  render() {
    return (
      <ul className="song-list">
        {this.props.results.map(result => {
          return <Result key={result} />;
        })}
      </ul>
    );
  }
}

export default List;
