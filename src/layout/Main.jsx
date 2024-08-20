import React from "react";
import { Grid } from "@mui/material";
import Navigation from "../components/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import { FilmsProvider } from "../context/FilmsContext";

const Main = () => {
  return (
    <div className="App">
      <Navigation />
      <FilmsProvider>
        <Grid container>
          <Outlet />
        </Grid>
      </FilmsProvider>
    </div>
  );
};

export default Main;
