import React from "react";
import { useGeneralContext } from "@/app/context/GeneralContext";
import AlertCargaAdmisible from "./AlertCargaAdmisible";

const claseDiv = "flex bg-emerald-600 flex-col w-[400px]   border-2 rounded-lg space-y-2 border-solid p-6"
const claseDivTwo = "flex justify-between"
const claseOne = " text-xs border border-solid  text-center border-[#DFE3E8] rounded-md w-[140px]  py-1"
const claseTwo ="text-xs text-white font-bold"

function ComponentContext1() {
  const { inputValue1, updateInputValue1,inputValue2, updateInputValue2,
    inputValue3, updateInputValue3,inputValue4, updateInputValue4,inputValue5, updateInputValue5,
    inputValue6, updateInputValue6, ocupacionUso, updateOcupacionUso, servicio, updateServicio,
   inputFc , updateInputFc, tipoSuelo, updateTipoSuelo,capacidadAdmisible, updatCapacidadAdmisible } = useGeneralContext();

  return (
    <div className={claseDiv}>
      <p className="font2 text-[16px] text-center  font-bold mb-4">Información General del Proyecto</p>
      <div className={claseDivTwo}>
        <label className={claseTwo}>Nombre del autor:</label>
        <input className={claseOne} type="text" placeholder="Darli Barreto" value={inputValue1} onChange={(e) => updateInputValue1(e.target.value)}/>
      </div>
      <div className={claseDivTwo}>
        <label className={claseTwo}>Ocupación/uso:</label>
        <input className={claseOne} type="text" placeholder="Escuela, hospital,etc" value={ocupacionUso} onChange={(e) => updateOcupacionUso(e.target.value)}/>
      </div>
      <div className={claseDivTwo}>
        <label className={claseTwo}>Carga de la edificación(P):</label>
        <input className={claseOne} type="text"  placeholder="kg/m2" value={servicio} onChange={(e) => updateServicio(e.target.value)}/>
      </div>
      <div className={claseDivTwo}>
        <label className={claseTwo}>Coeficiente del suelo(k):</label>
        <input className={claseOne} type="text"  placeholder="1.0, 0.9, 0.8, 0.7" value={tipoSuelo} onChange={(e) => updateTipoSuelo(e.target.value)}/>
      </div>
      <div className={claseDivTwo}>
        <label className={claseTwo}>Capacidad admisible del terreno:</label>
        <div className="flex flex-col">
           <input className={claseOne} type="text" placeholder="kg/cm2"  value={capacidadAdmisible} onChange={(e) => updatCapacidadAdmisible(e.target.value)}/>
           <AlertCargaAdmisible />
        </div>
       
      </div>
      <div className={claseDivTwo}>
        <label className={claseTwo}>Fuerza de compresión(fc):</label>
        <input className={claseOne} type="text" placeholder="kg/cm2"  value={inputFc} onChange={(e) => updateInputFc(e.target.value)}/>
      </div>

       <div className={claseDivTwo}>
          <label className={claseTwo}>N° de pisos</label>
          <input className={claseOne} type="text" placeholder="0" value={inputValue2} onChange={(e) => updateInputValue2(e.target.value)}/>
       </div>
       <div className={claseDivTwo}>
          <label className={claseTwo}>Altura de entrepiso:</label>
          <input className={claseOne} type="text" placeholder="m" value={inputValue4} onChange={(e) => updateInputValue4(e.target.value)}/>
       </div>
       <div className={claseDivTwo}>
          <label className={claseTwo}>Profundidad de desplante:</label>
          <input className={claseOne} type="text" placeholder="m" value={inputValue5} onChange={(e) => updateInputValue5(e.target.value)}/> 
       </div>
       <div className={claseDivTwo}>
          <label className={claseTwo}>Espesor de la platea(si tuviera):</label>
          <input className={claseOne} type="text" placeholder="cm" value={inputValue6} onChange={(e) => updateInputValue6(e.target.value)}/>
       </div>
    </div>
  );
}

export default ComponentContext1;
