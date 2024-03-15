import { Box } from "@mui/material";
import React from "react";
import no_result from "../../assets/no_result.gif";
const Noresult = () => {
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <img src={no_result} alt="no_result" />
      </Box>
    </>
  );
};

export default Noresult;
