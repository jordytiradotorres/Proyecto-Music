import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import VideoCard from "./VideoCard";

const VideoDetails = () => {
  return (
    <section className="MainContent__videoDetails">
      <VideoCard display="none" />

      <div className="Information">
        <h3>Adele 21</h3>
        <h5>
          Lo mejor de Adele <span>321, 123 seguidores</span>
        </h5>

        <p>
          Adele Laurie Blue Adkins (Tottenham, Londres, Inglaterra, 5 de mayo de
          1988), conocida simplemente como Adele, es una cantante, compositora y
          multinstrumentista británica.8​
        </p>

        <div className="buttons">
          <button type="button" className="play">
            Reproducir
          </button>
          <button type="button" className="seguir">
            Seguir
          </button>
          <span>
            <FontAwesomeIcon icon={faEllipsisH} />
          </span>
        </div>
      </div>
    </section>
  );
};

export default VideoDetails;
