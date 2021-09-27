import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faPlay } from "@fortawesome/free-solid-svg-icons";

const VideoCard = ({ item, handleClickSong }) => {
  return (
    <div className="Card">
      <figure className="Card__image">
        <img
          src={item !== undefined && item?.artist.picture_medium}
          alt="video img"
        />
        <span className="Card__iconPlay" onClick={() => handleClickSong(item)}>
          <FontAwesomeIcon icon={faPlay} />
        </span>
        <span className="Card__iconEllipsis">
          <FontAwesomeIcon icon={faEllipsisV} />
        </span>
      </figure>

      <div className="Card__body">
        <h3>{item.title}</h3>
        <h5>{item.artist.name}</h5>
      </div>
    </div>
  );
};

export default VideoCard;
