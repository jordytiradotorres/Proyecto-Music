import React from "react";
import { NavLink } from "react-router-dom";
import foxbelIcon from "../../images/foxbel-music.png";
import Title from "../Title";

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
          <NavLink to="/" activeClassName="active" exact>
            Recientes
          </NavLink>
          <NavLink to="/artists" activeClassName="active" exact>
            Artistas
          </NavLink>
          <NavLink to="/albums" activeClassName="active" exact>
            Albums
          </NavLink>
          <NavLink to="/songs" activeClassName="active" exact>
            Canciones
          </NavLink>
          <NavLink to="/seasons" activeClassName="active" exact>
            Estaciones
          </NavLink>
        </div>
      </div>

      <div className="BarNavigation__type">
        <Title text="Playlist" />

        <div>
          <NavLink to="/metal" activeClassName="active" exact>
            Metal
          </NavLink>
          <NavLink to="/dance" activeClassName="active" exact>
            Para Bailar
          </NavLink>
          <NavLink to="/rock" activeClassName="active" exact>
            Rock 90s
          </NavLink>
          <NavLink to="/balads" activeClassName="active" exact>
            Baladas
          </NavLink>
        </div>
      </div>
    </aside>
  );
};

export default BarNavigation;
