"use client";

import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { AnimatePresence, motion } from "framer-motion";
import "./drawer.scss";
import { closeDrawer } from "@/redux/slices/drawerSlice";

const Drawer: React.FC = () => {
  const { isOpen, panel } = useAppSelector((state) => state.drawer);

  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(closeDrawer());

  const variants = {
    hidden: { backgroundColor: "rgb(0,0,0,0)" },
    visible: { backgroundColor: "rgb(0,0,0,0.5)" },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="drawer"
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ duration: 0.3 }}
          variants={variants}
          onClick={handleClick}
          id="drawer-container"
          className="DrawerContainer"
        >
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fh max-w-[270px] bg-primary"
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
