import React, { useState, useEffect } from 'react';
import './style.css';
import useFetch from './hooks/useFetch';
import Hotel from './hotel';
import Reviews from './reviews';

function App() {
  const [count, setCount] = useState(5);

  const [isLoading, fetchedData] = useFetch(
    `http://fake-hotel-api.herokuapp.com/api/hotels?count=${count}`,
    []
  );

  const hotels = fetchedData ? fetchedData : [];

  const loading = <p>Loading....</p>;

  return (
    <>
      {isLoading
        ? loading
        : hotels.map(hotel => (
            <div className='box' key={hotel.id}>
              <Hotel
                id={hotel.id}
                name={hotel.name}
                country={hotel.country}
                city={hotel.city}
              />
              <Reviews id={hotel.id} />
            </div>
          ))}
    </>
  );
}

export default App;
