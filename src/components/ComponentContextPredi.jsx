// ComponentContext2.js
import React from "react";
import { useGeneralContext } from "@/app/context/GeneralContext";

const commonInputClasses = "text-gray-700 border border-solid rounded-md text-center border-[#DFE3E8] w-[120px] text-xs py-1";
const claseOne = "text-xs text-white font-medium mx-2";
function ComponentContext2() {
  const { inputValue7, updateInputValue7 } = useGeneralContext();
  const { inputValue8, updateInputValue8 } = useGeneralContext();
  const { inputValue9, updateInputValue9 } = useGeneralContext();
  const { inputValue10, updateInputValue10 } = useGeneralContext();
  const { inputValue11, updateInputValue11 } = useGeneralContext();
  const { inputValue12, updateInputValue12 } = useGeneralContext();


  return (
    <div className="flex flex-col items-center bg-emerald-600">
        <label className={claseOne}>Ln - Losa aligerada:</label>
        <input className={commonInputClasses} value={inputValue7} onChange={(e) => updateInputValue7(e.target.value)}/>
          <label className={claseOne}>Ln - Viga x-x:</label>
          <input className={commonInputClasses} value={inputValue8} onChange={(e) => updateInputValue8(e.target.value)}/>
          <label className={claseOne}>Ln - Viga y-y:</label>
          <input className={commonInputClasses} value={inputValue9} onChange={(e) => updateInputValue9(e.target.value)}/>
          <label className={claseOne}>AT - Columna centrada:</label>
          <input className={commonInputClasses} value={inputValue10} onChange={(e) => updateInputValue10(e.target.value)}/>
          <label className={claseOne}>AT - Columna esquinada:</label>
          <input className={commonInputClasses} value={inputValue11} onChange={(e) => updateInputValue11(e.target.value)}/> 
          <label className={claseOne}>AT - Columna exentrica:</label>
          <input className={commonInputClasses} value={inputValue12} onChange={(e) => updateInputValue12(e.target.value)}/> 
    </div>
  );
}

export default ComponentContext2;