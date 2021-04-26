//src/components/Card.js
import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="card">
      <img
        className="card__img"
        alt="robots"
        src={`https://robohash.org/${id}?100x100`}
      />
      <div className="card__info">
        <h2 className="card__name">{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
