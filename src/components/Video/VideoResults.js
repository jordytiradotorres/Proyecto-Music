import Title from "../Title";
import { useRef, useState } from "react";
import BarControl from "../Bar/BarControl";
import VideoCard from "./VideoCard";

const VideoResults = ({ data }) => {
  const [currentItem, setCurrentItem] = useState(null);
  const barControl = useRef(null);

  const handleClickSong = (item) => {
    console.log(item);
    setCurrentItem(item);

    barControl.current.style.display = "flex";
  };

  return (
    <>
      {data !== null && data.length !== 0 ? (
        <Title text="Resultados" colorText="#E86060" />
      ) : (
        <Title text="No se encontraron resultados" colorText="#E86060" />
      )}

      <section className="MainContent__videoResults animate__animated animate__fadeIn">
        {data !== null &&
          data.map((item, index) => (
            <VideoCard
              item={item}
              key={index}
              handleClickSong={handleClickSong}
            />
          ))}
      </section>

      <BarControl currentItem={currentItem} barControl={barControl} />
    </>
  );
};

export default VideoResults;
