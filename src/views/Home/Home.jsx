import { Scale } from "@mui/icons-material";
import "../../styles/Home/Home.css";
import * as utils from "../../utils/Home/utils.js";
const Home = () => {
  const styles = {
    generalContainer: {
      width: "100%",
      height: "100%",
      display: "flex",
    },

    leftContainer: {
      // backgroundColor: "cyan",
      width: "40%",
      height: "100%",
    },

    rightContainer: {
      // backgroundColor: "pink",
      width: "60%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },

    image: {
      width: "70%",
      height: "99.3%",
      cursor: "pointer",
    },

    menuContainer: {
      // backgroundColor: "pink",
      height: "10%",
    },

    nameContainer: {
      // backgroundColor: "cyan",
      height: "60%",
    },
  };

  return (
    <div className="background-home">
      <utils.Box sx={{ ...styles.generalContainer }}>
        <utils.Box sx={{ ...styles.leftContainer }}>
          <utils.motion.img
            initial={{
              x: -1000,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            whileHover={{
              x: 10,
            }}
            src={utils.peopleOne}
            alt=""
            style={{ ...styles.image }}
          />
        </utils.Box>
        <utils.Box sx={{ ...styles.rightContainer }}>
          <utils.Box sx={{ ...styles.menuContainer }}>
            <utils.Menu></utils.Menu>
          </utils.Box>
          <utils.Box sx={{ ...styles.nameContainer }}>
            <utils.Name></utils.Name>
          </utils.Box>
          <utils.Box
            sx={{
              // backgroundColor: "red",
              height: "30%",
            }}
          >
            Publicidad
          </utils.Box>
        </utils.Box>
      </utils.Box>
    </div>
  );
};

export default Home;
