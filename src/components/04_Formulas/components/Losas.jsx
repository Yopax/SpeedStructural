import React from 'react'

function Losas() {
  return (
    <div className="overflow-x-auto mb4:mx-14 mb1:mx-3 my-8">
          <table className="table table-xs text-center ">
            <thead>
              <tr>
                <th>Losa Aligerada</th>
                <th>Losa Prefabricada Pretensada</th>
                <th>Losa maciza</th>
                <th>Losa maciza Bidireccional</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>h=ln/25</td>
                <td>cm</td>
                <td>cm </td>
                <td>cm </td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
          <p className="font2 text-xs">
            Recomendación : en la losa aligerada para los primeros pisos
            asumimos  cm y para el ultimo piso consideramos
           cm.
          </p>
        </div>
  )
}

export default Losas