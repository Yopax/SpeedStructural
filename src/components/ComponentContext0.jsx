import React from "react";
import { useGeneralContext } from "@/app/context/GeneralContext";
import { IoMdInformationCircle } from "react-icons/io";


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
    <p className="flex font2 font-semibold text-xs text-gray-600"><IoMdInformationCircle />Informacion general del plano</p>     
      <div className="flex bg-emerald-300 w-full space-x-4 items-center px-6 border border-solid py-6 border-[#DFE3E8] ">
          <label className="text-xs">Numero de paños:</label>
          <input className="  border border-solid px-4 text-center border-[#DFE3E8]  w-[120px] text-xs py-1"  value={np} onChange={(e) => updateNp(e.target.value)}/>
          <label className=" text-xs">Carga por área:</label>
          <input className="   border border-solid px-4 text-center border-[#DFE3E8]  w-[120px] text-xs py-1"  value={ca} onChange={(e) => updateCa(e.target.value)}/>
          <label className=" text-xs">Peso especifico:</label>
          <input className="   border border-solid px-4 text-center border-[#DFE3E8]  w-[120px] text-xs py-1" value={pec} onChange={(e) => updatePec(e.target.value)}/>
          <label className=" text-xs">Dim en x del paño :</label>
          <input className="   border border-solid px-4 text-center border-[#DFE3E8]  w-[120px] text-xs py-1" value={dx} onChange={(e) => updateDx(e.target.value)}/>
          <label className=" text-xs">Dim en x del paño :</label>
          <input className="   border border-solid px-4 text-center border-[#DFE3E8]  w-[120px] text-xs py-1" value={dy} onChange={(e) => updateDy(e.target.value)}/>
      </div>
      <p className="flex  font-semibold text-xs text-gray-600"><IoMdInformationCircle />Informacion de las columnas</p>
      <div className="flex bg-emerald-300 w-full space-x-4 items-center px-6 border border-solid py-6 border-[#DFE3E8] ">
          <label className=" text-xs">Numero de columnas :</label>
          <input className="   border border-solid px-4 text-center border-[#DFE3E8] w-[120px] text-xs py-1" value={nc} onChange={(e) => updateNc(e.target.value)}/>        
          <label className=" text-xs">Dim x de la columna :</label>
          <input className="   border border-solid px-4 text-center border-[#DFE3E8] w-[120px] text-xs py-1" value={dx_col} onChange={(e) => updateDx_col(e.target.value)}/>
          <label className=" text-xs">Dim y de la columna :</label>
          <input className="   border border-solid px-4 text-center border-[#DFE3E8] w-[120px] text-xs py-1" value={dy_col} onChange={(e) => updateDy_col(e.target.value)}/>
          <label className=" text-xs">Longitud de la columna :</label>
          <input className="   border border-solid px-4 text-center border-[#DFE3E8] w-[120px] text-xs py-1" value={l_col} onChange={(e) => updateL_col(e.target.value)}/>
      </div>
      <p className="flex  font-semibold text-xs text-gray-600"><IoMdInformationCircle />Informacion de las vigas en x-x</p>
      <div className="flex bg-emerald-300 w-full space-x-4 items-center px-6 border border-solid py-6 border-[#DFE3E8] ">
          <label className=" text-xs">Numero de vigas en x :</label>
          <input className="   border border-solid px-4 text-center border-[#DFE3E8] w-[120px] text-xs py-1" type="text"  value={nvx} onChange={(e) => updateNvx(e.target.value)}/>
          <label className=" text-xs">Dim en x de la vigax :</label>
          <input className="   border border-solid px-4 text-center border-[#DFE3E8] w-[120px] text-xs py-1" type="text"  value={dx_vgx} onChange={(e) => updateDx_vgx(e.target.value)}/>
          <label className=" text-xs">Dim en y de la vigax :</label>
          <input className="   border border-solid px-4 text-center border-[#DFE3E8] w-[120px] text-xs py-1" type="text"  value={dy_vgx} onChange={(e) => updateDy_vgx(e.target.value)}/>
          <label className=" text-xs">Longitud de la vigax :</label>
          <input className="   border border-solid px-4 text-center border-[#DFE3E8] w-[120px] text-xs py-1" type="text"  value={l_vgx} onChange={(e) => updateL_vgx(e.target.value)}/>
        </div>
        <p className="flex  font-semibold text-xs text-gray-600"><IoMdInformationCircle />
        Informacion de las vigas en y-y</p>
      <div className="flex bg-emerald-300 w-full space-x-4 items-center px-6 border border-solid py-6 border-[#DFE3E8] ">
          <label className=" text-xs">Numero de vigas en y :</label>
          <input className="   border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px] text-xs py-1" type="text"  value={nvy} onChange={(e) => updateNvy(e.target.value)}/>
          <label className=" text-xs">Dim en x de la vigay :</label>
          <input className="   border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px] text-xs py-1" type="text"  value={dx_vgy} onChange={(e) => updateDx_vgy(e.target.value)}/>
          <label className=" text-xs">Dim en y de la vigay :</label>
          <input className="   border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px] text-xs py-1" type="text"  value={dy_vgy} onChange={(e) => updateDy_vgy(e.target.value)}/>
          <label className=" text-xs">Longitud de la vigay :</label>
          <input className="   border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px] text-xs py-1" type="text"  value={l_vgy} onChange={(e) => updateL_vgy(e.target.value)}/>
      </div>
      <p className="flex  font-semibold text-xs text-gray-600"><IoMdInformationCircle />
Informacion extra</p>
      <div className="flex bg-emerald-300 w-full space-x-4 items-center px-6 border border-solid py-6 border-[#DFE3E8] ">
        <label className=" text-xs">CV techo ultimo piso :</label>
        <input className="  border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px] text-xs py-1" type="text"  value={cv} onChange={(e) => updateCv(e.target.value)}/>
        <label className=" text-xs">CV techo demas pisos :</label>
        <input className="  border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px] text-xs py-1" type="text"  value={cvr} onChange={(e) => updateCvr(e.target.value)}/>
        <label className=" text-xs">ancho del plano :</label>
        <input className="  border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px] text-xs py-1" type="text"  value={dx_t} onChange={(e) => updateDx_t(e.target.value)}/>
        <label className=" text-xs">largo del plano :</label>
        <input className="  border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px] text-xs py-1" type="text"  value={dy_t} onChange={(e) => updateDy_t(e.target.value)}/>
      </div>
    </>
  );
}

export default ComponentContext0;
