import React from "react";
import { useGeneralContext } from "@/app/context/GeneralContext";
import { IoMdInformationCircle } from "react-icons/io";
import ComponentContext2 from "./ComponentContext2";


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
      <div className="w-full text-center items-center p-2 grid grid-cols-3 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[425px]:grid-cols-1 justify-center mt-8 mb-8 ">
        <div className="flex flex-col text-white items-center justify-center  font-bold m-2 rounded-md h-80 bg-emerald-600">
          <label className="text-xs text-white font-medium mx-2 ">
            Numero de paños:
          </label>
          <input
            className="  border border-solid px-4 text-center border-[#DFE3E8]  w-[120px] text-xs py-1"
            value={np}
            onChange={(e) => updateNp(e.target.value)}
          />
          <label className=" text-xs text-white font-medium mx-2 ">
            Carga por área:
          </label>
          <input
            className="   border border-solid  px-4 text-center border-[#DFE3E8]  w-[120px] text-xs py-1"
            value={ca}
            onChange={(e) => updateCa(e.target.value)}
          />
          <label className=" text-xs text-white font-medium mx-2 ">
            Peso especifico:
          </label>
          <input
            className="   border border-solid  px-4 text-center border-[#DFE3E8]  w-[120px] text-xs py-1"
            value={pec}
            onChange={(e) => updatePec(e.target.value)}
          />
          <label className=" text-xs text-white font-medium mx-2 ">
            Dim en x del paño :
          </label>
          <input
            className="   border border-solid  px-4 text-center border-[#DFE3E8]  w-[120px] text-xs py-1"
            value={dx}
            onChange={(e) => updateDx(e.target.value)}
          />
          <label className=" text-xs text-white font-medium mx-2 ">
            Dim en x del paño :
          </label>
          <input
            className="   border border-solid f px-4 text-center border-[#DFE3E8]  w-[120px] text-xs py-1"
            value={dy}
            onChange={(e) => updateDy(e.target.value)}
          />
        </div>
        <div className="flex flex-col text-white items-center justify-center  font-bold m-2 rounded-md h-80 bg-emerald-600">
        <label className="text-xs text-white font-medium mx-2">
          Numero de columnas :
        </label>
        <input
          className="   border border-solid px-4 text-center border-[#DFE3E8] w-[120px] text-xs py-1"
          value={nc}
          onChange={(e) => updateNc(e.target.value)}
        />
        <label className="text-xs text-white font-medium mx-2">
          Dim x de la columna :
        </label>
        <input
          className="   border border-solid px-4 text-center border-[#DFE3E8] w-[120px] text-xs py-1"
          value={dx_col}
          onChange={(e) => updateDx_col(e.target.value)}
        />
        <label className="text-xs text-white font-medium mx-2">
          Dim y de la columna :
        </label>
        <input
          className="   border border-solid px-4 text-center border-[#DFE3E8] w-[120px] text-xs py-1"
          value={dy_col}
          onChange={(e) => updateDy_col(e.target.value)}
        />
        <label className="text-xs text-white font-medium mx-2">
          Longitud de la columna :
        </label>
        <input
          className="   border border-solid px-4 text-center border-[#DFE3E8] w-[120px] text-xs py-1"
          value={l_col}
          onChange={(e) => updateL_col(e.target.value)}
        />
        </div>
        <div className="flex flex-col text-white items-center justify-center  font-bold m-2 rounded-md h-80 bg-emerald-600">
        <label className=" text-xs text-white font-medium mx-2">
          Numero de vigas en x :
        </label>
        <input
          className="   border border-solid px-4 text-center border-[#DFE3E8] w-[120px] text-xs py-1"
          type="text"
          value={nvx}
          onChange={(e) => updateNvx(e.target.value)}
        />
        <label className=" text-xs text-white font-medium mx-2">
          Dim en x de la vigax :
        </label>
        <input
          className="   border border-solid px-4 text-center border-[#DFE3E8] w-[120px] text-xs py-1"
          type="text"
          value={dx_vgx}
          onChange={(e) => updateDx_vgx(e.target.value)}
        />
        <label className=" text-xs text-white font-medium mx-2">
          Dim en y de la vigax :
        </label>
        <input
          className="   border border-solid px-4 text-center border-[#DFE3E8] w-[120px] text-xs py-1"
          type="text"
          value={dy_vgx}
          onChange={(e) => updateDy_vgx(e.target.value)}
        />
        <label className="text-xs text-white font-medium mx-2">
          Longitud de la vigax :
        </label>
        <input
          className="   border border-solid px-4 text-center border-[#DFE3E8] w-[120px] text-xs py-1"
          type="text"
          value={l_vgx}
          onChange={(e) => updateL_vgx(e.target.value)}
        />
        </div>
        <div className="flex flex-col text-white items-center justify-center  font-bold m-2 rounded-md h-80 bg-emerald-600">
        <label className="text-xs text-white font-medium mx-2">
          Numero de vigas en y :
        </label>
        <input
          className="   border border-solid px-4 text-center border-[#DFE3E8]  w-[120px] text-xs py-1"
          type="text"
          value={nvy}
          onChange={(e) => updateNvy(e.target.value)}
        />
        <label className="text-xs text-white font-medium mx-2">
          Dim en x de la vigay :
        </label>
        <input
          className="   border border-solid px-4 text-center border-[#DFE3E8]  w-[120px] text-xs py-1"
          type="text"
          value={dx_vgy}
          onChange={(e) => updateDx_vgy(e.target.value)}
        />
        <label className="text-xs text-white font-medium mx-2">
          Dim en y de la vigay :
        </label>
        <input
          className="   border border-solid px-4 text-center border-[#DFE3E8]  w-[120px] text-xs py-1"
          type="text"
          value={dy_vgy}
          onChange={(e) => updateDy_vgy(e.target.value)}
        />
        <label className="text-xs text-white font-medium mx-2">
          Longitud de la vigay :
        </label>
        <input
          className="   border border-solid px-4 text-center border-[#DFE3E8]  w-[120px] text-xs py-1"
          type="text"
          value={l_vgy}
          onChange={(e) => updateL_vgy(e.target.value)}
        />
        </div>
        <div className="flex flex-col text-white items-center justify-center  font-bold m-2 rounded-md h-80 bg-emerald-600">
        <label className="text-xs text-white font-medium mx-2">
          CV techo ultimo piso :
        </label>
        <input
          className="  border border-solid px-4 text-center border-[#DFE3E8]  w-[120px] text-xs py-1"
          type="text"
          value={cv}
          onChange={(e) => updateCv(e.target.value)}
        />
        <label className="text-xs text-white font-medium mx-2">
          CV techo demas pisos :
        </label>
        <input
          className="  border border-solid px-4 text-center border-[#DFE3E8]  w-[120px] text-xs py-1"
          type="text"
          value={cvr}
          onChange={(e) => updateCvr(e.target.value)}
        />
        <label className="text-xs text-white font-medium mx-2">
          ancho del plano :
        </label>
        <input
          className="  border border-solid px-4 text-center border-[#DFE3E8]  w-[120px] text-xs py-1"
          type="text"
          value={dx_t}
          onChange={(e) => updateDx_t(e.target.value)}
        />
        <label className="text-xs text-white font-medium mx-2">
          largo del plano :
        </label>
        <input
          className="  border border-solid px-4 text-center border-[#DFE3E8]  w-[120px] text-xs py-1"
          type="text"
          value={dy_t}
          onChange={(e) => updateDy_t(e.target.value)}
        />
        </div>
        <div className="flex flex-col text-white items-center justify-center  font-bold m-2 rounded-md h-80 bg-emerald-600">
          <ComponentContext2 />
        </div>
      </div>
    </>
  );
}

export default ComponentContext0;
