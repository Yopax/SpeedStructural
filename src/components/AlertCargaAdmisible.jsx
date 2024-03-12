"use client"  // This line is not needed in the snippet
import React from 'react'
import EcuacionQa from './EcuacionQa';

function AlertCargaAdmisible() {
  return (
    <>
      <button
        className="text-xs bg-white p-2 rounded-md r  text-red-700 font-semibold"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        informacion adicional.
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-[38%] max-w-5xl">
          <h3 className="font-bold text-lg">
            Predimensionamiento de la zapatas
          </h3>
          <h4 className="text-xs font-bold my-4">
            Se obtiene Mediante la siguiente formula:
          </h4>
          <div className="text-center justify-center">
            <EcuacionQa />
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default AlertCargaAdmisible