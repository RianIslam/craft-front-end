import React from "react";
import "./HoverCard.scss";
const HoverCard = ({ item: { title, id, img, content } }) => {
  return (
    <div className="col-md-6">
      <div class="cards">
        <div class="card card-one">
          <h2 class="card-title">{title}</h2>
          <p class="date">{id}</p>
          <p class="description">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
