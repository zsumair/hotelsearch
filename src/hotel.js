import React, { useState } from 'react';
// import useFetch from './hooks/useFetch';
import Reviews from './reviews';

function Hotel({ hotel, images }) {
  const {
    id,
    name,
    country,
    city,
    description,
    price,
    date_start,
    date_end
  } = hotel;

  const [show, setShow] = useState(false);

  const handleReviews = () => {
    setShow(!show);
  };

  const getFormat = date => {
    let geDate = new Date(date);
    return geDate.toLocaleDateString('de-DE');
  };

  return (
    <>
      <div className='hotel-item'>
        <div className='hotel-item__img'>
          {/* <p>{images}</p> */}
          <img src={images} width='400' height='300' />
        </div>
        <div className='hotel-item__info'>
          <div className='hotel-item__block'>
            <div>
              <h2>{name}</h2>
              <span>{city}</span> - <span>{country}</span>
            </div>
            <div>
              <h3>Star Rating here</h3>
            </div>
          </div>
          <p>{description}</p>
          <div className='hotel-item__block'>
            <div>
              <button onClick={handleReviews} className='button'>
                {show ? 'Hide Reviews' : 'Show Reviews'}
              </button>
            </div>
            <div>
              <p>{price}</p>
              <span>
                {getFormat(date_start)} - {getFormat(date_end)}
              </span>
            </div>
          </div>
        </div>
      </div>
      {show ? <Reviews id={id} /> : ''}
    </>
  );
}

export default Hotel;
