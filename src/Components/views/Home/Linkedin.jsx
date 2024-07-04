import React, { useState } from "react";
import { motion } from "framer-motion";

const fontFamily = '"Poppins", sans-serif';
const fontWeight = 800;
const fontStyle = "normal";
const mainColor = "#00fcde";
const secondColor = "#51339c";

const Linkedin = (props) => {
  const [move, setMove] = useState(false);
  return (
    <motion.div
      onMouseEnter={() => setMove(true)}
      onMouseLeave={() => setMove(false)}
      style={{
        backgroundColor: secondColor,
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50px",
        cursor: "pointer",
      }}
      whileHover={{
        backgroundColor: "white",
      }}
      transition={{
        ease: "easeInOut",
      }}
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={30}
        fill="none"
        viewBox="0 0 24 24"
      >
        <motion.path
          animate={{
            fill: move ? secondColor : "#ffff",
          }}
          fill="#ffff"
          d="M6.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM11 19h1a1 1 0 0 0 1-1v-4.5c0-1.5 3-2.5 3-.5v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-6c0-2-1.5-3-3.5-3S13 10.5 13 10.5V10a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Z"
        />
        <motion.path
          animate={{
            fill: move ? secondColor : "#ffff",
          }}
          fill="#ffff"
          fillRule="evenodd"
          d="M20 1a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3h16Zm0 2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16Z"
          clipRule="evenodd"
        />
      </motion.svg>
    </motion.div>
  );
};

export default Linkedin;
