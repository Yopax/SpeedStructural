import React from "react";
import { createContext, useContext, useState } from "react";

export const GeneralContext = createContext();

export const ContextOneProvider = ({ children }) => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [inputValue3, setInputValue3] = useState("");
  const [inputValue4, setInputValue4] = useState("");
  const [inputValue5, setInputValue5] = useState("");
  const [inputValue6, setInputValue6] = useState("");

  //PREDiMENSIONAMIENTO
  const [inputValue7, setInputValue7] = useState("");
  const [inputValue8, setInputValue8] = useState("");
  const [inputValue9, setInputValue9] = useState("");
  const [inputValue10, setInputValue10] = useState("");
  const [inputValue11, setInputValue11] = useState("");
  const [inputValue12, setInputValue12] = useState("");
  const [perimetroA, setPerimetroA] = useState("");
  const [perimetroB, setPerimetroB] = useState("");

  const updatePerimetroA = (value) => {
    setPerimetroA(value);
  };
  const updatePerimetroB = (value) => {
    setPerimetroB(value);
  };


  const updateInputValue7 = (value) => {
    setInputValue7(value);
  };
  const updateInputValue8 = (value) => {
    setInputValue8(value);
  };
  const updateInputValue9 = (value) => {
    setInputValue9(value);
  };
  const updateInputValue10 = (value) => {
    setInputValue10(value);
  };
  const updateInputValue11 = (value) => {
    setInputValue11(value);
  };
  const updateInputValue12 = (value) => {
    setInputValue12(value);
  };
  //PREDIMENSIONAMIENTO
  
  const [ocupacionUso, setOcupacionUso] = useState("");
  const [servicio, setServicio] = useState(""); 
  const [inputFc, setInputFc] = useState("");
  const [tipoSuelo, setTipoSuelo] = useState("");
  const [capacidadAdmisible, setCapacidadAdmisible] = useState("");
  //METRADO DE CARGAS

  //Cargas muertas
  // Losa aligerada
  const [np, setNp] = useState("");
  const [ca , setCa] = useState("");
  const [dx, setDx] = useState("");
  const [dy, setDy] = useState("");

  //Columnas
  const [nc, setNc] = useState("");
  const [pec, setPec] = useState("");
  const [dx_col, setDx_col] = useState("");
  const [dy_col, setDy_col] = useState("");
  const [l_col, setL_col] = useState("");

  //Vigas x-x
  const [nvx, setNvx] = useState("");
  const [dx_vgx, setDx_vgx] = useState("");
  const [dy_vgx, setDy_vgx] = useState("");
  const [l_vgx, setL_vgx] = useState("");

  //Vigas y-y
  const [nvy, setNvy] = useState("");
  const [dx_vgy, setDx_vgy] = useState("");
  const [dy_vgy, setDy_vgy] = useState("");
  const [l_vgy, setL_vgy] = useState("");

  //Cargas vivas
  //Techo
  const [cv, setCv] = useState("");
  const [cvr, setCvr] = useState("");
  const [dx_t, setDx_t] = useState("");
  const [dy_t, setDy_t] = useState("");





  const updateInputValue1 = (value) => {
    setInputValue1(value);
  };

  const updateInputValue2 = (value) => {
    setInputValue2(value);
  };

  const updateInputValue3 = (value) => {
    setInputValue3(value);
  };

  const updateInputValue4 = (value) => {
    setInputValue4(value);
  };

  const updateInputValue5 = (value) => {
    setInputValue5(value);
  };
  const updateInputValue6 = (value) => {
    setInputValue6(value);
  };
  
  const updateOcupacionUso = (value) => {
    setOcupacionUso(value);
  };
  const updateServicio = (value) => {
    setServicio(value);
  };
  const updateInputFc = (value) => {
    setInputFc(value);
  };
  const updateTipoSuelo = (value) => {
    setTipoSuelo(value);
  };
  const updatCapacidadAdmisible = (value) => {
    setCapacidadAdmisible(value);
  };
  const updateNp = (value) => {
    setNp(value);
  };
  const updateCa = (value) => {
    setCa(value);
  };
  const updateDx = (value) => {
    setDx(value);
  };
  const updateDy = (value) => {
    setDy(value);
  };
  const updateNc = (value) => {
    setNc(value);
  };
  const updatePec = (value) => {
    setPec(value);
  };
  const updateDx_col = (value) => {
    setDx_col(value);
  };
  const updateDy_col = (value) => {
    setDy_col(value);
  };
  const updateL_col = (value) => {  
    setL_col(value);
  };
  const updateNvx = (value) => {
    setNvx(value);
  };
  const updateDx_vgx = (value) => {
    setDx_vgx(value);
  };
  const updateDy_vgx = (value) => {
    setDy_vgx(value);
  };
  const updateL_vgx = (value) => {
    setL_vgx(value);
  };
  const updateNvy = (value) => {
    setNvy(value);
  };
  const updateDx_vgy = (value) => {
    setDx_vgy(value);
  };
  const updateDy_vgy = (value) => {
    setDy_vgy(value);
  };
  const updateL_vgy = (value) => {
    setL_vgy(value);
  };
  const updateCv = (value) => {
    setCv(value);
  };
  const updateDx_t = (value) => {
    setDx_t(value);
  };
  const updateDy_t = (value) => {
    setDy_t(value);
  };
  const updateCvr = (value) => {
    setCvr(value);
  };




  return (
    <GeneralContext.Provider
      value={{
        inputValue1,inputValue2,inputValue3,inputValue4,inputValue5,inputValue6,inputValue7,inputValue8,inputValue9,
        inputValue10,inputValue11,inputValue12,ocupacionUso,servicio,updateInputValue1,updateInputValue2,
        updateInputValue3,updateInputValue4,updateInputValue5,updateInputValue6,updateInputValue7,
        updateInputValue8,updateInputValue9,updateInputValue10,updateInputValue11,updateInputValue12,
        updateOcupacionUso,updateServicio, inputFc, updateInputFc, tipoSuelo, updateTipoSuelo, capacidadAdmisible, updatCapacidadAdmisible
        ,updateNp,updateCa,updateDx,updateDy,updateNc,updatePec,updateDx_col,updateDy_col,updateL_col,updateNvx,updateDx_vgx,updateDy_vgx,updateL_vgx, 
        updateNvy,updateDx_vgy,updateDy_vgy,updateL_vgy,updateCv,updateDx_t,updateDy_t, np, ca, dx, dy, nc, pec, dx_col, dy_col, l_col, nvx, dx_vgx, dy_vgx, 
        l_vgx, nvy, dx_vgy, dy_vgy, l_vgy, cv, dx_t, dy_t, cvr, updateCvr, perimetroA, perimetroB, updatePerimetroA, updatePerimetroB,
        
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export const useGeneralContext = () => {
  const context = useContext(GeneralContext);
  if (context === undefined) {
    throw new Error("useGeneralContext must be used within a GeneralContext");
  }
  return context;
};