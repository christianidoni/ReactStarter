import { Box } from "@mui/material";
import React from "react";
import Footer from "../components/Footer/Footer";
import SingleItemHeader from "../components/SingleItemHeader/SingleItemHeader";
import SingleItemTabs from "../components/SingleItemTabs/SingleItemTabs";

const Films = () => {
  return (
    <Box>
      <SingleItemHeader />
      <SingleItemTabs />
      <Footer />
    </Box>
  );
};

export default Films;
