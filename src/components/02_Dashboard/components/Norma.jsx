import React from 'react'
import { IoDocumentTextOutline } from "react-icons/io5";

function Norma({title}) {
  return (
    <>
      <li>
        <div>
          <IoDocumentTextOutline />
          <p className="text-sm my-2 font font-medium">{title}</p>
        </div>
      </li>
    </>
  );
}

export default Norma