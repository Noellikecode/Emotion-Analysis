import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Spinner from './Spinner';



const Results = ({ results, processing }) => {
  if (processing) {
    return <Spinner />;
  }
  if (!processing && results && results.length > 0) {
    return (
      <div className="results">
        {results.length > 1 ? (
          <div>
            <p>I think...</p>
            {results.map((result, i) => (
              <div className="results__wrapper" key={i}>
                <div style={{ width: '300px' }}>
                  <p>
                    One of you is probably {result.gender}, is looking {result.expressions.asSortedArray()[0].expression} and looks around{' '}
                    {Math.round(result.age)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="results__wrapper">
            <div>
              <p>You look {results[0].expressions.asSortedArray()[0].expression}</p>
              <p>I think you are a {results[0].gender}</p>
            </div>
            <div className="results__emoji">
            </div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="results">
        <Spinner />
      </div>
    );
  }
};

export default Results;