import React from "react";
import foxbelIcon from "../images/foxbel-music.png";

const BarNavigation = () => {
  return (
    <aside className="BarNavigation">
      <figure className="BarNavigation__image">
        <img src={foxbelIcon} alt="foxbel icon" />
      </figure>

      <div className="BarNavigation__type">
        <h2>Mi Librería</h2>

        <div>
          <a href="/">Recientes</a>
          <a href="/">Artistas</a>
          <a href="/">Albums</a>
          <a href="/">Canciones</a>
          <a href="/">Estaciones</a>
        </div>
      </div>

      <div className="BarNavigation__type">
        <h2>Playlist</h2>

        <div>
          <a href="/">Metal</a>
          <a href="/">Para Bailar</a>
          <a href="/">Rock 90s</a>
          <a href="/">Baladas</a>
        </div>
      </div>
    </aside>
  );
};

export default BarNavigation;
