import React from "react";
import { Icon } from "@iconify/react";
import mapMarkerStar from "@iconify-icons/mdi/map-marker-star";

const Pin = (props) => {
  return (
    <div className="pin">
      <Icon icon={mapMarkerStar} className="pin-icon" />
      <p className="pin-text">{props.text}</p>
    </div>
  );
};

export default Pin;
