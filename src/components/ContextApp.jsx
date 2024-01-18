"use client"
// ContextApp.js
import { ContextOneProvider } from "@/app/context/GeneralContext";
import React from "react";
import ComponentContext1 from "./ComponentContext1";
import ComponentContext2 from "./ComponentContext2";
import ComponentContext3 from "./ComponentContext3";
import ComponentContext0 from "./ComponentContext0";

function ContextApp() {
  return (
    <ContextOneProvider>
      <div className="flex flex-col space-x-4 mx-8 mt-8 justify-center">
        <div className="flex flex-col">
          <div className="flex flex-col w-full space-y-2">
            <div className="flex space-x-12 my-8 w-full items-center justify-center rounded-lg">
              <ComponentContext1 />
            <img className="h-[300px]" src="https://i.imgur.com/UdDH2pa.jpg" alt="referencia" />
            </div>
            <hr className="py-4" />
            <ComponentContext0 />
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