import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const VideoPresentation = ({ data }) => {
  return (
    <div className="Card">
      <figure className="Card__image">
        <img
          src={data !== null && data[0]?.album.cover_medium}
          alt="video img"
        />
        <span className="Card__iconPlay">
          <FontAwesomeIcon icon={faPlay} />
        </span>
      </figure>
    </div>
  );
};

export default VideoPresentation;
