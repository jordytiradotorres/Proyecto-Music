import fetchJsonp from "fetch-jsonp";
import { useEffect, useRef, useState } from "react";

const useFetch = (url) => {
  const isMounted = useRef(true);

  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    fetchJsonp(url)
      .then((response) => response.json())
      .then((data) => {
        if (isMounted.current) {
          setState({
            loading: false,
            error: null,
            data: data.data,
          });
        }
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: "No se pudo cargar la informacion",
        });
      });
  }, [url]);

  return state;
};

export default useFetch;
