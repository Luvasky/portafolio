import React from "react";
import { Box, Typography } from "@mui/material";
import figureOne from "../../../assets/images/Group2.png";
import { color, motion } from "framer-motion";
const Menu = () => {
  const fontFamily = '"Poppins", sans-serif';
  const fontWeight = 700;
  const fontStyle = "normal";
  const mainColor = "#00fcde";

  const styles = {
    generalContainer: {
      width: "100%",
      height: "100%",
      // backgroundColor: "green",
      display: "flex",
      justifyContent: "space-between",
    },

    containerMenuOne: {
      width: "85%",
      height: "100%",
      //   backgroundColor: "red",
      display: "flex",
      justifyContent: "end",
      marginRight: "50px",
    },

    containerMenuTwo: {
      // backgroundColor: "gray",
      height: "100%",
      width: "50%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    typographys: {
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontStyle: fontStyle,
      color: mainColor,
      cursor: "pointer",
    },

    containerFigureOne: {
      width: "15%",
      height: "100%",
      //   backgroundColor: "gray",
    },
  };

  return (
    <Box sx={{ ...styles.generalContainer }}>
      <Box sx={{ ...styles.containerMenuOne }}>
        <Box sx={{ ...styles.containerMenuTwo }}>
          <Typography sx={{ ...styles.typographys }}>Home</Typography>
          <Typography sx={{ ...styles.typographys }}>About me</Typography>
          <Typography sx={{ ...styles.typographys }}>Projects</Typography>
          <Typography sx={{ ...styles.typographys }}>Contact</Typography>
        </Box>
      </Box>
      <Box sx={{ ...styles.containerFigureOne }}>
        <motion.img
          src={figureOne}
          style={{ width: "70px", height: "75px" }}
        ></motion.img>
      </Box>
    </Box>
  );
};

export default Menu;
