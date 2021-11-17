import React from "react";
import "./HexagonCard.css";
const HexagonCard = ({
  item: {
    content,
    title,
    id,
    img,
    btnContent,
    index,
    iconTwitter,
    iconFacebook,
    iconLinkedin,
    iconInsta,
  },
}) => {
  return (
    <div className="col-md-3 col-sm-12 col-lg-3">
      <div className="box-container">
        <div className={`${(id + 1) % 2 === 0 ? "box" : "box-upper"}`}>
          <div>
            <h3 className="title">{title}</h3>
            <span className="counter">hel</span>
          </div>
        </div>
      </div>

      <div>
        <div>
          <img className="img-fluid rounded" src={img} alt="" />
        </div>
        <div>
          <div className="leadIcon">
            <h5 className="rounded-circle iconDesign text-white ">
              {iconTwitter}
            </h5>
            <h5 className="rounded-circle mx-2 iconDesign text-white ">
              {iconFacebook}
            </h5>
            <h5 className="rounded-circle mx-2 iconDesign text-white ">
              {iconLinkedin}
            </h5>
            <h5 className="rounded-circle iconDesign text-white ">
              {iconInsta}
            </h5>
          </div>
        </div>
        <div>
          <div className="py-3">
            <h5 className="text-center">{title}</h5>
            <p className="text-center">{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HexagonCard;
