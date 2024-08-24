import { useContext, useEffect, useRef } from "react";
import { Grid, TextField, Box } from "@mui/material";
import SingleCard from "../components/SingleCard/SingleCard";
import { useNavigate } from "react-router-dom";
import { FilmsContext } from "../context/FilmsContext";

function Home() {
  const { data, search, setSearch, error } = useContext(FilmsContext);
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/films/${id}`);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Box
      sx={{ backgroundColor: "#141414", minHeight: "100vh", padding: "20px" }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box display={"flex"} justifyContent={"center"}>
            <TextField
              inputRef={searchRef}
              id="outlined-controlled"
              label="Search"
              value={search}
              onChange={handleSearch}
            />
          </Box>
        </Grid>
        {error && <div>Error loading data...</div>}
        {data.length > 0 ? (
          data.map((responseShow) => {
            const { show } = responseShow;
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={show.id}>
                <SingleCard
                  id={show.id}
                  title={show.name}
                  description={show.summary}
                  image={show.image?.original ?? ""}
                  status={show.status}
                  handleClick={handleCardClick}
                />
              </Grid>
            );
          })
        ) : (
          <div>No results found.</div>
        )}
      </Grid>
    </Box>
  );
}

export default Home;
