// ComponentContext3.js
import React from "react";
import { useEffect, useState } from "react";
import { useGeneralContext } from "@/app/context/GeneralContext";

function ComponentContext3() {
  const { inputValue1, inputValue2,inputValue4,inputValue5,
    inputValue6,inputValue7,inputValue8,inputValue9,inputValue10,
    inputValue11,inputValue12,ocupacionUso,inputValue14, servicio,inputFc, tipoSuelo, capacidadAdmisible,
    np, ca, dx,dy,nc,pec,dx_col,dy_col,l_col,nvx, dx_vgx, dy_vgx,l_vgx,nvy,dx_vgy,dy_vgy,l_vgy,
    cv,dx_t,dy_t,cvr  } = useGeneralContext();

    //Losa Aligerada
    const [roundedValue, setRoundedValue] = useState(0);

  useEffect(() => {
    const losa = inputValue7 / 25;

    const calculateRoundedValue = () => {
      if (losa === 0) {
        setRoundedValue(losa);
      } else {
        const distances = [Math.abs(losa - 30), Math.abs(losa - 25), Math.abs(losa - 20), Math.abs(losa - 17)];
        const minDistance = Math.min(...distances);
        if (minDistance === Math.abs(losa - 30)) {
          setRoundedValue(30);
        } else if (minDistance === Math.abs(losa - 25)) {
          setRoundedValue(25);
        } else if (minDistance === Math.abs(losa - 20)) {
          setRoundedValue(20);
        } else {
          setRoundedValue(17);
        }
      }
    };
    calculateRoundedValue();
  }, [inputValue7]); 

 const vigax = inputValue8/10;
 const vigay = inputValue9/10;

 //columna centreda
 const pservicio = servicio*inputValue10*inputValue2;
 const areaColumna = (pservicio/(0.45*inputFc))
 const acolumnofinal = Math.ceil(Math.sqrt(areaColumna) / 5) * 5
 
   //columna esquinada
   const pservicio2 = servicio*inputValue11*inputValue2;
   const areaColumna2 = (pservicio2/(0.35*inputFc))
   const acolumnofinal2 = Math.ceil(Math.sqrt(areaColumna2) / 5) * 5

  //columna excentrica
  const pservicio3 = servicio*inputValue12*inputValue2;
  const areaColumna3 = (pservicio3/(0.35*inputFc))
  const acolumnofinal3 = Math.ceil(Math.sqrt(areaColumna3) / 5) * 5

  //Zapatacentrada
  const zapatacentrada = pservicio/(tipoSuelo*capacidadAdmisible);
  const azapatacentrada = Math.ceil(Math.sqrt(zapatacentrada) / 5) * 5

  //Zapataesquinada
  const zapataesquinada = pservicio2/(tipoSuelo*capacidadAdmisible);
  const azapataesquinada = Math.ceil(Math.sqrt(zapataesquinada) / 5) * 5

  //Zapataexcentrica
  const zapataexcentrica = pservicio3/(tipoSuelo*capacidadAdmisible);
  const azapataexcentrica = Math.ceil(Math.sqrt(zapataexcentrica) / 5) * 5

  //CARGA MUERTA
  //Losa aligerada
  const losaAligerada = np*ca*dx*dy;
  const resultado_redondeado = Math.round(losaAligerada * 1000) / 1000;

  //Columnas
  const columnas = nc*pec*dx_col*dy_col*l_col;
  const resultado_redondeado2 = Math.round(columnas * 1000) / 1000;

  //Columnas primer PISO 
  const a = parseFloat(l_col);
  const b = parseFloat(inputValue5);
  let c = parseFloat(a+b);

  let columnas2 = nc*pec*dx_col*dy_col*c;
  
  //Vigas
  const vigasy = nvx*pec*dx_vgx*dy_vgx*l_vgx;
  const resultado_redondeado3 = Math.round(vigasy * 1000) / 1000;

  const vigasx = nvy*pec*dx_vgy*dy_vgy*l_vgy;
  const resultado_redondeado4 = Math.round(vigasx * 1000) / 1000;

  //CARGA VIVA
  //Techo
  const techo = cv*dx_t*dy_t;
  const resultado_redondeado5 = Math.round(techo * 1000) / 1000;
//Techo intermedio
  const techo2 = cvr * dx_t * dy_t;
  const resultadocvpinter = Math.round(techo2 * 1000) / 1000;
  

  function getConinValue(setRoundedValue) {
    if (setRoundedValue === 17) {
      return 0.28;
    } else if (setRoundedValue === 20) {
      return 0.3;
    } else if (setRoundedValue === 25) {
      return 0.35;
    } else if (setRoundedValue === 30) {
      return 0.4;
    } else {

      return null; 
    }
  }
  const coninValue = getConinValue(roundedValue)
  
//pisos intermedios
  const losaAligerada2 = np*coninValue*dx*dy;
  const resultado_redondeadop2 = Math.round(losaAligerada2 * 1000) / 1000;



  return (
    <div className="border w-[750px] p-8 rounded-lg mb-6">
      <div>
        <h5 className="font2 text-sm font-medium text-white w-[88px] px-3 bg-slate-500 rounded-md">
          Resultado
        </h5>
        <h2 className="font2 font-black text-gray-800 text-4xl text-center items-center mt-6">
          METRADO DE CARGAS
        </h2>
        <h2 className="font2 font-medium text-center">{inputValue1}</h2>
        <p className="font2 text-[16px] text-gray-800 font-bold my-2 italic">
          Premisa:
        </p>
      </div>

      <div className="flex flex-wrap ">
        <p className="font2 text-sm my-4">
          Para una edificación aporticada de concreto armado de {inputValue2}{" "}
          pisos destinada para {ocupacionUso} cuyas características son: <br />
          <br />
          Peso específico del concreto: {pec} T/m^3 <br /> Altura de
          entrepiso (de piso a piso): {inputValue4}m <br />
          Profundidad de desplante (contacto con platea): {inputValue5}cm <br />
          Espesor de la platea: {inputValue6}cm
        </p>

        <div>
          <p className="font2 font-medium my-2">
            Calculo del Predimensionamiento
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-xs ">
            <thead>
              <tr>
                <th></th>
                <th>Losa</th>
                <th>viga eje x-x</th>
                <th>viga eje y-y</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Altura(h)</th>
                <td>{roundedValue}cm</td>
                <td>{vigax}cm</td>
                <td>{vigay}cm </td>
              </tr>
              <tr>
                <th>Base</th>
                <td>{"-"}</td>
                <td>{vigax / 2}cm</td>
                <td>{vigay / 2}cm</td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
          <p className="font2 text-xs">
            Recomendacion : en la losa aligerada para los primeros pisos
            asumimos {roundedValue} cm y para el ultimo piso consideramos{" "}
            {roundedValue - 5}cm.
          </p>
        </div>

        <div className="overflow-x-auto  mt-10">
          <table className="table table-xs ">
            <thead>
              <tr>
                <th></th>
                <th>Columna centrada</th>
                <th>Columna esquinada</th>
                <th>Columna excentrica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Altura(h)</th>
                <td>{acolumnofinal}cm</td>
                <td>{acolumnofinal2}cm </td>
                <td>{acolumnofinal3}cm</td>
              </tr>
              <tr>
                <th>Base</th>
                <td>{acolumnofinal}cm</td>
                <td>{acolumnofinal2}cm</td>
                <td>{acolumnofinal3}cm</td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
          <p className="font2 text-xs">
            Recomendacion : en la losa aligerada para los primeros pisos
            asumimos {roundedValue} cm y para el ultimo piso consideramos{" "}
            {roundedValue - 5}cm.
          </p>
        </div>

        <div className="overflow-x-auto  mt-10">
          <table className="table table-xs ">
            <thead>
              <tr>
                <th></th>
                <th>Zapata centrada</th>
                <th>Zapata esquinada</th>
                <th>Zapata excentrica</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Altura(h)</th>
                <td>50 cm</td>
                <td>50 cm </td>
                <td>50 cm</td>
              </tr>
              <tr>
                <th>size x</th>
                <td>{azapatacentrada}cm</td>
                <td>{azapataesquinada}cm</td>
                <td>{azapataexcentrica}cm</td>
              </tr>
              <tr>
                <th>size y</th>
                <td>{azapatacentrada}cm</td>
                <td>{azapataesquinada}cm</td>
                <td>{azapataexcentrica}cm</td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
          <p className="font2 text-xs">
            Recomendacion : la altura de la zapataq (50cm) es una altura
            tentativa, porfavor verificar por punzonamiento.
          </p>
        </div>
      </div>

      <div>
        <p className="font2 font-medium mt-10 mb-4">
          Calculo del Metrado de cargas <br />
        </p>
        <p className="font2 text-sm">
          Efectuamos el metrado de cargas, calculando los pesos por pisos y para
          ello utilizamos la Norma de Cargas E020. <br />
        </p>

        <div>
          <p className="font2 mt-4 text-sm text-red-600 font-bold">
            Ultimo Piso (piso{inputValue2}:)
          </p>
          <p className="font2 text-sm font-semibold">Carga Muerta</p>
          <div className="overflow-x-auto  mt-10">
            <table className="table table-xs ">
              <thead>
                <tr>
                  <th></th>
                  <th>Losa Aligerada</th>
                  <th>Columnas</th>
                  <th>Viga x-x</th>
                  <th>Viga y-y</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>CM</th>
                  <td>{resultado_redondeado}</td>
                  <td>{resultado_redondeado2}</td>
                  <td>{resultado_redondeado3}</td>
                  <td>{resultado_redondeado4}</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
            <p className="font2 text-xs">
              Total :{" "}
              {resultado_redondeado +
                resultado_redondeado2 +
                resultado_redondeado3 +
                resultado_redondeado4}
            </p>
          </div>
          <p className="font2 text-sm font-semibold mt-8 ">Carga Viva</p>
          <table className="table table-xs ">
            <thead>
              <tr>
                <th></th>
                <th>Techo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Cv</th>
                <td>{resultado_redondeado5}</td>
              </tr>
            </tbody>
          </table>
          <p className="font2 text-xs">
            Recomendacion : {resultado_redondeado +
                resultado_redondeado2 +
                resultado_redondeado3 +
                resultado_redondeado4+resultado_redondeado5}.
          </p>
        </div>

        <div>
          <p className="font2 mt-4 text-sm text-red-600 font-bold">
            Pisos itermedios (son todos  los pisos sin tener en cuenta el ultimo ni el primero:)
          </p>
          <p className="font2 text-sm font-semibold">Carga Muerta</p>
          <div className="overflow-x-auto  mt-10">
            <table className="table table-xs ">
              <thead>
                <tr>
                  <th></th>
                  <th>Losa Aligerada</th>
                  <th>Columnas</th>
                  <th>Viga x-x</th>
                  <th>Viga y-y</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>CM</th>
                  <td>{resultado_redondeadop2}</td>
                  <td>{resultado_redondeado2}</td>
                  <td>{resultado_redondeado3}</td>
                  <td>{resultado_redondeado4}</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
            <p className="font2 text-xs">
              Total :{" "}
              {resultado_redondeadop2 +
                resultado_redondeado2 +
                resultado_redondeado3 +
                resultado_redondeado4}
            </p>
          </div>
          <p className="font2 text-sm font-semibold mt-6">Carga Viva</p>
          <table className="table table-xs ">
            <thead>
              <tr>
                <th></th>
                <th>Techo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Cv</th>
                <td>{resultadocvpinter}</td>
              </tr>
            </tbody>
          </table>
          <p className="font2 text-xs">
            Total: {resultado_redondeadop2 +
                resultado_redondeado2 +
                resultado_redondeado3 +
                resultado_redondeado4+resultadocvpinter}.
          </p>
        </div>
        <div className="mt-8">
          <p className="font2 mt-4 text-sm text-red-600 font-bold">
            Pisos Primer piso
          </p>
          <p className="font2 text-sm font-semibold mt-6">Carga Muerta</p>
          <div className="overflow-x-auto  mt-2">
            <table className="table table-xs ">
              <thead>
                <tr>
                  <th></th>
                  <th>Losa Aligerada</th>
                  <th>Columnas</th>
                  <th>Viga x-x</th>
                  <th>Viga y-y</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>CM</th>
                  <td>{resultado_redondeadop2}</td>
                  <td>{columnas2}</td>
                  <td>{resultado_redondeado3}</td>
                  <td>{resultado_redondeado4}</td>
                </tr>
              </tbody>
              <tfoot></tfoot>
            </table>
            <p className="font2 text-xs">
              Total :{" "}
              {resultado_redondeadop2 +
                columnas2 +
                resultado_redondeado3 +
                resultado_redondeado4}
            </p>
          </div>
          <p className="font2 text-sm font-semibold mt-6 ">Carga Viva</p>
          <table className="table table-xs ">
            <thead>
              <tr>
                <th></th>
                <th>Techo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Cv</th>
                <td>{resultadocvpinter}</td>
              </tr>
            </tbody>
          </table>
          <p className="font2 text-xs">
            Total: {resultado_redondeadop2 +
                columnas2 +
                resultado_redondeado3 +
                resultado_redondeado4+resultadocvpinter}.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ComponentContext3;