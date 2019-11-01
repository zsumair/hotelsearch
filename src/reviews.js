import React, { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';

function Reviews({ id, showReview }) {
  const [show, setShow] = useState(false);
  const [hotelReview, setHotelReview] = useState(null);

  const [isLoading, fetchedData] = useFetch(
    `http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=${id}`,
    [id]
  );

  const reviews = fetchedData ? fetchedData : [];
  const loading = <p>Loading....</p>;

  const handleReviews = id => {
    setShow(!show);
    // console.log(hotelReview);
  };

  return (
    <>
      <button onClick={() => handleReviews(id)}>
        {show ? 'Hide Reviews' : 'Show Reviews'}
      </button>
      <ul>
        {show
          ? isLoading
            ? loading
            : reviews.map((review, index) =>
                review.length === 0 ? (
                  <li>No Reviews here</li>
                ) : (
                  <li key={index}>{review.comment}</li>
                )
              )
          : ''}
      </ul>
    </>
  );
}

export default Reviews;
