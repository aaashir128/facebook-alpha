import { Avatar } from "@material-ui/core";
import React from "react";
import "./Story.css";

function Story({ image, name, profileSrc }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar className="story__avatar" src={profileSrc} />
      <h4>{name}</h4>
    </div>
  );
}

export default Story;