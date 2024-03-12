import React from "react";
import CardPlus from "./CardPlus";

function CardTwo() {
  return (
    <>
      <div className=" flex w-full dark:bg-white">
        <div className="flex-col">
          <p className="text-sm text-sky-700 font-medium my-4">Selecciona el tipo de Sistema estructural</p>
          <p className="text-sm my-7">Citando la norma Peruana E.030 de Diseño sismoresistente en su 
          Artículo 17.- Categoría y Sistemas Estructurales: se deberá escoger un diseño estructural
          De acuerdo a la categoría de una edificación y la zona donde se ubique, ésta se proyecta empleando
          el sistema estructural que se indica en la Tabla N° 6 y respetando las restricciones a la irregularidad de la
          Tabla N° 10.
          </p>
          <div className="grid grid-cols-3  gap-6">
            <CardPlus  title="S - Albaliñeria confinada" enlace="/dashboard/metrado"  />
            <CardPlus title="S - Aporticado" enlace="/dashboard/metrado"   />
            <CardPlus title="S - Muros Estructurales" enlace="/dashboard/metrado" />
            <CardPlus title="S - Muros Estructurales" enlace="/dashboard/metrado" />
            <CardPlus title="S - Muros Estructurales" enlace="/dashboard/metrado" />
            <CardPlus title="S - Muros Estructurales" enlace="/dashboard/metrado" />
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
}

export default CardTwo;