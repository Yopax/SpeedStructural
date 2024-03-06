import React from 'react'
import BotonDashboard from './BotonDashboard';


function PresentacionHome() {
  return (
    <>
      <div className="flex flex-col w-full justify-center text-center items-center mb-24">
        
        <h4 className="font text-emerald-600  text-lg font-medium mt-[140px] ">
         Web App creada para optimizar tu tiempo de cálculo del
        </h4>
        <h1 className=" text-emerald-600 text-6xl font-extrabold text-center my-6 w-[55%]">
          Predimensionamiento y metrado de cargas.<br />
        </h1>
        
        <p className=" text-[18px] leading-6 mb-2 mt-2">
        Speed Structural,tiene como finalidad optimizar el tiempo de calculo del <br /> 
        predimensionamiento y metrado de cargas para un análisis y diseño sísmico.<br /> 
        </p>
        <p className=' mb-6 text-[10px] font-semibold'>
          Proyecto de titulación para optar el grado Ingeniero Civil - Barreto Rodriguez Darli
        </p>
        
        <div className='flex space-x-4 my-2'>
          <BotonDashboard />
        </div>
      </div>
    </>
  );
}

export default PresentacionHome