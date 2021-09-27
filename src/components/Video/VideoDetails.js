import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import VideoPresentation from "./VideoPresentation";

const VideoDetails = ({ data, display }) => {
  return (
    <section
      className="MainContent__videoDetails animate__animated animate__fadeIn"
      style={{ display }}
    >
      <VideoPresentation data={data} />

      <div className="Information">
        <h3>{data !== null && data[0]?.album.title}</h3>
        <h5>
          Lo mejor de {data !== null && data[0]?.album.title}{" "}
          <span>5000 seguidores</span>
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
