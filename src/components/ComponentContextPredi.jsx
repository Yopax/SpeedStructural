// ComponentContext2.js
import React from "react";
import { useGeneralContext } from "@/app/context/GeneralContext";
import { useEffect, useState } from "react";
import AlertLosaOne from "./AlertLosaOne";

const commonInputClasses = "text-gray-700 border border-solid rounded-md text-center border-gray-300 w-[120px] text-xs py-1";
const claseOne = "font justify-between  text-xs mx-2";
const subTitle = "text-xs text-sky-700 font-bold my-2";


//Formula para calcular la losa aligerada para las tres formas

function ComponentContext2() {

  //Formula para calcular la losa aligerada para las tres formas
  

  const { inputValue7, updateInputValue7 } = useGeneralContext();
  const { inputValue8, updateInputValue8 } = useGeneralContext();
  const { inputValue9, updateInputValue9 } = useGeneralContext();
  const { inputValue10, updateInputValue10 } = useGeneralContext();
  const { inputValue11, updateInputValue11 } = useGeneralContext();
  const { inputValue12, updateInputValue12 } = useGeneralContext();
  const {perimetroA, updatePerimetroA} = useGeneralContext();
  const {perimetroB, updatePerimetroB} = useGeneralContext();
  const {servicio, updateServicio} = useGeneralContext();
  const {inputFc, updateInputFc} = useGeneralContext();
  const {inputValue2, updateInputValue2} = useGeneralContext();
  const {tipoSuelo, updateTipoSuelo} = useGeneralContext();
  const {capacidadAdmisible, updatCapacidadAdmisible} = useGeneralContext();
 



// PRE - LOSAS
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

// 	Losa Prefabricada Pretensada
const [roundedValue2, setRoundedValue2] = useState(0);

useEffect(() => {
  const losa = inputValue7 / 28;
  const calculateRoundedValue2 = () => {
    if (losa === 0) {
      setRoundedValue2(losa);
    } else {
      const distances = [Math.abs(losa - 30), Math.abs(losa - 25), Math.abs(losa - 20), Math.abs(losa - 17)];
      const minDistance = Math.min(...distances);
      if (minDistance === Math.abs(losa - 30)) {
        setRoundedValue2(30);
      } else if (minDistance === Math.abs(losa - 25)) {
        setRoundedValue2(25);
      } else if (minDistance === Math.abs(losa - 20)) {
        setRoundedValue2(20);
      } else {
        setRoundedValue2(17);
      }
    }
  };
  calculateRoundedValue2();
}, [inputValue7]);

// 	Losa Maciza
const [roundedValue3, setRoundedValue3] = useState(0);

useEffect(() => {
  const losa = inputValue7 / 30;
  const calculateRoundedValue3 = () => {
    if (losa === 0) {
      setRoundedValue3(losa);
    } else {
      const distances = [Math.abs(losa - 30), Math.abs(losa - 25), Math.abs(losa - 20), Math.abs(losa - 17)];
      const minDistance = Math.min(...distances);
      if (minDistance === Math.abs(losa - 30)) {
        setRoundedValue3(30);
      } else if (minDistance === Math.abs(losa - 25)) {
        setRoundedValue3(25);
      } else if (minDistance === Math.abs(losa - 20)) {
        setRoundedValue3(20);
      } else {
        setRoundedValue3(17);
      }
    }
  };
  calculateRoundedValue3();
}, [inputValue7]);

// Losa Maciza Bidireccional

const perimetro = (perimetroA * 2 + perimetroB * 2) / 140;
const perimetroRedondeado = perimetro.toFixed(2);
const perimetroNumerico = parseFloat(perimetroRedondeado);

//PRE - VIGAS
const vigax = inputValue8/10;
const vigay = inputValue9/10;

//PRE - COLUMNAS

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

 //PRE - ZAPATAS

   //Zapatacentrada
   const zapatacentrada = pservicio/(tipoSuelo*capacidadAdmisible);
   const azapatacentrada = Math.ceil(Math.sqrt(zapatacentrada) / 5) * 5
 
   //Zapataesquinada
   const zapataesquinada = pservicio2/(tipoSuelo*capacidadAdmisible);
   const azapataesquinada = Math.ceil(Math.sqrt(zapataesquinada) / 5) * 5
 
   //Zapataexcentrica
   const zapataexcentrica = pservicio3/(tipoSuelo*capacidadAdmisible);
   const azapataexcentrica = Math.ceil(Math.sqrt(zapataexcentrica) / 5) * 5

  return (
    <>
      <div>
        <hr />
        <div className="flex">
          <div className="mr-[110px]">
            <p className={subTitle}>Losas - Ingresa los datos solicitados:</p>
            <div className="my-4">
              <label className={claseOne}>Ln - Losa aligerada:</label>
              <input
                className={commonInputClasses}
                placeholder="cm"
                value={inputValue7}
                onChange={(e) => updateInputValue7(e.target.value)}
              />
            </div>
            <p className={subTitle}>Para la losa maciza bidimensional</p>
            <div className="my-4">
              <label className={claseOne}>Largo en el eje x-x:</label>
              <input
                className={commonInputClasses}
                placeholder="cm"
                value={perimetroA}
                onChange={(e) => updatePerimetroA(e.target.value)}
              />
            </div>
            <div className="my-4">
              <label className={claseOne}>Largo en el eje y-y:</label>
              <input
                className={commonInputClasses}
                placeholder="cm"
                value={perimetroB}
                onChange={(e) => updatePerimetroB(e.target.value)}
              />
            </div>
          </div>
          <div className="overflow-x-auto my-8">
            <table className="table">
              <thead>
                <tr className="text-center">
                  <th></th>
                  <th>Losa Aligerada</th>
                  <th>Losa Prefabricada Pretensada</th>
                  <th>Losa maciza</th>
                  <th>Losa maciza Bidirecional</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-base-200 text-center text-xs">
                  <th>Altura</th>
                  <td>{roundedValue}cm</td>
                  <td>{roundedValue2}cm</td>
                  <td>{roundedValue3}cm</td>
                  <td>{perimetroNumerico}cm</td>
                </tr>
              </tbody>
            </table>
            <p className="font2 text-xs">
            Recomendacion : en la losa aligerada para los primeros pisos
            asumimos {roundedValue} cm y para el ultimo piso consideramos{" "}
            {roundedValue - 5}cm.
          </p>
            <AlertLosaOne />
          </div>
        </div>
        <hr className="my-1" />
      </div>

      <div className="flex ">
        <div className=" mr-[70px]">
          <p className={subTitle}>Vigas- Ingresa los datos solicitados:</p>
          
          <div className="flex w-[280px] justify-between my-4">
            <label className={claseOne}>Ln - Viga en el eje x-x:</label>
            <input
              className={commonInputClasses}
              placeholder="cm"
              value={inputValue8}
              onChange={(e) => updateInputValue8(e.target.value)}
            />
          </div>
          <div className="flex w-[280px] justify-between my-4">
            <label className={claseOne}>Ln - Viga en el eje y-y:</label>
            <input
              className={commonInputClasses}
              placeholder="cm"
              value={inputValue9}
              onChange={(e) => updateInputValue9(e.target.value)}
            />
          </div>
          <p className={subTitle}>Colmunas- Ingresa los datos solicitados:</p>
          <div className="flex w-[290px] justify-between my-4">
            <label className={claseOne}>Numero de pisos:</label>
            <input
              className={commonInputClasses}
              placeholder="und"
              value={inputValue2}
              onChange={(e) => updateInputValue2(e.target.value)}
            />
          </div>
          <div className="flex w-[290px] justify-between my-4">
            <label className={claseOne}>Carga de la Edificacion(P):</label>
            <input
              className={commonInputClasses}
              placeholder="kgf/m2"
              value={servicio}
              onChange={(e) => updateServicio(e.target.value)}
            />
          </div>
          <div className="flex w-[290px] justify-between my-4">
            <label className={claseOne}>Fuerza de Compresion(fc):</label>
            <input
              className={commonInputClasses}
              placeholder="kgf/cm2"
              value={inputFc}
              onChange={(e) => updateInputFc(e.target.value)}
            />
          </div>

          <div className="flex w-[290px] justify-between my-4">
            <label className={claseOne}>AT - Columna Centrada:</label>
            <input
              className={commonInputClasses}
              placeholder="m2"
              value={inputValue10}
              onChange={(e) => updateInputValue10(e.target.value)}
            />
          </div>
          <div className="flex w-[290px] justify-between my-4">
            <label className={claseOne}>AT - Columna esquinada:</label>
            <input
              className={commonInputClasses}
              placeholder="m2"
              value={inputValue11}
              onChange={(e) => updateInputValue11(e.target.value)}
            />
          </div>
          <div className="flex w-[290px] justify-between my-4">
            <label className={claseOne}>AT - Columna exentrica:</label>
            <input
              className={commonInputClasses}
              placeholder="m2"
              value={inputValue12}
              onChange={(e) => updateInputValue12(e.target.value)}
            />
          </div>
        </div>
        
        <div className="mt-[130px] overflow-x-auto justify-center items-center">
            <table className="table">
              <thead>
                <tr className="text-center">
                  <th></th>
                  <th>Viga eje x - x</th>
                  <th>Vigas eje y - y</th>
                  <th>Columna Centrada</th>
                  <th>Columna Esquinada</th>
                  <th>Columna Excentrica</th>
                  
                </tr>
              </thead>
              <tbody>
                <tr className="bg-base-200 text-center text-xs">
                  <th>Altura</th>
                  <td>{vigax}cm</td>
                  <td>{vigay}cm</td>
                  <td>{acolumnofinal}cm</td>
                  <td>{acolumnofinal2}cm</td>
                  <td>{acolumnofinal3}cm</td>
                </tr>
              </tbody>
              <tbody>
                <tr className="bg-base-200 text-center text-xs">
                  <th>Base</th>
                  <td>{vigax/2}cm</td>
                  <td>{vigay/2}cm</td>
                  <td>{acolumnofinal}cm</td>
                  <td>{acolumnofinal2}cm</td>
                  <td>{acolumnofinal3}cm</td>
                </tr>
              </tbody>
            </table>
            <AlertLosaOne />
          </div>
          
        </div>
        <hr className="my-2" />

      <div className="flex ">
        <div className="mr-[100px]">
          <p className={subTitle}>Zapatas - Ingresa los datos solicitados:</p>
          <div className="flex w-[280px] justify-between my-4">
            <label className={claseOne}>Coeficiente del suelo(k):</label>
            <input
              className={commonInputClasses}
              placeholder="1.0, 0.9, 0.8, 0.7 "
              value={tipoSuelo}
              onChange={(e) => updateTipoSuelo(e.target.value)}
            />
          </div>
          <div className="flex w-[280px] justify-between my-4">
            <label className={claseOne}>Capacidad admisible:</label>
            <input
              className={commonInputClasses}
              placeholder="kg/cm2"
              value={capacidadAdmisible} onChange={(e) => updatCapacidadAdmisible(e.target.value)}
            />
          </div>
        </div>
        <div className="overflow-x-auto">
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
            <AlertLosaOne />
          </div>
          
        </div>
        <hr className="my-2" />  

        <p className="text-lg text-emerald-700 font-bold my-4">Metrado de Cargas</p>
          <p className="text-sm my-4 text-justify">La importancia del predimensionamiento, un proceso crucial 
          que determina las dimensiones iniciales de los elementos estructurales. Estas dimensiones 
          preliminares son fundamentales para permitir un Analisis Estructural que cumpla lo establecido por las
          las normas Peruanas (José Alberto, 2022). Como dijo el ingeniero alberto el predimensionamiento es darle
          dimensiones tentativas a los elementos estructurales, si realizamos un buen predimensionamiento podemos lograr 
          que las dimensiones tentativas sean las finales, y así ahorrar tiempo, esto dependera mucho de la 
          experiencia del Ingeniero. 
          </p>
    </>
  );
}

export default ComponentContext2;