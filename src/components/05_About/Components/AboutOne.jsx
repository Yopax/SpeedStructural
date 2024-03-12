import Link from 'next/link'
import React from 'react'

function AboutOne() {
  return (
    <div className=" max-[425px]:w-[240px] max-[425px]:mb-[50px] max-[425px]:mr-0 max-[1024px]:h-[400px] max-[768px]:h-[400px] justify-center bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-gray-500 via-white to-white flex flex-col items-center  bg-white-200 w-[20%] text-center h-[380px] mr-10 rounded-lg shadow-2xl">
          <img
            className="max-[768px]:w-[60px] max-[768px]:h-[60px] mb-3 w-[90px] h-[90px] rounded-full shadow-lg"
            src="https://i.imgur.com/ITW6pUq.jpg"
            alt=""
          />
          <p className="max-[1024px]:mx-[10px] leading-normal max-[768px]:text-[14px] mb-1 text-xl font-medium text-white dark:text-white">
            Barreto Rodriguez Darli
          </p>
          <p className="text-sm text-white dark:text-gray-400  px-8">
            Bachiller de Ingeniería Civil
          </p>
          <p className="text-sm text-white dark:text-gray-400  px-8">
            Full stack developer frond-end
          </p>
          <p className="text-sm text-white dark:text-gray-400  px-8 mb-5">
            Diseñador UI/UX
          </p>
          <div className="flex flex-col ">
            <Link href="https://cv-barreto.vercel.app/" target='blank'>
            <button className="max-[1024px]:w-[150px] min-[678px]:w-[110px] w-[230px] mb-2 items-center py-2 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Contactar
            </button>
            </Link>
            <Link href="/certificaciones">
            <button className="max-[1024px]:w-[150px] min-[678px]:w-[110px] w-[230px] items-center py-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">
              Certificados
            </button>
            </Link>
          </div>
        </div>
  )
}

export default AboutOne