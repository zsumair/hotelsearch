import React, { useState } from 'react';
// import useFetch from './hooks/useFetch';
import Reviews from './reviews';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';

function Hotel({ hotel, images }) {
  const {
    id,
    name,
    country,
    city,
    description,
    price,
    date_start,
    date_end,
    stars
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
              <span style={{ color: '#537ec5' }}>{city}</span> -{' '}
              <span>{country}</span>
            </div>
            <div>
              <Rater total={5} rating={stars} interactive={false} />
              {/* <h3>&#x2605;</h3> */}
            </div>
          </div>
          <p className='hotel-item__description'>{description}</p>
          <div className='hotel-item__bottom'>
            <div className='hotel-item__reviewbtn'>
              <button onClick={handleReviews} className='button'>
                {show ? 'Hide Reviews' : 'Show Reviews'}
              </button>
            </div>
            <div className='hotel-item__details'>
              <p className='hotel-item__price'>{price} &#8364;</p>
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
