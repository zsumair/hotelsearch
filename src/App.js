import React, { useState, useEffect } from 'react';
import Loader from 'react-loader-spinner';
import useFetch from './hooks/useFetch';
import Hotel from './hotel';

function App() {
  const [count, setCount] = useState(5);
  const [show, setShow] = useState(false);

  const [isLoading, fetchedData, error] = useFetch(
    `http://fake-hotel-api.herokuapp.com/api/hotels?count=${count}`,
    []
  );

  const hotels = fetchedData ? fetchedData : [];

  const loadHotels = () => {
    setShow(true);
  };

  const loading = (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Loader
        type='Bars'
        color='#35495e'
        height={50}
        width={50}
        timeout={3000} //3 secs
      />
    </div>
  );

  const noData = (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        top: '25%'
      }}
    >
      <h2 className='error'>Error Loading Data, Please Reload page</h2>
    </div>
  );

  return (
    <div className='container'>
      {show ? (
        isLoading ? (
          loading
        ) : hotels.error ? (
          noData
        ) : (
          hotels.map(hotel => (
            <div className='box' key={hotel.id}>
              {console.log(hotel)}
              <Hotel hotel={hotel} images={hotel.images[0]} />
            </div>
          ))
        )
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className='button' onClick={loadHotels}>
            Load Hotels
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
