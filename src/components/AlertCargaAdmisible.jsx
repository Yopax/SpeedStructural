import React from 'react'
import EcuacionQa from './EcuacionQa';

function AlertCargaAdmisible() {
  return (
    <>
      <button className='text-xs text-red-700 font-semibold' onClick={() => document.getElementById("my_modal_4").showModal()}>
      informacion adicional.

      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-[38%] max-w-5xl">
          <h3 className="font-bold text-lg">Capacidad Admisible del Terreno(qadm)</h3>
          <p className='text-xs font-bold my-4' >Se obtiene Mediante la siguiente formula:</p>
          <EcuacionQa/>
          <p className='text-[12px] font-bold mt-2'>siendo:</p>
          <div className='text-[12px]'>
          <p >qadm: Capacidad Admisible o Carga Admisible</p>
          <p >qultm: Capacidad Ultima o Carga ultima</p>
          <p >FS: Factor de seguridad</p>
          <p className='my-1 text-red-500 font-semibold'>Nota: La carga ultima se obtendra al haber realizado el estudio de suelos. </p>
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