import { Box } from "@mui/material";
import React from "react";
import SingleItemHeader from "../components/SingleItemHeader/SingleItemHeader";
import SingleItemTabs from "../components/SingleItemTabs/SingleItemTabs";

const Films = () => {
  return (
    <Box
      sx={{ backgroundColor: "#141414", minHeight: "100vh", padding: "20px" }}
    >
      <SingleItemHeader />
      <SingleItemTabs />
    </Box>
  );
};

export default Films;
