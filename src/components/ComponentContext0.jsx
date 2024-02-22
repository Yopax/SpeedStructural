import React from "react";
import { useGeneralContext } from "@/app/context/GeneralContext";
import ComponentContext2 from "./ComponentContextPredi";

const claseOne = "  text-gray-700 border border-solid rounded-md px-4 text-center border-[#DFE3E8]  w-[120px] text-xs py-1";
const claseTwo = "text-xs text-white font-medium mx-2 ";
const claseDivOne = " flex flex-col self-center text-white items-center justify-center text-center  m-2 rounded-md h-80 bg-emerald-600";
function ComponentContext0() {
  const { np, ca, dx,dy,nc,pec,dx_col,dy_col,
  l_col,nvx, dx_vgx, dy_vgx,l_vgx,nvy,dx_vgy,dy_vgy,l_vgy
,cv,dx_t,dy_t ,updateNp,updateCa,updateDx,updateDy,updateNc
,updatePec,updateDx_col,updateDy_col,updateL_col,
updateNvx,updateDx_vgx,updateDy_vgx,updateL_vgx,updateNvy,
updateDx_vgy,updateDy_vgy,updateL_vgy,updateCv,updateDx_t,
updateDy_t,cvr,updateCvr} = useGeneralContext();

  return (
    <>
      <div className="w-full text-center items-center p-2 grid grid-cols-6 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[425px]:grid-cols-1 justify-center mt-8 mb-8 ">
      <div className="flex flex-col text-white items-center justify-center  font-bold m-2 rounded-md h-80 bg-emerald-600">
          <ComponentContext2 />
        </div>
        <div className={claseDivOne}>
  
          <p  className="mb-2">Paños</p>
          <label className={claseTwo}>
            Numero de paños:
          </label>
          <input
            className={claseOne} placeholder="und"
            value={np}
            onChange={(e) => updateNp(e.target.value)}
          />
          <label className={claseTwo}>
            Carga por área:
          </label>
          <input
            className={claseOne} placeholder="kgf/m2"
            value={ca}
            onChange={(e) => updateCa(e.target.value)}
          />
          
          <label className={claseTwo}>
            Dim en x del paño :
          </label>
          <input
            className={claseOne} placeholder="m"
            value={dx}
            onChange={(e) => updateDx(e.target.value)}
          />
          <label className={claseTwo}>
            Dim en x del paño :
          </label>
          <input
            className={claseOne} placeholder="m"
            value={dy}
            onChange={(e) => updateDy(e.target.value)}
          />
        </div>
        <div className={claseDivOne}>
        <p >Columnas</p>
        <label className={claseTwo}>
            Peso especifico - concreto:
          </label>
          <input
            className={claseOne} placeholder="tn/m3"
            value={pec}
            onChange={(e) => updatePec(e.target.value)}
          />
        <label className={claseTwo}>
          Numero de columnas :
        </label>
        <input
          className={claseOne} placeholder="und"
          value={nc}
          onChange={(e) => updateNc(e.target.value)}
        />
        <label className={claseTwo}>
          Dim x de la columna :
        </label>
        <input
          className={claseOne} placeholder="m"
          value={dx_col}
          onChange={(e) => updateDx_col(e.target.value)}
        />
        <label className={claseTwo}>
          Dim y de la columna :
        </label>
        <input
          className={claseOne} placeholder="m"
          value={dy_col}
          onChange={(e) => updateDy_col(e.target.value)}
        />
        <label className={claseTwo}>
          Longitud de la columna :
        </label>
        <input
          className={claseOne} placeholder="m"
          value={l_col}
          onChange={(e) => updateL_col(e.target.value)}
        />
        </div>
        <div className={claseDivOne}>
        <p  className="mb-10">Vigas en x</p>
        <label className={claseTwo}>
          Numero de vigas en x :
        </label>
        <input
          className={claseOne} placeholder="und"
          type="text"
          value={nvx}
          onChange={(e) => updateNvx(e.target.value)}
        />
        <label className={claseTwo}>
          Dim en x de la vigax :
        </label>
        <input
          className={claseOne} placeholder="m"
          type="text"
          value={dx_vgx}
          onChange={(e) => updateDx_vgx(e.target.value)}
        />
        <label className={claseTwo}>
          Dim en y de la vigax :
        </label>
        <input
          className={claseOne} placeholder="m"
          type="text"
          value={dy_vgx}
          onChange={(e) => updateDy_vgx(e.target.value)}
        />
        <label className={claseTwo}>
          Longitud de la vigax :
        </label>
        <input
          className={claseOne} placeholder="m"
          type="text"
          value={l_vgx}
          onChange={(e) => updateL_vgx(e.target.value)}
        />
        </div>
        <div className={claseDivOne}>
        <p  className="mb-10">Vigas en y</p>
        <label className={claseTwo}>
          Numero de vigas en y :
        </label>
        <input
          className={claseOne} placeholder="und"
          type="text"
          value={nvy}
          onChange={(e) => updateNvy(e.target.value)}
        />
        <label className={claseTwo}>
          Dim en x de la vigay :
        </label>
        <input
          className={claseOne} placeholder="m"
          type="text"
          value={dx_vgy}
          onChange={(e) => updateDx_vgy(e.target.value)}
        />
        <label className={claseTwo}>
          Dim en y de la vigay :
        </label>
        <input
          className={claseOne} placeholder="m"
          type="text"
          value={dy_vgy}
          onChange={(e) => updateDy_vgy(e.target.value)}
        />
        <label className={claseTwo}>
          Longitud de la vigay :
        </label>
        <input
          className={claseOne} placeholder="m"
          type="text"
          value={l_vgy}
          onChange={(e) => updateL_vgy(e.target.value)}
        />
        </div>
        <div className={claseDivOne}>
        <p  className="mb-10">Carga Viva</p>
        <label className={claseTwo}>
          CV techo ultimo piso :
        </label>
        <input
          className={claseOne} placeholder="tn/m2"
          type="text"
          value={cv}
          onChange={(e) => updateCv(e.target.value)}
        />
        <label className={claseTwo}>
          CV techo demas pisos :
        </label>
        <input
          className={claseOne} placeholder="tn/m2"
          type="text"
          value={cvr}
          onChange={(e) => updateCvr(e.target.value)}
        />
        <label className={claseTwo}>
          ancho del plano :
        </label>
        <input
          className={claseOne} placeholder="m"
          type="text"
          value={dx_t}
          onChange={(e) => updateDx_t(e.target.value)}
        />
        <label className={claseTwo}>
          largo del plano :
        </label>
        <input
          className={claseOne} placeholder="m"
          type="text"
          value={dy_t}
          onChange={(e) => updateDy_t(e.target.value)}
        />
        </div>
      </div>
    </>
  );
}

export default ComponentContext0;
