import { faEllipsisV, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "../components/Loader";
import Message from "../components/Message";
import useFetch from "../hooks/useFetch";

const Seasons = () => {
  let url = `https://api.deezer.com/radio&output=jsonp`;
  const { data, loading, error } = useFetch(url);

  const newData = data !== null && data.slice(0, 10);

  return (
    <>
      {loading && <Loader />}
      {error && <Message />}
      <main className="MainContent">
        <section className="MainContent__videoResults">
          {data !== null &&
            newData.map((item, index) => (
              <div className="Card" key={index}>
                <figure className="Card__image">
                  <img
                    src={item !== undefined && item.picture_medium}
                    alt="video img"
                  />
                  <span className="Card__iconPlay">
                    <FontAwesomeIcon icon={faPlay} />
                  </span>
                  <span className="Card__iconEllipsis">
                    <FontAwesomeIcon icon={faEllipsisV} />
                  </span>
                </figure>

                <div className="Card__body">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
        </section>
      </main>
    </>
  );
};

export default Seasons;
