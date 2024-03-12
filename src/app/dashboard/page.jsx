"use client"
import DashBoard from '@/components/02_Dashboard/DashBoard'
import React from 'react'
import { motion } from 'framer-motion'

function page() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <DashBoard />
      </motion.div>
    </>
  );
}

export default page