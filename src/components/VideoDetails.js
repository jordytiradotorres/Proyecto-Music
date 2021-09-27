import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import CardPresentation from "./CardPresentation";

const VideoDetails = ({ data, display }) => {
  return (
    <section className="MainContent__videoDetails" style={{ display }}>
      <CardPresentation data={data} />

      <div className="Information">
        <h3>{data !== null && data[0]?.artist.name}</h3>
        <h5>
          Lo mejor de {data !== null && data[0].artist.name}{" "}
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
