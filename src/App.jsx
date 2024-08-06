import React from "react";
import "./App.css";
import { Grid } from "@mui/material";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navigation from "./components/Navigation/Navigation";
import SingleCard from "./components/SingleCard/SingleCard";
import Footer from "./components/Footer/Footer";

const mockData = [
  {
    id: 1,
    name: "Home Alone",
    image: "https://i.ytimg.com/vi/dzdpqRGA1qc/maxresdefault.jpg",
    time: "1hr: 50mins",
  },
  {
    id: 2,
    name: "Black Adam",
    image:
      "https://irecommend.ru/sites/default/files/product-images/514562/rtTxz36wSwCdofWyCau1lQ.jpg",
    time: "2hr: 10mins",
  },
  {
    id: 3,
    name: "Back to the Future",
    image:
      "https://static.posters.cz/image/750/%D0%9F%D0%BB%D0%B0%D0%BA%D0%B0%D1%82%D0%B8/back-to-the-future-1-21-gigawatts-i139465.jpg",
    time: "2hr: 50mins",
  },
  {
    id: 4,
    name: "Avengers",
    image:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/83/16/4e/83164ecb-be15-8647-8fc9-21886a3e08c6/00050087325459.rgb.jpg/1200x1200bb.jpg",
    time: "2hr:30mins",
  },
  {
    id: 5,
    name: "Grown Ups",
    image:
      "https://m.media-amazon.com/images/I/91cn2lVVzdL._AC_UF894,1000_QL80_.jpg",
    time: "1hr:42mins",
  },
  {
    id: 6,
    name: "Van Helsing",
    image:
      "https://m.media-amazon.com/images/M/MV5BODRmY2NhNDItOWViNi00OTIyLTk3YjYtYzY0YTFlMDg1YzQ0L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    time: "2hr:11mins",
  },
  {
    id: 7,
    name: "Saw III",
    image:
      "https://m.media-amazon.com/images/I/516TE58EAPL._UF1000,1000_QL80_.jpg",
    time: "1hr:40mins",
  },
];

const App = () => {
  const handleCardClick = (id) => {
    console.log(`Clicked movie id: ${id}`);
  };

  return (
    <div className="App">
      <Navigation />
      <Grid container spacing={2} sx={{ padding: 2 }}>
        {mockData.map((movie) => (
          <Grid item key={movie.id}>
            <SingleCard
              id={movie.id}
              name={movie.name}
              time={movie.time}
              image={movie.image}
              onClickHandler={handleCardClick}
            />
          </Grid>
        ))}
      </Grid>
      <Footer />
    </div>
  );
};

export default App;
