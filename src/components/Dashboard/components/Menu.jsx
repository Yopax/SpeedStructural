import React from "react";
import { AiFillHome } from "react-icons/ai";
import { AiFillFile } from "react-icons/ai";
import { AiOutlineHistory } from "react-icons/ai";
import { AiFillFund } from "react-icons/ai";
import { AiFillFileText } from "react-icons/ai";
import { AiOutlineDownload } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";


function Menu() {
  return (
    <>
      <div className="flex ">
        <div>
          <ul className="menu bg-white w-[260px] h-[546px]">
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
                  Civil engineering student
                </h3>
              </div>
            </div>

            <li className="mt-[40px]">
              <div>
                <AiFillHome />
                <a className="text-sm  font font-normal">Inicio</a>
              </div>
            </li>
            <li>
              <details>
                <summary className="text-sm  font font-normal mt-[14px]">
                  <AiFillFile />
                  Proyectos
                </summary>
                <ul>
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="text-sm  font font-normal mt-[14px]">
                <AiFillFund />
                Calculos
              </a>
            </li>
            <li>
              <a className="text-sm  font font-normal mt-[14px]">
                <AiOutlineHistory />
                Historial
              </a>
            </li>
            <li>
              <a className="text-sm  font font-normal mt-[14px]">
                <AiFillFileText />
                Normas
              </a>
            </li>
            <li>
              <a className="text-sm  font font-normal mt-[14px]">
                <AiOutlineDownload />
                Descargas
              </a>
            </li>
            <li>
              <a className="text-sm  font font-normal mt-[54px]">
                <AiOutlinePhone />
                Soporte Tecnico
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full mx-5 mt-2">

        </div>
        
      </div>
    </>
  );
}

export default Menu;
