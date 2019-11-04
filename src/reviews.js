import React, { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';

function Reviews({ id }) {
  // const [show, setShow] = useState(false);
  // const [hotelReview, setHotelReview] = useState(null);

  const [isLoading, fetchedData] = useFetch(
    `http://fake-hotel-api.herokuapp.com/api/reviews?hotel_id=${id}`,
    []
  );

  const reviews = fetchedData ? fetchedData : [];
  const loading = <p>Loading....</p>;

  console.log(reviews);

  return (
    <>
      <ul className='review-list'>
        {isLoading
          ? loading
          : reviews.map((review, index) =>
              review.length === 0 ? (
                <li>No Reviews here</li>
              ) : (
                <li key={index}>{review.comment}</li>
              )
            )}
      </ul>
    </>
  );
}

export default Reviews;
