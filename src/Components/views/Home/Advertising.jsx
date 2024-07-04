import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import Youtube from "./Youtube";
import Facebook from "./Facebook";
import Linkedin from "./Linkedin";
import Instagram from "./Instagram";
const Advertising = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        // backgroundColor: "pink",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "100%",
          //   backgroundColor: "green",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "40%",
            height: "50px",
            // backgroundColor: "red",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxSizing: "border-box",
            mt: "100px",
          }}
        >
          <Facebook></Facebook>
          <Youtube></Youtube>
          <Linkedin></Linkedin>
          <Instagram></Instagram>
        </Box>
      </Box>
      <Box sx={{ width: "50%", height: "100%" }}></Box>
    </Box>
  );
};

export default Advertising;
