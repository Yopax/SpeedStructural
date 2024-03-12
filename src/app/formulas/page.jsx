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
                En este apartado se visualizaran todas las formulas empleadas
                para este proyecto.
              </p>
            </blockquote>
            <Losas />

            <Todo />
            <p className="text-justify mb4:text-base text-gray-600 font-semibold mb1:text-sm mb4:mx-14 mb1:mx-2">
              Vigas
            </p>
            <p className="text-justify mb4:text-sm mb1:text-sm mb4:mx-14 mb1:mx-2">
              Las vigas se dimensionan generalmente considerando un peralte del
              orden de 1/10 a 1/12 de la luz libre. Debe aclararse que esta
              altura incluye el espesor de la losa del techo o piso, en este
              caso se predimensiono usando 1/10.
            </p>
            <p className="text-justify mb4:text-sm mb1:text-sm mb4:mx-14 mb1:mx-2">
              Las vigas se dimensionan generalmente considerando un peralte del
              orden de 1/10 a 1/12 de la luz libre. Debe aclararse que esta
              altura incluye el espesor de la losa del techo o piso
            </p>
            <p className="text-base font-bold mx-14 my-4">
              PARA EL METRADO DE CARGAS
            </p>
            <p className="text-justify mb4:text-sm mb1:text-sm mb4:mx-14 mb1:mx-2">
              Para el metrado de cargas se empleo la siguiente formula:
            </p>
            <p className="text-justify mb4:text-sm mb1:text-sm mb4:mx-14 mb1:mx-2">
              Donde:
            </p>
            <div className="w-full mx-14 h-[113px] my-4 relative">
              <div className="left-0 top-0 absolute text-center ">
                <span className="text-pink-500 text-base font-normal font-['JetBrains Mono']">
                  Losa Aligerada{" "}
                </span>
                <span className="text-blue-400 text-base font-normal ">=</span>
                <span className="text-pink-500 text-base font-normal "> </span>
                <span className="text-black text-base font-normal ">
                  Np * Ca * Dx * Dy
                </span>
              </div>
              <div className="left-0 top-[41px] absolute text-black text-sm font-normal ">
                Numero de paños
                <br />
                Carga por área
                <br />
                Dimensión en x del paño <br />
                Dimensión en y del paño{" "}
              </div>
            </div>

            <div className="w-full mx-14 h-[131px] my-4 relative">
              <div className="w-[443px] left-0 top-0 absolute">
                <span className="text-pink-500 text-base font-normal font-['JetBrains Mono']">
                  Columnas{" "}
                </span>
                <span className="text-blue-400 text-base font-normal font-['JetBrains Mono']">
                  =
                </span>
                <span className="text-pink-500 text-base font-normal font-['JetBrains Mono']">
                  {" "}
                </span>
                <span className="text-black text-base font-normal font-['JetBrains Mono']">
                  Nc * Pec * Dx_col * Dy_col * L_col
                </span>
              </div>
              <div class="left-0 top-[41px] absolute text-black text-sm font-normal font-['JetBrains Mono']">
                Numero de columnas
                <br />
                Peso especifico del concreto
                <br />
                Dimensión en x de la columna <br />
                Dimensión en y de la columna
                <br />
                Longitud de la columna{" "}
              </div>
            </div>

            <div className="w-full mx-14 h-[131px] my-4 relative">
              <div className="w-[443px] left-0 top-0 absolute">
                <span className="text-pink-500 text-base font-normal font-['JetBrains Mono']">
                  Viga x-x{" "}
                </span>
                <span className="text-blue-400 text-base font-normal font-['JetBrains Mono']">
                  =
                </span>
                <span className="text-pink-500 text-base font-normal font-['JetBrains Mono']">
                  {" "}
                </span>
                <span className="text-black text-base font-normal font-['JetBrains Mono']">
                  Nv * Pec * Dx_vg * Dy_vg * L_vg
                </span>
              </div>
              <div className="left-0 top-[41px] absolute text-black text-sm font-normal font-['JetBrains Mono']">
                Numero de vigas
                <br />
                Peso especifico del concreto
                <br />
                Dimensión en x de la viga <br />
                Dimensión en y de la viga
                <br />
                Longitud de la viga
              </div>
            </div>

            <div className="w-full mx-14 h-[131px] my-4 relative">
              <div className="w-[443px] left-0 top-0 absolute">
                <span className="text-pink-500 text-base font-normal font-['JetBrains Mono']">
                  Viga y-y{" "}
                </span>
                <span className="text-blue-400 text-base font-normal font-['JetBrains Mono']">
                  =
                </span>
                <span className="text-pink-500 text-base font-normal font-['JetBrains Mono']">
                  {" "}
                </span>
                <span className="text-black text-base font-normal font-['JetBrains Mono']">
                  Nv * Pec * Dx_vg * Dy_vg * L_vg
                </span>
              </div>
              <div className="left-0 top-[41px] absolute text-black text-sm font-normal font-['JetBrains Mono']">
                Numero de vigas
                <br />
                Peso especifico del concreto
                <br />
                Dimensión en x de la viga <br />
                Dimensión en y de la viga
                <br />
                Longitud de la viga
              </div>
            </div>

            <div className="w-full mx-14 h-[131px] my-4 relative">
              <div className="w-[283px] left-0 top-[37px] absolute">
                <span className="text-pink-500 text-base font-normal font-['JetBrains Mono']">
                  Cv{" "}
                </span>
                <span className="text-blue-400 text-base font-normal font-['JetBrains Mono']">
                  =
                </span>
                <span className="text-pink-500 text-base font-normal font-['JetBrains Mono']">
                  {" "}
                </span>
                <span className="text-black text-base font-normal font-['JetBrains Mono']">
                  Cv_tch * Dx * Dy
                </span>
              </div>
              <div class="w-[367px] left-[94px] top-[187px] absolute text-center">
                <span className="text-pink-500 text-[26px] font-normal font-['JetBrains Mono']">
                  P_pison{" "}
                </span>
                <span className="text-blue-400 text-[26px] font-normal font-['JetBrains Mono']">
                  =
                </span>
                <span className="text-pink-500 text-[26px] font-normal font-['JetBrains Mono']">
                  {" "}
                </span>
                <span className="text-black text-[26px] font-normal font-['JetBrains Mono']">
                  Cv * Dx * Dy
                </span>
              </div>
              <div className="w-[275px] left-0 top-0 absolute text-pink-500 text-base font-normal font-['JetBrains Mono'] underline">
                Techo
              </div>
              <div className="left-0 top-[78px] absolute text-black text-sm font-normal font-['JetBrains Mono']">
                Carga Viva
                <br />
                Dimensión en x <br />
                Dimensión en y{" "}
              </div>
            </div>

            <Link href="/">
              <button className="text-lg rounded-lg mt-[110px] mx-14 bg-emerald-700 px-4 py-2 text-white font-medium">
                Volver al Inicio
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default page