import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const ResError: React.FC<{ message: string }> = ({ message }) => {
  return (
    <motion.div initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
      <Typography variant="body2" sx={{ color: "red" }}>
        {message}
      </Typography>
    </motion.div>
  );
};

export default ResError;
