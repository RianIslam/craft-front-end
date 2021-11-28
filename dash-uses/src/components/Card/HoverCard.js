import React from "react";

const HoverCard = ({ item: { title, id, img, content } }) => {
  return (
    <div className="col-md-6 p-3">
      <div class="card">
        <div class="slide slide1">
          <div class="content">
            <div class="icon">
              <i class="fa fa-user-circle" aria-hidden="true"></i>
            </div>
          </div>
        </div>

        <div class="slide slide2">
          <div class="content">
            <h3>Hello there!</h3>

            <p>Trust yourself and keep going.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverCard;
