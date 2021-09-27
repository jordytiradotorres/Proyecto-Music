import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ inputSearch, handleForm }) => {
  return (
    <form className="SearchBar" onSubmit={handleForm}>
      <div className="SearchBar__field">
        <input type="search" placeholder="Buscar..." ref={inputSearch} />
        <button type="submit" onClick={handleForm}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
