import React from 'react';
import './Card.style.scss';

const Card = ({ name, id, email }) => {
  return (
    <div className="Card">
      <img className="Card__monster-img" src={`https://robohash.org/${id}/?set=set2&200x200`} alt={`robo-card-${id}`}></img>
      <h3 className="Card__monster-name">{name}</h3>
      <p className="Card__monster-email">{email}</p>
    </div>
  )
}

export default Card;