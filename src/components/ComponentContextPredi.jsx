// ComponentContext2.js
import React from "react";
import { useGeneralContext } from "@/app/context/GeneralContext";
import { useEffect, useState } from "react";

const commonInputClasses = " dark:text-white text-gray-700 border border-solid rounded-md text-center border-gray-300 w-[120px] text-xs py-1";
const claseOne = "font-medium text-gray-900 font justify-between  text-xs mx-2";
const subTitle = "text-xs text-white font-bold my-2";
const claseTwo = "text-xs text-white font-medium mx-2 ";
const claseDivOne = "flex flex-col self-center text-white items-center justify-center text-center m-2 rounded-md h-72 w-44 bg-emerald-700"


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
  const {np, updateNp} = useGeneralContext();
  const {ca, updateCa} = useGeneralContext();
  const {dx, updateDx} = useGeneralContext();
  const {dy, updateDy} = useGeneralContext();
  const {pec, updatePec} = useGeneralContext();
  const {nc, updateNc} = useGeneralContext();
  const {dx_col, updateDx_col} = useGeneralContext();
  const {dy_col, updateDy_col} = useGeneralContext();
  const {l_col, updateL_col} = useGeneralContext();
  const {nvx, updateNvx} = useGeneralContext();
  const {dx_vgx, updateDx_vgx} = useGeneralContext();
  const {dy_vgx, updateDy_vgx} = useGeneralContext();
  const {l_vgx, updateL_vgx} = useGeneralContext();
  const {nvy, updateNvy} = useGeneralContext();
  const {dx_vgy, updateDx_vgy} = useGeneralContext();
  const {dy_vgy, updateDy_vgy} = useGeneralContext();
  const {l_vgy, updateL_vgy} = useGeneralContext();
  const {cv, updateCv} = useGeneralContext();
  const {cvr, updateCvr} = useGeneralContext();
  const {dx_t, updateDx_t} = useGeneralContext();
  const {dy_t, updateDy_t} = useGeneralContext();
  const {inputValue4, updateInputValue4} = useGeneralContext();
  const {inputValue5, updateInputValue5} = useGeneralContext();
  const {inputValue6, updateInputValue6} = useGeneralContext();
  const {inputValue1, updateInputValue1} = useGeneralContext();
  const {ocupacionUso, updateOcupacionUso} = useGeneralContext();




 



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
        <div className="flex ">
          <div className="my-2  mr-[68px] bg-emerald-700 w-[336px] p-4 rounded-md">
            <p className={subTitle}>Losas - Ingresa los datos solicitados:</p>
            <div className="flex my-4 justify-between">
              <label className={claseOne}>Ln - Losa aligerada:</label>
              <input
                className={commonInputClasses}
                placeholder="cm"
                value={inputValue7}
                onChange={(e) => updateInputValue7(e.target.value)}
              />
            </div>
            <p className={subTitle}>Para la losa maciza bidimensional</p>
            <div className="flex my-4 justify-between">
              <label className={claseOne}>Largo en el eje x-x:</label>
              <input
                className={commonInputClasses}
                placeholder="cm"
                value={perimetroA}
                onChange={(e) => updatePerimetroA(e.target.value)}
              />
            </div>
            <div className="flex my-4 justify-between">
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
                  <th>Losa maciza Bidireccional</th>
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
            Recomendación : en la losa aligerada para los primeros pisos
            asumimos {roundedValue} cm y para el ultimo piso consideramos{" "}
            {roundedValue - 5}cm.
          </p>
            
          </div>
        </div>
        <hr className="my-1" />
      </div>

      <div className="flex ">
        <div className="my-2 mr-[70px] bg-emerald-700 w-[320px] p-4 rounded-md">
          <p className={subTitle}>Vigas- Ingresa los datos solicitados:</p>
          
          <div className="flex w-[290px] justify-between my-4">
            <label className={claseOne}>Ln - Viga en el eje x-x:</label>
            <input
              className={commonInputClasses}
              placeholder="cm"
              value={inputValue8}
              onChange={(e) => updateInputValue8(e.target.value)}
            />
          </div>
          <div className="flex w-[290px] justify-between my-4">
            <label className={claseOne}>Ln - Viga en el eje y-y:</label>
            <input
              className={commonInputClasses}
              placeholder="cm"
              value={inputValue9}
              onChange={(e) => updateInputValue9(e.target.value)}
            />
          </div>
          <p className={subTitle}>Columnas- Ingresa los datos solicitados:</p>
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
            <label className={claseOne}>Carga de la Edificación(P):</label>
            <input
              className={commonInputClasses}
              placeholder="kgf/m2"
              value={servicio}
              onChange={(e) => updateServicio(e.target.value)}
            />
          </div>
          <div className="flex w-[290px] justify-between my-4">
            <label className={claseOne}>Fuerza de Compresión(fc):</label>
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
            <label className={claseOne}>AT - Columna excéntrica:</label>
            <input
              className={commonInputClasses}
              placeholder="m2"
              value={inputValue12}
              onChange={(e) => updateInputValue12(e.target.value)}
            />
          </div>
        </div>
        
        <div className="overflow-x-auto my-8">
            <table className="table w-[50%]">
              <thead>
                <tr className="text-center  ">
                  <th></th>
                  <th>Viga eje x - x</th>
                  <th>Vigas eje y - y</th>
                  <th>Columna Centrada</th>
                  <th>Columna Esquinada</th>
                  <th>Columna Excéntrica</th>
                  
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
            
          </div>
          
        </div>
        <hr className="my-2" />

      <div className="flex ">
        <div className="my-2 mr-[70px] bg-emerald-700 w-[320px] p-4 rounded-md">
          <p className={subTitle}>Zapatas - Ingresa los datos solicitados:</p>
          <div className="flex w-[290px] justify-between my-4">
            <label className={claseOne}>Coeficiente del suelo(k):</label>
            <input
              className={commonInputClasses}
              placeholder="1.0, 0.9, 0.8, 0.7 "
              value={tipoSuelo}
              onChange={(e) => updateTipoSuelo(e.target.value)}
            />
          </div>
          <div className="flex w-[290px] justify-between my-4">
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
                <th>Zapata excéntrica</th>
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
            Recomendación : la altura de la zapata sera de (50cm) es una altura
            tentativa, por favor verificar por punzonamiento.
          </p>
            
          </div>
          
        </div>
        <hr className="my-2" />  

        <p className="text-lg text-emerald-700 font-bold my-4">02. Metrado de Cargas</p>
          <p className="text-sm my-4 text-justify">El metrado de cargas es una técnica con la cual se estiman las cargas actuantes sobre
los distintos elementos estructurales que componen al edificio. Este proceso es aproximado ya que por lo general se desprecian los efectos hiperestáticos producidos por los
momentos flectores, salvo que estos sean muy importantes.  
        </p>

        <div className="w-full justify-center text-center items-center p-2 grid grid-cols-5 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[425px]:grid-cols-1 mt-8 mb-8 ">
        <div className={claseDivOne}  >
  
          <p  className="mb-2">Paños</p>
          <label className={claseTwo}>
            Numero de paños:
          </label>
          <input
            className={commonInputClasses} placeholder="und"
            value={np}
            onChange={(e) => updateNp(e.target.value)}
          />
          <label className={claseTwo}>
            Carga por área:
          </label>
          <input
            className={commonInputClasses} placeholder="tnf/m2"
            value={ca}
            onChange={(e) => updateCa(e.target.value)}
          />
          
          <label className={claseTwo}>
            Dim en x del paño :
          </label>
          <input
            className={commonInputClasses} placeholder="m"
            value={dx}
            onChange={(e) => updateDx(e.target.value)}
          />
          <label className={claseTwo}>
            Dim en x del paño :
          </label>
          <input
            className={commonInputClasses} placeholder="m"
            value={dy}
            onChange={(e) => updateDy(e.target.value)}
          />
        </div>
        <div className={claseDivOne}>
        <p >Columnas</p>
        <label className={claseTwo}>
            Peso especifico - concreto:
          </label>
          <input
            className={commonInputClasses} placeholder="tn/m3"
            value={pec}
            onChange={(e) => updatePec(e.target.value)}
          />
        <label className={claseTwo}>
          Numero de columnas :
        </label>
        <input
          className={commonInputClasses} placeholder="und"
          value={nc}
          onChange={(e) => updateNc(e.target.value)}
        />
        <label className={claseTwo}>
          Dim x de la columna :
        </label>
        <input
          className={commonInputClasses} placeholder="m"
          value={dx_col}
          onChange={(e) => updateDx_col(e.target.value)}
        />
        <label className={claseTwo}>
          Dim y de la columna :
        </label>
        <input
          className={commonInputClasses} placeholder="m"
          value={dy_col}
          onChange={(e) => updateDy_col(e.target.value)}
        />
        <label className={claseTwo}>
          Longitud de la columna :
        </label>
        <input
          className={commonInputClasses} placeholder="m"
          value={l_col}
          onChange={(e) => updateL_col(e.target.value)}
        />
        </div>
        <div className={claseDivOne}>
        <p  className="mb-10">Vigas en x</p>
        <label className={claseTwo}>
          Numero de vigas en x :
        </label>
        <input
          className={commonInputClasses} placeholder="und"
          type="text"
          value={nvx}
          onChange={(e) => updateNvx(e.target.value)}
        />
        <label className={claseTwo}>
          Dim en x de la vigax :
        </label>
        <input
          className={commonInputClasses} placeholder="m"
          type="text"
          value={dx_vgx}
          onChange={(e) => updateDx_vgx(e.target.value)}
        />
        <label className={claseTwo}>
          Dim en y de la vigax :
        </label>
        <input
          className={commonInputClasses} placeholder="m"
          type="text"
          value={dy_vgx}
          onChange={(e) => updateDy_vgx(e.target.value)}
        />
        <label className={claseTwo}>
          Longitud de la vigax :
        </label>
        <input
          className={commonInputClasses} placeholder="m"
          type="text"
          value={l_vgx}
          onChange={(e) => updateL_vgx(e.target.value)}
        />
        </div>
        <div className={claseDivOne}>
        <p  className="mb-10">Vigas en y</p>
        <label className={claseTwo}>
          Numero de vigas en y :
        </label>
        <input
          className={commonInputClasses} placeholder="und"
          type="text"
          value={nvy}
          onChange={(e) => updateNvy(e.target.value)}
        />
        <label className={claseTwo}>
          Dim en x de la vigay :
        </label>
        <input
          className={commonInputClasses} placeholder="m"
          type="text"
          value={dx_vgy}
          onChange={(e) => updateDx_vgy(e.target.value)}
        />
        <label className={claseTwo}>
          Dim en y de la vigay :
        </label>
        <input
          className={commonInputClasses} placeholder="m"
          type="text"
          value={dy_vgy}
          onChange={(e) => updateDy_vgy(e.target.value)}
        />
        <label className={claseTwo}>
          Longitud de la vigay :
        </label>
        <input
          className={commonInputClasses} placeholder="m"
          type="text"
          value={l_vgy}
          onChange={(e) => updateL_vgy(e.target.value)}
        />
        </div>
        <div className={claseDivOne}>
        <p  className="mb-10">Carga Viva</p>
        <label className={claseTwo}>
          CV techo ultimo piso :
        </label>
        <input
          className={commonInputClasses} placeholder="tn/m2"
          type="text"
          value={cv}
          onChange={(e) => updateCv(e.target.value)}
        />
        <label className={claseTwo}>
          CV techo demás pisos :
        </label>
        <input
          className={commonInputClasses} placeholder="tn/m2"
          type="text"
          value={cvr}
          onChange={(e) => updateCvr(e.target.value)}
        />
        <label className={claseTwo}>
          ancho del plano :
        </label>
        <input
          className={commonInputClasses} placeholder="m"
          type="text"
          value={dx_t}
          onChange={(e) => updateDx_t(e.target.value)}
        />
        <label className={claseTwo}>
          largo del plano :
        </label>
        <input
          className={commonInputClasses} placeholder="m"
          type="text"
          value={dy_t}
          onChange={(e) => updateDy_t(e.target.value)}
        />
        </div>
        <div className={claseDivOne}>
        <p  className="mb-2">Datos extras</p>
        <label className={claseTwo}>Autor:</label>
          <input className={commonInputClasses} type="text" placeholder="Barreto Darli" value={inputValue1} onChange={(e) => updateInputValue1(e.target.value)}/>
          <label className={claseTwo}>Ocupación/Uso</label>
          <input className={commonInputClasses} type="text" placeholder="Escuelas, etc" value={ocupacionUso} onChange={(e) => updateOcupacionUso(e.target.value)}/>
          <label className={claseTwo}>Altura de entrepiso:</label>
          <input className={commonInputClasses} type="text" placeholder="m" value={inputValue4} onChange={(e) => updateInputValue4(e.target.value)}/>
          <label className={claseTwo}>Profundidad de desplante:</label>
          <input className={commonInputClasses} type="text" placeholder="m" value={inputValue5} onChange={(e) => updateInputValue5(e.target.value)}/> 
          <label className={claseTwo}>Espesor de la platea(si tuviera):</label>
          <input className={commonInputClasses} type="text" placeholder="cm" value={inputValue6} onChange={(e) => updateInputValue6(e.target.value)}/>

        </div>
  
        
      </div> 
    </>
  );
}

export default ComponentContext2;