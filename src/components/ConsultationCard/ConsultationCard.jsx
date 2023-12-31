import React from "react";

import "./consultationCard.css";

const ConsultationCard = ({ img, title, description }) => {
  return (
    <div className="consultation-card consultation-card__row">
      <img
        className="consultation-card__img consultation-card__col"
        src={img}
        alt=""
      />
      <div className="consultation-card__texts consultation-card__col">
        <h1 className="consultation-card__text__title font-bold">{title}</h1>
        <p className="consultation-card__text__desc">{description}</p>
      </div>
    </div>
  );
};

export default ConsultationCard;
