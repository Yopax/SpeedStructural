import React from 'react'
import { motion } from "framer-motion";
import Link from "next/link";

function CardNormaOne({norma, description}) {
  return (
    <div className="flex">
      <div className="flex w-full mt-[85px] justify-center ">
        <div className="bg-stone-200 text-justify w-full p-5 rounded-md">
          <h2 className="text-center font-medium pb-4">{norma}</h2>
          <p className='text-sm'>
            {description}
          </p>
          <div>
            <img className='w-full h-[200px]' src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
          
          <div className="flex w-full text-center justify-center items-center py-4">
            <Link href="/dashboard">
              <motion.button
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 1.9 }}
              >
                <p className=" bg-gray-600 hover:bg-emerald-700 text-white text-sm leading-6 font-medium py-1 px-3 rounded-lg">
                  Descargar Norma
                </p>
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardNormaOne