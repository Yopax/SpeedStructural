import React from "react";
import { useGeneralContext } from "@/app/context/GeneralContext";

function ComponentContext1() {
  const { inputValue1, updateInputValue1,inputValue2, updateInputValue2,
    inputValue3, updateInputValue3,inputValue4, updateInputValue4,inputValue5, updateInputValue5,
    inputValue6, updateInputValue6, ocupacionUso, updateOcupacionUso, servicio, updateServicio,
   inputFc , updateInputFc, tipoSuelo, updateTipoSuelo,capacidadAdmisible, updatCapacidadAdmisible } = useGeneralContext();

  return (
    <div className="flex bg-emerald-300 flex-col w-[330px]   border-2 rounded-lg space-y-2 border-solid p-6">
      <p className="font2 text-[16px]  font-bold mb-4">Informacion General del Proyecto</p>
      <div className="flex justify-between">
        <label className="text-xs inputof">Nombre del autor:</label>
        <input className=" border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px] text-xs py-1" type="text" value={inputValue1} onChange={(e) => updateInputValue1(e.target.value)}/>
      </div>
      <div className="flex justify-between">
        <label className="text-xs inputof">Ocupacion/uso:</label>
        <input className=" text-xs border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px]  py-1" type="text" placeholder="Escuela, hospital,etc" value={ocupacionUso} onChange={(e) => updateOcupacionUso(e.target.value)}/>
      </div>
      <div className="flex justify-between">
        <label className="text-xs inputof">Pservicio:</label>
        <input className=" text-xs border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px]  py-1" type="text"  value={servicio} onChange={(e) => updateServicio(e.target.value)}/>
      </div>
      <div className="flex justify-between">
        <label className="text-xs inputof">Tipo de suelo(k):</label>
        <input className=" text-xs border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px]  py-1" type="text"  value={tipoSuelo} onChange={(e) => updateTipoSuelo(e.target.value)}/>
      </div>
      <div className="flex justify-between">
        <label className="text-xs inputof">Capacidad:</label>
        <input className=" text-xs border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px]  py-1" type="text"  value={capacidadAdmisible} onChange={(e) => updatCapacidadAdmisible(e.target.value)}/>
      </div>
      <div className="flex justify-between">
        <label className="text-xs inputof">Fuerza de compresion(fc):</label>
        <input className=" text-xs border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px]  py-1" type="text"  value={inputFc} onChange={(e) => updateInputFc(e.target.value)}/>
      </div>

       <div className="flex justify-between">
          <label className="flex text-xs inputof">N° de pisos</label>
          <input className=" text-xs border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px]  py-1" type="text" value={inputValue2} onChange={(e) => updateInputValue2(e.target.value)}/>
       </div>
       <div className="flex justify-between">
          <label className="flex text-xs inputof">Peso específico del concreto:</label>
          <input className=" text-xs  border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px]  py-1" type="text" value={inputValue3} onChange={(e) => updateInputValue3(e.target.value)}/>
       </div>
       <div className="flex justify-between">
          <label className="flex text-xs inputof">Altura de entrepiso:</label>
          <input className=" text-xs  border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px]  py-1" type="text" value={inputValue4} onChange={(e) => updateInputValue4(e.target.value)}/>
       </div>
       <div className="flex justify-between">
          <label className="flex text-xs inputof">Profundidad de desplante:</label>
          <input className=" text-xs  border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px]  py-1" type="text" value={inputValue5} onChange={(e) => updateInputValue5(e.target.value)}/> 
       </div>
       <div className="flex justify-between">
          <label className="flex text-xs inputof">Espesor de la platea:</label>
          <input className=" text-xs  border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px]  py-1" type="text" value={inputValue6} onChange={(e) => updateInputValue6(e.target.value)}/>
       </div>
    </div>
  );
}

export default ComponentContext1;