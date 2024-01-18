import React from 'react'
import InputOne from './InputOne'
import Tabs from './Tab';

function CardOne() {
  return (
    <>
      <div className="bg-emerald-600 card mt-6 w-[1000px] h-[320px] ml-[20px] items-center justify-center self-center py-2 text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title font text-white text-[32px] mt-3 font-bold mb-[20px]">
            ¿Que calcularemos hoy?
          </h2>
          <InputOne />
          <Tabs />
        </div>
      </div>
    </>
  );
}

export default CardOne