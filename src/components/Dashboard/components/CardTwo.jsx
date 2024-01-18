import React from "react";
import CardPlus from "./CardPlus";

function CardTwo() {
  return (
    <>
      <div className=" w-full h-[200px]">
        <div className=" relative w-full">
          <div className="flex absolute ml-2 w-full items-center  justify-center space-x-6 mt-6">
            <CardPlus  title="Predimensionamiento" enlace="/dashboard/metrado"  />
            <CardPlus title="Metrado de Cargas" />
            <CardPlus title="Apuntes" />
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
}

export default CardTwo;