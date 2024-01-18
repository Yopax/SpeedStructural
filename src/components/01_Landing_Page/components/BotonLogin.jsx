import React from "react";
import Link from "next/link";
import { CiLogin } from "react-icons/ci";


function BotonLogin() {
  return (
    <>
      <Link href="/login">
        <button className="flex text-sm items-center font bg-black text-white hover:bg-white hover:text-black px-4 py-2 rounded font-semibold ">
          Registrarse
          <CiLogin/>
        </button>
      </Link>
    </>
  );
}

export default BotonLogin;
