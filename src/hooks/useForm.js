import { useRef, useState } from "react";

const useForm = () => {
  const [searchText, setSearchText] = useState("");
  const inputSearch = useRef(null);

  const reset = () => {
    setSearchText("");
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (inputSearch.current.value.length >= 2) {
      setSearchText(inputSearch.current.value.toLowerCase().trim());
    } else {
      alert("escribe minimo 3 letras");
    }

    reset();
  };

  return [searchText, inputSearch, handleForm];
};

export default useForm;
