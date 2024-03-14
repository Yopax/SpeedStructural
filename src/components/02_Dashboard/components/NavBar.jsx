import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

function NavBar() {
  return (
    <>
      <div className="navbar bg-emerald-600 bg-opacity-90">
        <div className="navbar-start">
          <div className="dropdown">  
          </div>
          <img className="ml-4 w-[15px] h-[25px]" src="https://i.imgur.com/uGoZ0zK.png" alt="logo" />
          <div className="flex flex-col ml-2">
            <a className="font font-bold  text-white text-xl">SPEED </a>
            <p className="font text-white text-xs font-bold">Structural</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          
        </div>
        <div className="navbar-end mr-4">
          <Link href="https://drive.google.com/uc?export=download&id=1Lpx0-9vAiSqdxUTL9IQ_FheY1htgngo6">
          <motion.button whileHover={{ scale: 0.9 }} whileTap={{ scale: 1.9 }}>
          <p
            className=" bg-slate-600 hover:bg-blue-600 text-white text-sm leading-6 font-medium py-1 px-3 rounded-lg"
          >
            Descargar manual
          </p>
          </motion.button>
          </Link>

        </div>
        
      </div>
    </>
  );
}

export default NavBar;

