import React from "react";
import { FaArrowDown } from "react-icons/fa";

import Reloj from "./Reloj";


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
          <Reloj />
        </div>
        <div className="navbar-end mr-4">
          <a className="btn btn-sm">Descargar Manual<FaArrowDown />
</a>
        </div>
        
      </div>
    </>
  );
}

export default NavBar;

