import React from 'react';
import './ResultList.css';

import Result from '../Result/Result';

class ResultList extends React.Component {
  render() {
    return (
      <div className="resultlist">
        <h2>Results</h2>
        {/* Put result <li>s here */}
        <ul>
          <li>
            <Result />
          </li>
          <li>
            <Result />
          </li>
        </ul>
      </div>
    );
  }
}

export default ResultList;
