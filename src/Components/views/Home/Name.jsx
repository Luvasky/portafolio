import React from "react";
import { Box, Typography, Button } from "@mui/material";
import figureOne from "../../../assets/images/Group2.png";
import { color, motion } from "framer-motion";

const Name = () => {
  const fontFamily = '"Poppins", sans-serif';
  const fontWeight = 800;
  const fontStyle = "normal";
  const mainColor = "#00fcde";

  const styles = {
    generalContainer: {
      // backgroundColor: "pink",
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },

    massageOne: {
      width: "100%",
      height: "70%",
      //   backgroundColor: "green",
      display: "flex",
      justifyContent: "start",
      alignItems: "end",
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontStyle: fontStyle,
      fontSize: 100,
      color: mainColor,
      lineHeight: 1,
      cursor: "pointer",
    },

    messageTwo: {
      width: "100%",
      height: "20%",
      //   backgroundColor: "red",
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      fontStyle: fontStyle,
      fontSize: 55,
      color: "transparent",
      WebkitTextStroke: `2px ${mainColor}`,
      display: "flex",
      alignItems: "start",
      lineHeight: 1,
      cursor: "pointer",
    },
  };

  return (
    <Box sx={{ ...styles.generalContainer }}>
      <Typography sx={{ ...styles.massageOne }}>I'm Luvasky</Typography>
      <Typography sx={{ ...styles.messageTwo }}>Software Developer</Typography>
      <Box
        sx={{
          width: "100%",
          height: "20%",
          backgroundColor: "orange",
        }}
      >
        <Button>Get start</Button>
      </Box>
    </Box>
  );
};

export default Name;
