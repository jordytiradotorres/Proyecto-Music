import React from "react";
import { Link } from "react-router-dom";
import foxbelIcon from "../images/foxbel-music.png";
import Title from "./Title";

const BarNavigation = () => {
  return (
    <aside className="BarNavigation">
      <figure className="BarNavigation__image">
        <a href="/">
          <img src={foxbelIcon} alt="foxbel icon" />
        </a>
      </figure>

      <div className="BarNavigation__type">
        <Title text="Mi Librería" />

        <div>
          <Link to="/">Recientes</Link>
          <Link to="/artists">Artistas</Link>
          <Link to="/albums">Albums</Link>
          <Link to="/songs">Canciones</Link>
          <Link to="/seasons">Estaciones</Link>
        </div>
      </div>

      <div className="BarNavigation__type">
        <Title text="Playlist" />

        <div>
          <Link to="/metal">Metal</Link>
          <Link to="/dance">Para Bailar</Link>
          <Link to="/rock">Rock 90s</Link>
          <Link to="/balads">Baladas</Link>
        </div>
      </div>
    </aside>
  );
};

export default BarNavigation;
