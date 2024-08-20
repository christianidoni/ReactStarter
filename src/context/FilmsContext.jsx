import { createContext, useEffect, useState } from "react";
import axios from "axios";

const FilmsContext = createContext({});

function FilmsProvider({ children }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleRequest = async () => {
      try {
        const response = await axios.get(
          `https://api.tvmaze.com/search/shows?q=${search}`
        );
        setData(response.data);
      } catch (err) {
        setError(err);
      }
    };
    if (!search) {
      handleRequest();
    } else {
      if (search.length >= 3) {
        handleRequest();
      } else if (search.length === 0) {
        setData([]);
      }
    }
  }, [search]);

  const filmsProps = {
    data,
    search,
    setSearch,
    error,
  };

  return (
    <FilmsContext.Provider value={filmsProps}>{children}</FilmsContext.Provider>
  );
}

export { FilmsContext, FilmsProvider };
