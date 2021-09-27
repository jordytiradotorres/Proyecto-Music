import React from "react";
import Loader from "../components/Loader";
import Message from "../components/Message";
import useFetch from "./../hooks/useFetch";
import VideoDetails from "./../components/Video/VideoDetails";
import VideoResults from "./../components/Video/VideoResults";

const Metal = () => {
  let url = `https://api.deezer.com/search?q=genre:"metal"&limit=10&output=jsonp`;

  const { data, loading, error } = useFetch(url);

  return (
    <>
      {loading && <Loader />}
      {error && <Message />}

      <main className="MainContent">
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

export default Metal;
