"use client";
import { motion } from "framer-motion";
import React from "react";
import AboutOne from "./AboutOne";
import AboutTwo from "./AboutTwo";
import AboutTheer from "./AboutTheer";

function AboutDescription() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" text-3xl pt-16 max-[712px]:pt-20"
    >
      <div className="max-[425px]:mb-[500px] max-[375px]:mb-[540px] max-[320px]:mb-[670px] max-[425px]:flex max-[425px]:flex-col max-[375px]:flex max-[375px]:flex-col max-[320px]:flex max-[320px]:flex-col min-[1024px]:mb-[100px] max-[1024px]:mt-[20px] max-[678px]:mt-[30px] min-[678px]:mb-[270px] flex w-full h-full justify-center items-center  mt-[70px]">
        <AboutOne />
        <AboutTwo />
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        <AboutTheer />
      </div>
    </motion.div>
  );
}

export default AboutDescription;