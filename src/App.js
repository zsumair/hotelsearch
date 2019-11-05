import React, { useState, useEffect } from 'react';
import useFetch from './hooks/useFetch';
import Hotel from './hotel';
// import Reviews from './reviews';

function App() {
  const [count, setCount] = useState(5);
  const [show, setShow] = useState(false);

  const [isLoading, fetchedData, error] = useFetch(
    `http://fake-hotel-api.herokuapp.com/api/hotels?count=${count}`,
    []
  );

  const hotels = fetchedData ? fetchedData : [];

  const loading = <p>Loading....</p>;

  const noData = <p>Error Loading Data</p>;
  console.log(error);
  return (
    <div className='container'>
      {error
        ? noData
        : isLoading
        ? loading
        : hotels.map(hotel => (
            <div className='box' key={hotel.id}>
              {console.log(hotel)}
              <Hotel hotel={hotel} images={hotel.images[0]} />
            </div>
          ))}
    </div>
  );
}

export default App;
