"use client"
import { ContextOneProvider } from "@/app/context/GeneralContext";
import React from "react";
import ComponentContext3 from "./ComponentContext3";
import NavBarCalculo from "./NavBarCalculo";
import PreConsideraciones from "./PreConsideraciones";


function ContextApp() {
  return (
    <ContextOneProvider>
      <NavBarCalculo />
      <PreConsideraciones />
      <div className="w-auto mt-[63px] flex flex-col space-x-4 mx-8 justify-center">
        <div className="flex flex-col">
          <div className="flex flex-col w-full space-y-2">

            
            <div className="flex space-x-12 my-8 w-full items-center justify-center rounded-lg">

            <img className="h-[300px]" src="https://i.imgur.com/UdDH2pa.jpg" alt="referencia" />
            </div>
          </div>
          <hr className="my-10" />
        </div>

        <div className="flex w-full items-center justify-center ">
          <ComponentContext3 />
        </div>
      </div>
    </ContextOneProvider>
  );
}

export default ContextApp;