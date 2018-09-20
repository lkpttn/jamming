import React from 'react';
import './List.css';

import Result from '../Result/Result';

class List extends React.Component {
  render() {
    return (
      <ul className="song-list">
        <Result />
        <Result />
        <Result />
      </ul>
    );
  }
}

export default List;
