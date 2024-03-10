import React from "react";
import BotonDashboard from "./BotonDashboard";

function PresentacionHome() {
  return (
    <>
      <div className="flex mb-24">
        <div className="flex-col w-full justify-center text-center ">
          <h4 className="font text-emerald-600  mb1:text-[13px] font-medium mt-[140px] mb1:mx-4 mb4:text-lg ">
            Web App creada para optimizar tu tiempo de cálculo del
          </h4>
          <h1 className=" flex justify-center mb4:mx-[350px] text-emerald-600 font-extrabold text-center mb4:my-6 mb1:my-2 mb1:text-emerald-600 mb4:text-emerald-600 mb4:text-6xl mb1:text-[30px] mb1:px-2">
            Predimensionamiento y metrado de cargas.
            <br />
          </h1>
          <p className=" mb4:text-[18px] leading-6 mb-2 mt-2 mb1:mx-10">
            Speed Structural,tiene como finalidad optimizar el tiempo de calculo
            del <br />
            predimensionamiento y metrado de cargas para un análisis y diseño
            sísmico.
            <br />
          </p>
          <p className=" mb-6 text-[10px] font-semibold">
            Proyecto de titulación para optar el grado Ingeniero Civil - Barreto
            Rodriguez Darli
          </p>
          <div className="flex justify-center  space-x-4 my-2">
            <BotonDashboard />
          </div>
        </div>
      </div>
    </>
  );
}

export default PresentacionHome;
