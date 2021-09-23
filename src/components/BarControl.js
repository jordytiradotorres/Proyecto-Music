import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faPlay,
  faVolumeOff,
} from "@fortawesome/free-solid-svg-icons";

const BarControl = () => {
  return (
    <section className="BarControl">
      <div className="BarControl__image">
        <figure>
          <img src="http://via.placeholder.com/100x100" alt="artist" />
        </figure>
        <div>
          <h3>Canción</h3>
          <h5>Artista - Álbum</h5>
        </div>
      </div>

      <div className="BarControl__iconsPlay">
        <span className="IconLeft">
          <FontAwesomeIcon icon={faCaretLeft} />
        </span>
        <span className="IconPlay">
          <FontAwesomeIcon icon={faPlay} />
        </span>
        <span className="IconRight">
          <FontAwesomeIcon icon={faCaretRight} />
        </span>
      </div>

      <div className="BarControl__iconVolume">
        <input type="range" />
        <span>
          <FontAwesomeIcon icon={faVolumeOff} />
        </span>
      </div>
    </section>
  );
};

export default BarControl;
