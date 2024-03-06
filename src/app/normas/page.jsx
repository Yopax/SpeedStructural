"use client";
import React from 'react';
import { motion } from "framer-motion";
import NavBar from '@/components/01_Landing_Page/components/NavBar';
import Normas from '@/components/03_Normas/Normas';


function page() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
      <NavBar />
      <Normas />
      </motion.div>
    </>
  )
}

export default page