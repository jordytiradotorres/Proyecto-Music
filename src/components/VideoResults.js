import Title from "./Title";
import VideoCard from "./VideoCard";

const VideoResults = ({ data }) => {
  return (
    <>
      {data !== null && data.length !== 0 ? (
        <Title text="Resultados" colorText="#E86060" />
      ) : (
        <Title text="No se encontraron resultados" colorText="#E86060" />
      )}

      <section className="MainContent__videoResults">
        {data !== null &&
          data.map((item, index) => <VideoCard item={item} key={index} />)}
      </section>
    </>
  );
};

export default VideoResults;
