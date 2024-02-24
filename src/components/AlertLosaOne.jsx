import React from 'react'

function AlertLosaOne() {
  return (
    <>
    <button className='text-xs text-red-700 font-semibold' onClick={() => document.getElementById("my_modal_4").showModal()}>
    Nota: Formulas empleadas para estos calculos.

    </button>
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-[38%] max-w-5xl">
        
        
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  </>
  )
}

export default AlertLosaOne