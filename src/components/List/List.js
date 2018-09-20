import React from 'react';
import './List.css';

import Result from '../Result/Result';

class List extends React.Component {
  render() {
    return (
      <ul className="song-list">
        <li>
          <Result />
        </li>
      </ul>
    );
  }
}

export default List;
