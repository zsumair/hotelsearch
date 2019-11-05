import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import useFetch from './hooks/useFetch';

function Reviews({ id }) {
  const [isLoading, fetchedData] = useFetch(
    `http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=${id}`,
    [id]
  );

  const reviews = fetchedData ? fetchedData : [];
  const loading = (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Loader
        type='Bars'
        color='#35495e'
        height={40}
        width={40}
        timeout={4000} //3 secs
      />
    </div>
  );

  return (
    <>
      <ul className='review-list'>
        {isLoading ? (
          loading
        ) : reviews.length === 0 ? (
          <li className='review-list__item'>
            <p>No Reviews here</p>
          </li>
        ) : (
          reviews.map((review, index) => (
            <li key={index} className='review-list__item'>
              <span>{review.positive == true ? `😀` : `😞`}</span>
              <p> {review.comment}</p>
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default Reviews;
