"use client"
import ContextApp from '@/components/ContextApp'
import PreConsideraciones from '@/components/PreConsideraciones'
import React from 'react'
import { motion } from 'framer-motion'
import MyModal from '@/components/01_Landing_Page/components/MyModal'
import MyModal2 from '@/components/02_Dashboard/components/ModalEst'

function page() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <ContextApp />
        
      </motion.div>
    </>
  );
}

export default page