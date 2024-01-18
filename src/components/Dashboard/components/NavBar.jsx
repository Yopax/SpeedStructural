import React from "react";
import { FaPlus } from "react-icons/fa";


function NavBar() {
  return (
    <>
      <div className="navbar bg-emerald-600 bg-opacity-90">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn text-white btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a >Historial</a>
              </li>
              <li>
                <a >Calculos</a>
                <ul className="p-2">
                  <li>
                    <a>Calculo 1</a>
                  </li>
                  <li>
                    <a>Calculo 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Normas</a>
              </li>
            </ul>
          </div>
          <img className="ml-4 w-[15px] h-[25px]" src="https://i.imgur.com/uGoZ0zK.png" alt="logo" />
          <div className="flex flex-col ml-2">
            <a className="font font-bold  text-white text-xl">SPEED </a>
            <p className="font text-white text-xs font-bold">Structural</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-white font-bold ">Historial</a>
            </li>
            <li>
              <details>
                <summary className="text-white font-bold">Calculos</summary>
                <ul className="p-2 w-[120px]">
                  <li>
                    <a>Calculo 1</a>
                  </li>
                  <li>
                    <a>Calculo 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="text-white font-bold">Normas</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr-4">
          <a className="btn btn-sm">Crear Proyecto<FaPlus />
</a>
        </div>
        
      </div>
    </>
  );
}

export default NavBar;

