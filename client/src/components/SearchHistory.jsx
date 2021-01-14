import React from 'react';

import capitalize from '../utils/capitalize';

const SearchHistory = ({ history }) => {

  const sortedHistory = history.reverse();
  
  return (
    <div className='wrapper history-wrapper text-center'>
      <h4 className='mt-0 mb-1 '>Search History</h4>
      <p className='my-1 text-center'>
        We only collect your latest <strong>five</strong> searches.
      </p>
      <ul className='history-list'>
        {sortedHistory.map((item, index) => (
          <li key={index} className='history-item'>
            {index === 0 
              ? (
                <>
                  <strong>{capitalize(item)} </strong>
                  <small className='text-white'> - Most recent.</small> 
                </>
              )
              : (
                capitalize(item)
              )
            }
          </li>
        ))}
      </ul>
      <small className='m-0 text-center'>
        Your search history gets deleted if you delete your browser's history or cache.
      </small>
    </div>
  );
};

export default SearchHistory;