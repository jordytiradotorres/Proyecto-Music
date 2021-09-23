import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ searchText, handleForm, handleChange }) => {
  return (
    <form className="SearchBar" onSubmit={handleForm}>
      <div className="SearchBar__field">
        <input
          type="search"
          value={searchText}
          onChange={handleChange}
          placeholder="Buscar..."
        />
        <button type="submit" onClick={handleForm}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
