import React, { useState } from "react";
import { Box, Typography, Button, Icon } from "@mui/material";
import figureOne from "../../../assets/images/Group2.png";
import { color, motion } from "framer-motion";
import Send from "../../../assets/send.svg";

const Name = () => {
  const [move, setMove] = useState(false);

  const fontFamily = '"Poppins", sans-serif';
  const fontWeight = 800;
  const fontStyle = "normal";
  const mainColor = "#00fcde";
  const secondColor = "#51339c";

  const messageOne = "I'm Luvasky";
  const messageTwo = "Software Developer";
  const styles = {
    generalContainer: {
      // backgroundColor: "pink",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      overFlow: "hidden",
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
      <Box sx={{ ...styles.massageOne }}>
        {messageOne.split("").map((char, index) => (
          <motion.span
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            whileHover={{
              y: -30,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            key={index}
            style={{
              marginRight: char === " " ? "0.25em" : "0",
            }}
          >
            {char}
          </motion.span>
        ))}
      </Box>
      <Typography sx={{ ...styles.messageTwo }}>
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.5,
            damping: 1,
          }}
        >
          {messageTwo.split("").map((e) => (
            <motion.span
              key={e}
              whileHover={{
                WebkitTextStroke: "none",
                color: mainColor,
              }}
            >
              {e}
            </motion.span>
          ))}
        </motion.span>
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "20%",
          // backgroundColor: "orange",
        }}
      >
        <motion.button
          initial={{
            x: 500,
            opacity: 0,
          }}
          style={{
            backgroundColor: mainColor,
            outline: "none",
            width: "180px",
            height: "45px",
            borderRadius: "50px",
            border: "none",
            cursor: "pointer",
            fontFamily: fontFamily,
            fontWeight: "bold",
            fontStyle: fontStyle,
            fontSize: "20px",
            color: secondColor,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onMouseEnter={() => setMove(true)}
          onMouseLeave={() => setMove(false)}
          animate={{
            scale: move ? 1.1 : 1,
            x: 0,
            opacity: 1,
          }}
        >
          <motion.div
            style={{ width: "30%", display: "flex", justifyContent: "center" }}
          >
            <motion.img
              src={Send}
              style={{ width: "30px", height: "30px" }}
              animate={{
                rotate: move ? 40 : 10,
              }}
            ></motion.img>
          </motion.div>
          <motion.div
            style={{ width: "70%", display: "flex", justifyContent: "center" }}
          >
            Get Start
          </motion.div>
        </motion.button>
      </Box>
    </Box>
  );
};

export default Name;
