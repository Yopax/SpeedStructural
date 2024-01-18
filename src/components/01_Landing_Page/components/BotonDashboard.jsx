import React from 'react'
import Link from 'next/link'

function BotonDashboard() {
  return (
    <>
      <Link href="/dashboard">
      <button
            type="button"
            className=" bg-emerald-600 hover:bg-blue-600 text-white text-lg  font-bold py-4 px-10 rounded-lg"
          >
            PROBAR AHORA
          </button>
      </Link>
    </>
  );
}

export default BotonDashboard;