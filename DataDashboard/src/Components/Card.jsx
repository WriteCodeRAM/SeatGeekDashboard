import React from 'react';
// import './Card.css';

function Card({title, image, price, link, date, type,textColor}) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      {/* <div className="card-content"> */}
        <h2 className="card-title">{title}</h2>
        <p className={textColor}>{type}</p>
        <p className='date'>{date}</p>
        <p className="card-price">Average Price: {price}</p>
        <a href={link} className="card-link">Buy tickets</a>
      {/* </div> */}
    </div>
  );
}

export default Card;
