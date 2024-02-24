import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import Norma from "./Norma";



function Menu() {
  return (
    <>
      <div className="flex ">
        <div>
          <ul className="menu bg-white border border-r-gray-300 bg-opacity-90 w-[260px] h-[546px]">
            <div className="flex mt-[30px]">
              <div className="avatar online">
                <div className="w-10 rounded-full ">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>

              <div className="ml-[25px]">
                <h3 className="flex-col font text-sm font-semibold">
                  Barreto Rodriguez Darli
                </h3>
                <h3 className="flex-col text-xs font font-light">
                  Creador de Speed Structural
                </h3>
              </div>
            </div>
            <p className="flex-col text-center  text-xs mx-3 mt-6 font">Normas en que se basan los calculos de la aplicacion:</p>
            <div className="flex flex-col mt-[40px] text-center justify-center items-center">
              <Norma title="Norma E-0.20"/>
              <Norma title="Norma E-0.30"/>
              <Norma title="Norma E-0.50"/>
              <Norma title="Norma E-0.60"/>
              <Norma title="Norma E-0.70"/>
            </div>
            
            
          </ul>
        </div>
        <div className="w-full mx-5 mt-2">

        </div>
        
      </div>
    </>
  );
}

export default Menu;
