import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faPlay } from "@fortawesome/free-solid-svg-icons";

const VideoCard = ({ display, children }) => {
  return (
    <div className="Card">
      <figure className="Card__image">
        <img src="http://via.placeholder.com/250x250" alt="video img" />
        <span className="Card__iconPlay">
          <FontAwesomeIcon icon={faPlay} />
        </span>
        <span className="Card__iconEllipsis" style={{ display: display }}>
          <FontAwesomeIcon icon={faEllipsisV} />
        </span>
      </figure>

      {children}
    </div>
  );
};

export default VideoCard;
