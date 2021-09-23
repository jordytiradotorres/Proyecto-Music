import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import VideoDetails from "./VideoDetails";
import VideoResults from "./VideoResults";

const MainContent = () => {
  const [searchText, setSearchText] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  return (
    <main className="MainContent">
      <header className="MainContent__header">
        <SearchBar
          searchText={searchText}
          setSearchText={setSearchText}
          handleForm={handleForm}
          handleChange={handleChange}
        />

        <div className="User">
          <span className="User__icon">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <h3 className="User__name">Francisca M.</h3>
        </div>
      </header>

      <VideoDetails />

      <VideoResults />
    </main>
  );
};

export default MainContent;
