import React, { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';

function Hotel({ id, name, country, city }) {
  // const { reviews } = useFetch(id);
  // const [review, setReview] = useState([]);
  return (
    <>
      {id} / {name} / {country} / {city}
    </>
  );
}

export default Hotel;
