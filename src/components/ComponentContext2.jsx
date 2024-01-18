// ComponentContext2.js
import React from "react";
import { useGeneralContext } from "@/app/context/GeneralContext";

function ComponentContext2() {
  const { inputValue7, updateInputValue7 } = useGeneralContext();
  const { inputValue8, updateInputValue8 } = useGeneralContext();
  const { inputValue9, updateInputValue9 } = useGeneralContext();
  const { inputValue10, updateInputValue10 } = useGeneralContext();
  const { inputValue11, updateInputValue11 } = useGeneralContext();
  const { inputValue12, updateInputValue12 } = useGeneralContext();


  return (
    <div className="flex w-full space-x-4 items-center px-6 border border-solid py-6 border-[#DFE3E8]">
        <label className="font2 inputof">Ln - Losa aligerada:</label>
        <input className=" font2  border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px] text-xs py-1" type="text" placeholder="valor en cm" value={inputValue7} onChange={(e) => updateInputValue7(e.target.value)}/>
          <label className="flex font2 inputof">Ln - Viga x-x:</label>
          <input className=" font2 border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px] text-xs py-1" type="text" value={inputValue8} onChange={(e) => updateInputValue8(e.target.value)}/>
          <label className="flex font2 inputof">Ln - Viga y-y:</label>
          <input className=" font2 border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px] text-xs py-1" type="text" value={inputValue9} onChange={(e) => updateInputValue9(e.target.value)}/>
          <label className="flex font2 inputof">AT - Columna centrada:</label>
          <input className=" font2  border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px] text-xs py-1" type="text" value={inputValue10} onChange={(e) => updateInputValue10(e.target.value)}/>
          <label className="flex font2 inputof">AT - Columna esquinada:</label>
          <input className=" font2  border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px] text-xs py-1" type="text" value={inputValue11} onChange={(e) => updateInputValue11(e.target.value)}/> 
          <label className="flex font2 inputof">AT - Columna exentrica:</label>
          <input className=" font2 border border-solid px-4 text-center border-[#DFE3E8] rounded-md w-[120px] text-xs py-1" type="text" value={inputValue12} onChange={(e) => updateInputValue12(e.target.value)}/> 
    </div>
  );
}

export default ComponentContext2;