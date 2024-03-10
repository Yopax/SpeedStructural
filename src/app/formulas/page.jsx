"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import NavBar from "@/components/01_Landing_Page/components/NavBar";
import Losas from "@/components/04_Formulas/components/Losas";
import Vigas from "@/components/04_Formulas/components/Vigas";
import Todo from "@/components/04_Formulas/components/Todo";

function page() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" text-3xl  max-[712px]:pt-20"
    >
      <NavBar />
      <div className="min-h-screen bg-gray-50 py-8 flex flex-col justify-center  lg:py-12">
        <div className="w-full px-6 py-12 bg-white shadow-xl shadow-slate-700/10 ring-1 ring-gray-900/5 md:max-w-3xl md:mx-auto lg:max-w-4xl lg:pt-16 lg:pb-28">
          <div className="flex max-w-prose mx-auto lg:text-lg">
            <h1 className="prose text-4xl font-bold text-sky-500 mr-2">
              Speed
            </h1>
            <h2 className="prose text-4xl font-bold text-gray-500">
              Enterprise
            </h2>
          </div>
          <div className="flex max-w-prose mx-auto lg:text-lg">
            <p className="prose text-[16px] font-normal text-gray-500">
              <em>Fundado por Barreto Darli ©2022</em>
            </p>
          </div>
          <div className=" mt-4 prose prose-slate mx-auto lg:prose-lg">
            <blockquote>
              <p className="leading-normal my-2 text-[14px]  mb4:mx-14 mb1:mx-2 text-gray-600 font-semibold">
                En este apartado se visualizaran todas las formulas empleadas para este proyecto. 
              </p>
            </blockquote>
            <Losas />

            <Todo />
            <p className="text-justify mb4:text-base text-gray-600 font-semibold mb1:text-sm mb4:mx-14 mb1:mx-2">Vigas</p>
            <p className="text-justify mb4:text-sm mb1:text-sm mb4:mx-14 mb1:mx-2">
              Las vigas se dimensionan generalmente considerando un peralte del orden de 1/10
              a 1/12 de la luz libre. Debe aclararse que esta altura incluye el espesor de la losa
              del techo o piso, en este caso se predimensiono usando 1/10.
            </p>
            <p className="text-justify mb4:text-sm mb1:text-sm mb4:mx-14 mb1:mx-2">
              Las vigas se dimensionan generalmente considerando un peralte del orden de 1/10
              a 1/12 de la luz libre. Debe aclararse que esta altura incluye el espesor de la losa
              del techo o piso
            </p>
           



            <Link href="/">
            <button className=" rounded-lg bg-sky-500 px-4 py-2 text-white font-medium">
              Volver al Inicio
            </button>
            </Link>
            
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default page