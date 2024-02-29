import React from 'react'
import { GrSelect } from "react-icons/gr";
import { GrConfigure } from "react-icons/gr";
import { BsInputCursor } from "react-icons/bs";
import { GrDocumentText } from "react-icons/gr";





function Descripcion() {
  return (
    <>
      <div className="w-full text-center items-center p-2 grid grid-cols-2 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[425px]:grid-cols-1 justify-center mt-8 mb-8 ">
        
        <div className="flex flex-col text-white items-center justify-center  font-bold m-2 rounded-md h-80 bg-emerald-600">
          <div>
          <button
            type="button"
            className=" bg-white text-emerald-600 text-sm leading-6 font-bold py-1 px-3 rounded-lg"
          >
            01.Selecciona
          </button>
          <p className='text-sm font-normal my-6 text-white'>Selecciona el tipo de calculo que se desea realiza</p>
          </div>
          <div className="flex flex-col text-9xl text-center items-center justify-center">
            <GrSelect />
          </div>
        </div>
        <div className="flex flex-col text-white items-center justify-center  font-bold m-2 rounded-md h-80 bg-blue-600">
          <div>
          <button
            type="button"
            className=" bg-white text-blue-600 text-sm leading-6 font-bold py-1 px-3 rounded-lg"
          >
            02.Configura
          </button>
          <p className='text-sm font-normal my-6 text-white'>Configura tu proyecto según tus necesidades</p>
          </div>
          <div className="flex flex-col text-9xl text-center items-center justify-center">
          <GrConfigure />

          </div>
        </div>
        <div className="flex flex-col text-white items-center justify-center  font-bold m-2 rounded-md h-80 bg-blue-600">
          <div>
          <button
            type="button"
            className=" bg-white text-blue-600 text-sm leading-6 font-bold py-1 px-3 rounded-lg"
          >
            03.Ingresa
          </button>
          <p className='text-sm font-normal my-6 text-white'>Ingresa los datos solicitados</p>
          </div>
          <div className="flex flex-col text-9xl text-center items-center justify-center">
          <BsInputCursor />

          </div>
        </div>
        <div className="flex flex-col text-white items-center justify-center  font-bold m-2 rounded-md h-80 bg-emerald-600">
          <div>
          <button
            type="button"
            className=" bg-white text-emerald-600 text-sm leading-6 font-bold py-1 px-3 rounded-lg"
          >
            04.Obtén tu informe
          </button>
          <p className='text-sm font-normal my-6 text-white'>Visualiza el calculo completo en un informe</p>
          </div>
          <div className="flex flex-col text-9xl text-center items-center justify-center">
          <GrDocumentText />

          </div>
        </div>
        
      </div>
    </>
  );
}

export default Descripcion