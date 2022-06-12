import * as React from "react";
import { motion } from "framer-motion";
import ThreeDRotationIcon from "@mui/icons-material/ThreeDRotation";
const Example = () => {
  const container = {
    width: "150px",
    height: "150px",
    borderRadius: "30px",
  };
  return (
    <motion.div
      style={container}
      whileHover={{ scale: 1.2, rotate: 90 }}
      whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
    >
      <ThreeDRotationIcon />
    </motion.div>
  );
};
export default Example;
