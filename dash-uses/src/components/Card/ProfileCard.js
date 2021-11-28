import React from "react";
import { data } from "../Data/Data";
import HoverCard from "./HoverCard";
import ProfileData from "./ProfileData";

const ProfileCard = () => {
  return (
    <div className="container">
       <div className="row ">
          {data.map((item, index) => (
            <HoverCard index={index} item={item} />
          ))}
        </div>

      <div className="py-5">
        <div className="row ">
          {data.map((item, index) => (
            <ProfileData index={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
