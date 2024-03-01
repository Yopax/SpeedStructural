import React from 'react'
import { useGeneralContext } from '@/app/context/GeneralContext';
import { useEffect, useState } from 'react';

function CalculoNodos() {

    const { inputValue5, np, ca, dx,dy,nc,pec,dx_col,dy_col,l_col,nvx, dx_vgx, dy_vgx,l_vgx,nvy,dx_vgy,
        dy_vgy,l_vgy, cv,dx_t,dy_t,cvr, inputValue2, inputValue7, inputFc, inputValue4, servicio, 
        inputValue8, inputValue9,inputValue10,inputValue11,inputValue12    } = useGeneralContext();


        const vigax = inputValue8/10;
        const vigay = inputValue9/10;
       
        //columna centreda
        const pservicio = servicio*inputValue10*inputValue2;
        const areaColumna = (pservicio/(0.45*inputFc))
        const acolumnofinal = Math.ceil(Math.sqrt(areaColumna) / 5) * 5

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

  const columnas2 = nc*pec*dx_col*dy_col*c;
  
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

  console.log(losaAligerada2)

//TOTALES DE CARGA

const cargatotal01 = resultado_redondeado +
resultado_redondeado2 +
resultado_redondeado3 +
resultado_redondeado4 


const cargatotal02 = resultado_redondeadop2 +
resultado_redondeado2 +
resultado_redondeado3 +
resultado_redondeado4 


const cargatotal03 = resultado_redondeadop2 +
columnas2 +
resultado_redondeado3 +
resultado_redondeado4;

//Modulo de elasticidad
 const raiz = Math.sqrt(inputFc);
const modulo = 15100 * raiz;
const ec = modulo/0.1


//Inercia de la columna

const resultadoinerciacolumnas = ((acolumnofinal*0.01) * Math.pow((acolumnofinal*0.01), 3)) / 12;
console.log(resultadoinerciacolumnas)

//  inercia de las vigas





  return (
    <>
      <div className="flex ">
        <div className="flex-col mx-[160px]">
          <div>
            <p className=" text-lg text-emerald-700 font-bold my-4">
              03. Frecuencias y Modos de Vibración
            </p>
            <p className="text-sm my-4 text-justify">
            Estimación del Peso (P) según el Artículo 26 de la norma E.030, se calcula adicionando a la carga permanente
            y total de la edificación un porcentaje de la carga viva o sobrecarga, para este caso considere edificaciones 
            de las categorías A y B, tomando el 50% de la carga viva.
            </p>
            <div>

            <div className="overflow-x-auto my-8">
            <table className="table">
              <thead>
                <tr className="text-center">
                  <th></th>
                  <th>Estimación del Peso (P)</th>
                  <th>Rigidez (k) </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-base-200 text-center text-xs">
                  <th>Ultimo Piso</th>
                  <td>{cargatotal01 + 0.5*resultado_redondeado5}</td>
                  <td>Primer Piso</td>
                </tr>
                <tr className="bg-base-200 text-center text-xs">
                  <th>Pisos Intermedios</th>
                  <td>{(cargatotal02 + 0.5*resultadocvpinter)*(inputValue2-2) }</td>
                  <td>cm</td>
                </tr>
                <tr className="bg-base-200 text-center text-xs">
                  <th>Primer piso</th>
                  <td>{cargatotal03+ 0.5*resultadocvpinter }</td>
                  <td>cm</td>
                </tr>
              </tbody>
            </table>
            <p className="font2 text-xs">
            Nota : Estos Datos son fundamentales para el cálculo de los modos de vibración.
          </p>
          </div>

            <p>Numero de písos{inputValue2}</p>


            <p className=" text-sm text-emerald-700 font-bold my-4">
                Estimación de los Pesos
            </p>
              <div>
                CARGA 01{" "}
                {cargatotal01+resultado_redondeado5 }
              </div>
              <div>
                CARGA 02{" "}
                {cargatotal02 + resultadocvpinter }
              </div>
              <div>
                CARGA 03{" "}
                {cargatotal03 + resultadocvpinter}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalculoNodos