import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";

function CardNormaOne({norma, description, img, enlace}) {
  return (
    <div className="flex">
      <div className="flex w-full mt-[85px] justify-center ">
        <div className="bg-stone-200 text-center w-full p-5 rounded-md">
          <h2 className="text-center font-medium pb-4">{norma}</h2>
          <p className='text-sm mb-2 text-justify leading-4 h-[150px]'>
            {description}
          </p>
          <div className=' w-full h-[200px] '>
            <img className='object-cover w-full h-full rounded-lg' src={img} />
          </div>
          
          <div className="flex w-full text-center justify-center items-center py-4">

              <motion.button
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.9 }}
              >
                <Link href={`${enlace}`} >
                <p className=" bg-gray-600 hover:bg-emerald-700 text-white text-sm leading-6 font-medium py-1 px-3 rounded-lg">
                  Descargar Norma
                </p>
                </Link>
              </motion.button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CardNormaOne