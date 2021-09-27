import React, { useRef, useState } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../components/SearchBar";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import Message from "../components/Message";
import VideoDetails from "../components/Video/VideoDetails";
import VideoResults from "./../components/Video/VideoResults";

const Songs = () => {
  const [searchText, setSearchText] = useState("");
  const inputSearch = useRef(null);

  let url = `https://api.deezer.com/search?q=track:"${
    searchText || "someone like you"
  }"&limit=10&output=jsonp`;

  const { data, loading, error } = useFetch(url);

  const handleForm = (e) => {
    e.preventDefault();

    if (inputSearch.current.value.length >= 3) {
      setSearchText(inputSearch.current.value.toLowerCase().trim());
    } else {
      alert("escribe minimo 3 letras");
    }

    inputSearch.current.value = "";
  };

  return (
    <>
      {loading && <Loader />}
      {error && <Message />}
      <main className="MainContent">
        <header className="MainContent__header">
          <SearchBar handleForm={handleForm} inputSearch={inputSearch} />

          <div className="User">
            <span className="User__icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            <h3 className="User__name">Francisca M.</h3>
          </div>
        </header>

        {data !== null && data.length === 0 ? (
          <VideoDetails data={data} display="none" />
        ) : (
          <VideoDetails data={data} />
        )}

        <VideoResults data={data} />
      </main>
    </>
  );
};

export default Songs;
