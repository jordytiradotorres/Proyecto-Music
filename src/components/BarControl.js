import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
  faPlay,
  faPause,
  faVolumeOff,
  faVolumeUp,
  faVolumeDown,
} from "@fortawesome/free-solid-svg-icons";

const BarControl = ({ currentItem, barControl }) => {
  const inputRange = useRef(null);
  const play = useRef(null);
  const pause = useRef(null);
  const audio = useRef(null);
  const volumeOff = useRef(null);
  const volumeUp = useRef(null);
  const volumeDown = useRef(null);

  const [volumeValue, setVolumeValue] = useState(0.5);

  const handleClickPlay = (e) => {
    pause.current.style.display = "block";
    play.current.style.display = "none";
    audio.current.play();
  };

  const handleClickPause = () => {
    pause.current.style.display = "none";
    play.current.style.display = "block";
    audio.current.pause();
  };

  const updateVolume = () => {
    audio.current.volume = inputRange.current.value;
    setVolumeValue(audio.current.volume);

    if (audio.current.volume > volumeValue) {
      volumeOff.current.style.display = "none";
      volumeUp.current.style.display = "block";
      volumeDown.current.style.display = "none";
    } else {
      volumeOff.current.style.display = "none";
      volumeUp.current.style.display = "none";
      volumeDown.current.style.display = "block";
    }
  };

  const handleTimeUpdate = (e) => {
    let currentTime = audio.current.currentTime;
    let duration = audio.current.duration;

    let percentage = Math.floor((currentTime * 100) / duration);

    if (percentage === 100 || currentTime === 0) {
      play.current.style.display = "block";
      pause.current.style.display = "none";
    }
  };

  return (
    <section className="BarControl" ref={barControl}>
      <div className="BarControl__image">
        <figure>
          <img
            src={currentItem !== null && currentItem.artist.picture_medium}
            alt="artist"
          />
        </figure>
        <div>
          <h3>{currentItem !== null && currentItem.title}</h3>
          <h5>
            {currentItem !== null && currentItem.artist.name} -{" "}
            {currentItem !== null && currentItem.album.title}
          </h5>
        </div>
      </div>

      <div className="BarControl__iconsPlay">
        <span className="IconLeft">
          <FontAwesomeIcon icon={faCaretLeft} />
        </span>
        <span className="IconPlay" ref={play}>
          <FontAwesomeIcon icon={faPlay} onClick={handleClickPlay} />
        </span>
        <span className="IconPause" ref={pause} style={{ display: "none" }}>
          <FontAwesomeIcon icon={faPause} onClick={handleClickPause} />
        </span>

        <audio
          src={currentItem !== null && currentItem.preview}
          ref={audio}
          onTimeUpdate={handleTimeUpdate}
        ></audio>

        <span className="IconRight">
          <FontAwesomeIcon icon={faCaretRight} />
        </span>
      </div>

      <div className="BarControl__iconVolume">
        <input
          ref={inputRange}
          type="range"
          value={volumeValue}
          min="0"
          max="1"
          step="0.1"
          onInput={updateVolume}
        />
        <span ref={volumeOff}>
          <FontAwesomeIcon icon={faVolumeOff} />
        </span>
        <span ref={volumeUp} style={{ display: "none" }}>
          <FontAwesomeIcon icon={faVolumeUp} />
        </span>
        <span ref={volumeDown} style={{ display: "none" }}>
          <FontAwesomeIcon icon={faVolumeDown} />
        </span>
      </div>
    </section>
  );
};

export default BarControl;
