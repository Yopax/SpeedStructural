import AlertCargaAdmisible from '@/components/AlertCargaAdmisible';
import EcuacionQa from '@/components/EcuacionQa';
import React from 'react'

function Todo() {
  return (
    <>
      <div className="w-full text-center items-center p-2 grid grid-cols-1 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[425px]:grid-cols-1 justify-center mt-8 mb-8 ">
        <div className="flex flex-col text-white items-center justify-center  font-bold m-2 rounded-md h-[380px] bg-emerald-600">
          <div>
            <p className="justify-start bg-white text-emerald-600 text-sm leading-6 font-bold py-1 rounded-lg">
              Vigas
            </p>
            <p className="text-justify mb4:w-[500px] mb1:w-[200px] mb4:text-sm mb1:text-xs font-normal my-6 text-white">
              Las vigas se dimensionan generalmente considerando un peralte del
              orden de 1/10 a 1/12 de la luz libre. Debe aclararse que esta
              altura incluye el espesor de la losa del techo o piso <br />
              El ancho es variable de 1/2 a 2/3 veces su altura, teniendo en
              cuenta un ancho mínimo de 25cm, con la finalidad de evitar el
              congestionamiento del acero y presencia de cangrejeras.(Genner
              Villareal, 2018)
            </p>
          </div>
        </div>
        <div className="flex flex-col text-white items-center justify-center  font-bold m-2 rounded-md h-[380px] bg-emerald-600">
          <div>
            <p className="justify-start bg-white text-emerald-600 text-sm leading-6 font-bold py-1 rounded-lg">
              Columnas
            </p>
            <p className="text-justify mb4:w-[500px] mb1:w-[200px] mb4:text-sm mb1:text-xs font-normal my-6 text-white">
              Las columnas al ser sometidas a cargas axiales y momento flector,
              tienen que ser dimensionadas considerando los dos efectos
              simultáneamente, tratando de evaluar cual de los dos es el que
              gobierna en forma más influyente en dimensionamiento.(Genner
              Villareal, 2018)
            </p>
            <p className="text-justify mb4:w-[500px] mb1:w-[200px] mb4:text-sm mb1:text-xs font-normal my-6 text-white">
              {" "}
              1. COLUMNAS CENTRADAS
            </p>
            <p className="text-justify mb4:w-[500px] mb1:w-[200px] mb4:text-sm mb1:text-xs font-normal my-6 text-white">
              rea de columna = P (servicio) / 0,45f‘c
            </p>
            <p className="text-justify mb4:w-[500px] mb1:w-[200px] mb4:text-sm mb1:text-xs font-normal my-6 text-white">
              {" "}
              2. COLUMNAS EXCENTRICAS Y ESQUINADAS
            </p>
            <p className="text-justify mb4:w-[500px] mb1:w-[200px] mb4:text-sm mb1:text-xs font-normal my-6 text-white">
              Área de columna = P (servicio) / 0,35f’c <br />
            </p>
          </div>
        </div>

        <div className="flex flex-col text-white items-center justify-center  font-bold m-2 rounded-md h-[380px] bg-emerald-600">
          <div>
            <p className="justify-start bg-white text-emerald-600 text-sm leading-6 font-bold py-1 rounded-lg">
              Zapatas
            </p>
            <div className="text-justify mb4:w-[500px] mb1:w-[200px] mb4:text-sm mb1:text-xs font-normal my-6 text-white">
              <div className="text-slate-500 modal-box w-full max-w-5xl">
                <h3 className="font-bold text-lg">
                  Predimensionamiento de la zapatas
                </h3>
                <h4 className="text-xs font-bold my-4">
                  Se obtiene Mediante la siguiente formula:
                </h4>
                <div className="text-center justify-center">
                  <EcuacionQa />
                </div>
              </div>
              Recomendación : la altura de la zapata sera de (50cm) es una
              altura tentativa, por favor verificar por punzonamiento.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo