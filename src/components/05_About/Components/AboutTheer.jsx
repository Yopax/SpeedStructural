import React from 'react'

function AboutTheer() {
  return (
    <>
    <h6 className='text-2xl text-gray-500 font-bold mb-6 mt-3'>Un poco mas sobre mi</h6>
    <div className="grid gap-4 grid-cols-4 w-[80%] ">
      <div className="max-[768px]:col-span-4 h-full bg-sky-600 col-span-2 rounded-lg shadow-xl py-7 ">
        <div className=" flex mx-6 mb-3">
          <img
            className="w-[40px] h-[40px] rounded-full border-2"
            src="https://i.imgur.com/ITW6pUq.jpg"
          />
          <p className="text-white text-[22px] font-bold ml-3 ">
            Barreto Rodriguez Darli
          </p>
        </div>
        <p className="text-white text-lg font-bold px-7 mb-2">
          Bachiller de Ingeniería civil de profesión con conocimientos en el desarrollo web.{" "}
        </p>
        <p className="text-white text-sm text-opacity-50 font-medium px-7">
          “ Tengo sólidos conocimientos en diseño estructural, programas como
          Revit, AutoCAD y SAP2000 son herramientas que domino para crear
          diseños precisos y eficientes. Además, tengo experiencia en la gestión
          de proyectos y he obtenido una certificación en la metodología Lean
          Construction.
        </p>
      </div>
      <div className="max-[768px]:col-span-4 max-[768px]:py-7 flex justify-center items-center h-full bg-gray-900 rounded-lg shadow-xl ">
          <p className="text-white text-opacity-50 font-medium text-sm px-6">
            “ La ingeniería civil es el arte de diseñar, construir y mantener
            obras que benefician a la sociedad y al medio ambiente. es la
            ciencia de aplicar conocimientos y habilidades para resolver
            problemas, es el arte de hacer que las cosas funcionen, es la
            profesión que construye el mundo.”
          </p>
      </div>

      <div className="max-[768px]:col-span-4 max-[768px]:py-4 flex justify-center items-center h-full bg-sky-600 rounded-lg shadow-xl  order-3 2xl:row-span-1 lg:col-span-1 mb-5 lg:mb-0 2xl:mb-8">
          <p className="text-white text-opacity-50 font-medium text-sm px-6">
            “ En el campo del desarrollo web, soy versátil y puedo crear sitios
            web atractivos y funcionales utilizando HTML, CSS, JavaScript,
            React, Next.js y Tailwind CSS. ”
          </p>
      </div>

      <div className=" max-[768px]:col-span-4 flex justify-center items-center h-full col-span-2 bg-gray-900 order-4 rounded-lg shadow-xl">
          <p className="px-6 py-11 text-white text-opacity-50 font-medium text-sm  ">
            “ La programación es una actividad que implica el uso de un lenguaje
            formal para crear instrucciones que puedan ser ejecutadas por una
            máquina. La programación nos permite resolver problemas, automatizar
            procesos, crear aplicaciones, generar arte y expresar nuestra
            creatividad. La programación también nos ayuda a desarrollar
            habilidades como el pensamiento lógico, el razonamiento abstracto,
            la capacidad de análisis y la atención al detalle. ”
          </p>
      </div>

      <div className="max-[768px]:col-span-4 max-[768px]:py-7 max-[1024px]:py-7 justify-center items-center h-full bg-sky-600 order-2 row-span-2 rounded-lg flex flex-col ">
          <p className="text-white font-semibold text-xl self-start px-6 w-full">
            Mi filosofía académica.
          </p>
          <p className="w-full px-6 text-white text-opacity-50 font-medium text-sm">
            “Tengo muy claro que identificar las deficiencias y debilidades es
            el primer paso para toda planificación con el objetivo de progreso,
            por ello hace 6 años aproximadamente decidí encaminarme en una
            aventura que me llevaría a explorar muchos aspectos de mis
            cualidades que no había explotado. Por ello me apasioné por la
            ingeniería en general, me fascinó tener la idea de generar obras,
            productos, etc., de cero. Sin embargo, conforme iba profundizando en
            mis estudios y elaborando proyectos, noté muchas deficiencias en
            cuanto a optimización del tiempo. Una...
          </p>
      </div>
    </div>
    </>
  );
}

export default AboutTheer