import React from 'react'
import { IoSearch } from "react-icons/io5";


function InputOne() {
  return (
    <>
        <div className="flex w-[450px] rounded bg-white">
          <input
            className=" w-full border-none bg-transparent px-4 py-1 text-gray-600 outline-none focus:outline-none "
            type="search"
            name="search"
            placeholder="Search..."
          />
          <button
            type='search'
            className="m-2 rounded bg-sky-600 px-4 py-2 text-white"
          >
            <IoSearch />

          </button>
        </div>
    </>
  );
}

export default InputOne