import React from 'react'
import BotonDashboard from './BotonDashboard';
import { TbSpeedboat } from "react-icons/tb";


function PresentacionHome() {
  return (
    <>
      <div className="flex flex-col w-full justify-center text-center items-center mb-24">
        <h4 className="font text-emerald-600  text-lg font-medium mt-40">Libera tu mente, alcanza tu potencial</h4>
        <h1 className=" text-emerald-600 text-6xl font-extrabold text-center mt-4 mb-6 w-[55%]">
          Ahorra tiempo con el calculo automatico.
        </h1>
        <p className=" text-lg leading-6 mb-4 mt-2">
        ¿Cansado de realizar cálculos tediosos y repetitivos?<br /> 
        Nuestra innovadora herramienta te ofrece la solución perfecta. <br />
        Con solo unos clics, podrás obtener resultados precisos 
        y rápidos.
        </p>
        <div className='flex space-x-4 my-4'>
          <BotonDashboard />
        </div>
      </div>
    </>
  );
}

export default PresentacionHome