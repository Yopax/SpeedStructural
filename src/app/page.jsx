"use client";
import LandingPage from "@/components/01_Landing_Page/LandingPage";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <LandingPage />
      </motion.div>
    </>
  );
}
