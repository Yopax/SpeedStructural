"use client"
// ComponentContext3.js
import React from "react";
import { useEffect, useState } from "react";
import { useGeneralContext } from "@/app/context/GeneralContext";
import { useRef } from "react";
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { saveAs } from 'file-saver';
import * as docx from 'docx';
import { TextRun,Document, Packer, Paragraph, Table, TableCell, 
  TableRow, WidthType, Header, Footer, HeadingLevel, 
  AlignmentType, VerticalAlign, BorderStyle, Alignment } from "docx";




function ComponentContext3() {
  

  const { inputValue1, inputValue2,inputValue4,inputValue5,
    inputValue6,inputValue7,inputValue8,inputValue9,inputValue10,
    inputValue11,inputValue12,ocupacionUso,inputValue14, servicio,inputFc, tipoSuelo, capacidadAdmisible,
    np, ca, dx,dy,nc,pec,dx_col,dy_col,l_col,nvx, dx_vgx, dy_vgx,l_vgx,nvy,dx_vgy,dy_vgy,l_vgy,
    cv,dx_t,dy_t,cvr  } = useGeneralContext();

  const { perimetroA, perimetroB } = useGeneralContext();


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

// este calculo solo es para el informe final
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


  const generarPDF = () => {
    const doc = new jsPDF();
    const tableLosas = ["", "Losa Aligerada", "Losa Prefabricada Pretensada", "Losa maciza", "Losa maciza Bidirecional" ];
    const tableRows = [ ["Altura(h)", `${roundedValue}cm`, `${roundedValue2}cm`, `${roundedValue3}cm`,`${perimetroNumerico}cm`],];

    const tableVigas = ["", "viga eje x-x", "viga eje y-y"];
    const tableRows2 = [ ["Altura(h)", `${vigax}cm`, `${vigay}cm`]
    , ["Base", `${vigax/2}cm`, `${vigay/2}cm`]
  ];

    const tableColumnas = ["", "Columna centrada", "Columna esquinada", "Columna excentrica"];
    const tableRows3 = [ ["Altura(h)", `${acolumnofinal}cm`, `${acolumnofinal2}cm`, `${acolumnofinal3}cm`]
    , ["Base", `${acolumnofinal}cm`, `${acolumnofinal2}cm`, `${acolumnofinal3}cm`]
  ];

  const tableZapatas = ["", "Zapata centrada", "Zapata esquinada", "Zapata excentrica"];
    const tableRows4 = [ ["Altura(h)", `50cm`, `50cm`, `50cm`]
    , ["Size x", `${azapatacentrada}cm`, `${azapataesquinada}cm`, `${azapataexcentrica}cm`],
    ["Size y", `${azapatacentrada}cm`, `${azapataesquinada}cm`, `${azapataexcentrica}cm`],
    
  ];
  
    // Título
    doc.setFontSize(18);
    doc.text("Informe Final", 85, 10);

    doc.setFontSize(12);
    doc.text(`${inputValue1}`, 75, 16);

    doc.setFontSize(10);
      doc.text(`Este informe presenta una edificación aporticada de concreto armado de ${inputValue2} pisos  destinada`, 17, 24);
      doc.text(`para ${ocupacionUso} cuyas características son:`, 17, 28);
      doc.text(`
      Peso específico del concreto: ${pec} T/m^3  
      Altura de entrepiso (de piso a piso): ${inputValue4}m
      Profundidad de desplante (contacto con platea): ${inputValue5}cm 
      Espesor de la platea: ${inputValue6}cm`, 10, 30);

    
  
    // Subtítulo
    doc.setFontSize(12);
    doc.text("01. Predimensionamiento y Metrado de cargas", 15, 62);

    // Subtítulo
    doc.setFontSize(10);
    doc.text("Predimensionamiento - Losas", 15, 72);
    // Tabla ordenada
    tableRows.sort((a, b) => a[0] - b[0]);
    doc.autoTable({
      startY: 75,
      head: [tableLosas],
      body: tableRows,
    });
    // Descripción de la tabla
    doc.setFontSize(8);
    doc.text(`Recomendacion : en la losa aligerada para los primeros pisos asumimos ${roundedValue} cm y para el ultimo piso consideramos ${roundedValue - 5}cm.`, 14, doc.autoTable.previous.finalY + 3);

    // Subtítulo
    doc.setFontSize(10);
    doc.text("Predimensionamiento - Vigas", 15, 108);
    // Tabla ordenada
    tableRows.sort((a, b) => a[0] - b[0]);
    doc.autoTable({
      startY: 110,
      head: [tableVigas],
      body: tableRows2,
    });
    // Descripción de la tabla
    doc.setFontSize(8);

    doc.setFontSize(10);
    doc.text("Predimensionamiento - Columnas", 15, 148);
    // Tabla ordenada
    tableRows.sort((a, b) => a[0] - b[0]);
    doc.autoTable({
      startY: 150,
      head: [tableColumnas],
      body: tableRows3,
    });
    // Descripción de la tabla
    doc.setFontSize(8);


    doc.setFontSize(10);
    doc.text("Predimensionamiento - Zapatas", 15, 188);
    // Tabla ordenada
    tableRows.sort((a, b) => a[0] - b[0]);
    doc.autoTable({
      startY: 190,
      head: [tableZapatas],
      body: tableRows4,
    });
    // Descripción de la tabla
    doc.setFontSize(8);
    doc.text(`Recomendacion : la altura de la zapataq (50cm) es una altura tentativa, porfavor verificar por punzonamiento.`, 14, doc.autoTable.previous.finalY + 3);


    doc.addPage();


    // Subtítulo
    doc.setFontSize(12);
    doc.text("02. Metrado de cargas", 15, 20);
    doc.setFontSize(10);
    doc.text("Efectuamos el metrado de cargas, calculando los pesos por pisos y para ello utilizamos la Norma de Cargas E020", 15, 30);

    doc.setFontSize(10);
    doc.text(`Ultimo Piso (piso${inputValue2}:)`, 15, 40);
    doc.text("Carga Muerta", 15, 50);

    // Tabla ordenada
    const tableCargaMuerta = ["", "Losa Aligerada", "Columnas", "Viga x-x", "Viga y-y"];
    const tableRows5 = [ ["CM", `${resultado_redondeado}`, `${resultado_redondeado2}`, `${resultado_redondeado3}`, `${resultado_redondeado4}`],];
    doc.autoTable({
      startY: 55,
      head: [tableCargaMuerta],
      body: tableRows5,
    });
    // Descripción de la tabla
    doc.setFontSize(8);
    doc.text(`Total : ${resultado_redondeado + resultado_redondeado2 + resultado_redondeado3 + resultado_redondeado4}`, 14, doc.autoTable.previous.finalY + 3);

    doc.setFontSize(10);
    doc.text("Carga Viva", 15, doc.autoTable.previous.finalY + 10);
    // Tabla ordenada
    const tableCargaViva = ["", "Techo"];
    const tableRows6 = [ ["CV", `${resultado_redondeado5}`],];
    doc.autoTable({
      startY: doc.autoTable.previous.finalY + 15,
      head: [tableCargaViva],
      body: tableRows6,
    });
    // Descripción de la tabla
    doc.setFontSize(8);
    doc.text(`CV+CM : ${resultado_redondeado + resultado_redondeado2 + resultado_redondeado3 + resultado_redondeado4+resultado_redondeado5}`, 14, doc.autoTable.previous.finalY + 3);

    doc.setLineWidth(0.5); // Establecer el ancho de la línea
    doc.line(14, doc.autoTable.previous.finalY + 8, 200, doc.autoTable.previous.finalY + 8);

    doc.setFontSize(10);
    doc.text(`Pisos intermedios (son todos  los pisos sin tener en cuenta el ultimo ni el primero:)`, 15, 121);
    doc.text("Carga Muerta", 15, 126);

    // Tabla ordenada
    const tableCargaMuerta2 = ["", "Losa Aligerada", "Columnas", "Viga x-x", "Viga y-y"];
    const tableRows7 = [ ["CM", `${resultado_redondeadop2}`, `${resultado_redondeado2}`, `${resultado_redondeado3}`, `${resultado_redondeado4}`],];
    doc.autoTable({
      startY: 130,
      head: [tableCargaMuerta2],
      body: tableRows7,
    });
    // Descripción de la tabla
    doc.setFontSize(8);
    doc.text(`Total : ${resultado_redondeadop2 + resultado_redondeado2 + resultado_redondeado3 + resultado_redondeado4}`, 14, doc.autoTable.previous.finalY + 3);

    doc.setFontSize(10);
    doc.text("Carga Viva", 15, doc.autoTable.previous.finalY + 10);
    // Tabla ordenada
    const tableCargaViva2 = ["", "Techo"];
    const tableRows8 = [ ["CV", `${resultadocvpinter}`],];
    doc.autoTable({
      startY: doc.autoTable.previous.finalY + 15,
      head: [tableCargaViva2],
      body: tableRows8,
    });
    // Descripción de la tabla
    doc.setFontSize(8);
    doc.text(`CV+CM: ${resultado_redondeadop2 + resultado_redondeado2 + resultado_redondeado3 + resultado_redondeado4+resultadocvpinter}`, 14, doc.autoTable.previous.finalY + 3);

    doc.setLineWidth(0.5); // Establecer el ancho de la línea
    doc.line(14, doc.autoTable.previous.finalY + 8, 200, doc.autoTable.previous.finalY + 8);

    doc.setFontSize(10);
    doc.text(`Pisos Primer piso`, 15, 193);
    doc.text("Carga Muerta", 15, 198);

    // Tabla ordenada
    const tableCargaMuerta3 = ["", "Losa Aligerada", "Columnas", "Viga x-x", "Viga y-y"];
    const tableRows9 = [ ["CM", `${resultado_redondeadop2}`, `${columnas2}`, `${resultado_redondeado3}`, `${resultado_redondeado4}`],];
    doc.autoTable({
      startY: 200,
      head: [tableCargaMuerta3],
      body: tableRows9,
    });
    // Descripción de la tabla
    doc.setFontSize(8);
    doc.text(`Total : ${resultado_redondeadop2 + columnas2 + resultado_redondeado3 + resultado_redondeado4}`, 14, doc.autoTable.previous.finalY + 3);

    doc.setFontSize(10);
    doc.text("Carga Viva", 15, doc.autoTable.previous.finalY + 12);
    // Tabla ordenada
    const tableCargaViva3 = ["", "Techo"];
    const tableRows10 = [ ["CV", `${resultadocvpinter}`],];
    doc.autoTable({
      startY: doc.autoTable.previous.finalY + 15,
      head: [tableCargaViva3],
      body: tableRows10,
    });
    // Descripción de la tabla
    doc.setFontSize(8);
    doc.text(`CV+CM: ${resultado_redondeadop2 + columnas2 + resultado_redondeado3 + resultado_redondeado4+resultadocvpinter}`, 14, doc.autoTable.previous.finalY + 3);

    doc.setLineWidth(0.5); // Establecer el ancho de la línea
    doc.line(14, doc.autoTable.previous.finalY + 8, 200, doc.autoTable.previous.finalY + 8);
    //tabla de las cargas totales de cada piso
    const tableCargasTotales = ["", "Ultimo Piso", "Pisos intermedios", "Primer piso"];
    const tableRows11 = [ ["Cargas Totales", `${resultado_redondeado + resultado_redondeado2 + resultado_redondeado3 + resultado_redondeado4+resultado_redondeado5}`, `${resultado_redondeadop2 + resultado_redondeado2 + resultado_redondeado3 + resultado_redondeado4+resultadocvpinter}`, `${resultado_redondeadop2 + columnas2 + resultado_redondeado3 + resultado_redondeado4+resultadocvpinter}`],];
    doc.autoTable({
      startY: doc.autoTable.previous.finalY + 15,
      head: [tableCargasTotales],
      body: tableRows11,
    });

    //crea otra pagina
    doc.addPage();
    doc.setFontSize(12);
    doc.text("03. Formulas empleadas para los cálculos", 15, 18);
    doc.setFontSize(12);
    doc.text("Formulas empleadas para calcular el predimensionamiento de las losas", 15, 29);
    doc.setFontSize(10);
    doc.text("Las formulas utilizadas para calcular las losas fueron las siguientes, para la losa aligerada: ln/25, ", 15, 35);
    doc.text("para la Losa Prefabricada Pretensada: ln/28, para la losa maciza: ln/30, para la losa maciza ", 15, 40 );
    doc.text("bidireccional: ln x-x *2 + ln y-y*2 / 140", 15, 45 );

    doc.setFontSize(12);
    doc.text("Formulas empleadas para calcular el predimensionamiento de las vigas", 15, 55);
    doc.setFontSize(10);
    doc.text("Las formulas utilizadas para calcular las vigas es ta dada por, para la altura: ln/10 y para la base: ", 15, 60);
    doc.text("la altura /2, esto aplica para ambas direcciones.", 15, 65 );

    doc.setFontSize(12);
    doc.text("Formulas empleadas para calcular el predimensionamiento de las columnas", 15, 75);
    doc.setFontSize(10);
    doc.text("Para las columnas centradas: pservicio = carga de la edificacion(P)*AT - Columna Centrada:*N de pisos; ", 15, 80);
    doc.text("AreaColumna = (pservicio/(0.45*f´c del concreto))", 15, 85 );
    doc.text("Para las columnas excentricas: pservicio = carga de la edificacion(P)*AT - Columna excentrica:*N de pisos; ", 15, 90);
    doc.text("AreaColumna = (pservicio/(0.35*f´c del concreto))", 15, 95 );
    doc.text("Para las columnas esquinadas: pservicio = carga de la edificacion(P)*AT - Columna esquinada:*N de pisos; ", 15, 100);
    doc.text("AreaColumna = (pservicio/(0.35*f´c del concreto))", 15, 105 );

    doc.setFontSize(12);
    doc.text("Formulas empleadas para calcular el predimensionamiento de las zapatas", 15, 115);
    doc.setFontSize(10);
    doc.text("Para las zapatas centradas: pservicio = carga de la edificacion(P)*AT - Zapata Centrada:*N de pisos; ", 15, 120);
    doc.text("AreaZapata = (pservicio/(tipo de suelo*capacidad admisible))", 15, 125 );
    doc.text("Para las zapatas excentricas: pservicio = carga de la edificacion(P)*AT - Zapata Excentrica:*N de pisos; ", 15, 130);
    doc.text("AreaZapata = (pservicio/(tipo de suelo*capacidad admisible))", 15, 135 );
    doc.text("Para las zapatas esquinadas: pservicio = carga de la edificacion(P)*AT - Zapata Esquinada:*N de pisos; ", 15, 140);
    doc.text("AreaZapata = (pservicio/(tipo de suelo*capacidad admisible))", 15, 145 );

    //para el metreado de cargas

    doc.setFontSize(12);
    doc.text("Formulas empleadas para calcular el metrado de cargas", 15, 155);

    //losa aligerada
    doc.setFontSize(10);
    doc.text("Para la losa aligerada: np*ca*dx*dy", 15, 160);
    doc.text(`Resultado: ${np}*${ca}*${dx}*${dy} = ${resultado_redondeado}`, 15, 165);

    //columnas
    doc.setFontSize(10);
    doc.text("Para las columnas: nc*pec*dx_col*dy_col*l_col", 15, 175);
    doc.text(`Resultado: ${nc}*${pec}*${dx_col}*${dy_col}*${l_col} = ${resultado_redondeado2}`, 15, 180);

    //columnas primer piso
    doc.setFontSize(10);
    doc.text("Para las columnas del primer piso: nc*pec*dx_col*dy_col*c", 15, 190);
    doc.text(`Resultado: ${nc}*${pec}*${dx_col}*${dy_col}*${c} = ${columnas2}`, 15, 195);

    //vigas
    doc.setFontSize(10);
    doc.text("Para las vigas en y: nvx*pec*dx_vgx*dy_vgx*l_vgx", 15, 205);
    doc.text(`Resultado: ${nvx}*${pec}*${dx_vgx}*${dy_vgx}*${l_vgx} = ${resultado_redondeado3}`, 15, 210);

    doc.setFontSize(10);
    doc.text("Para las vigas en x: nvy*pec*dx_vgy*dy_vgy*l_vgy", 15, 220);
    doc.text(`Resultado: ${nvy}*${pec}*${dx_vgy}*${dy_vgy}*${l_vgy} = ${resultado_redondeado4}`, 15, 225);

    //carga viva
    doc.setFontSize(10);
    doc.text("Para el techo: cv*dx_t*dy_t", 15, 235);
    doc.text(`Resultado: ${cv}*${dx_t}*${dy_t} = ${resultado_redondeado5}`, 15, 240);

    doc.setFontSize(10);
    doc.text("Para el techo intermedio: cvr*dx_t*dy_t", 15, 250);
    doc.text(`Resultado: ${cvr}*${dx_t}*${dy_t} = ${resultadocvpinter}`, 15, 255);

    doc.save("informe.pdf");
  };
  const downloadDocument = async () => {
    const header = new Header({
        children: [new Paragraph("Impacto del Calentamiento Global")],
    });

    const footer = new Footer({
        children: [new Paragraph("Fuente: Datos recopilados")],
    });

    const title = new Paragraph({ 
        children: [new TextRun({
            text: "Informe Final - Diseño y análisis estructural",
            size: 36,
            bold: true,
            
        })],
        spacing: {
            before: 200,
            after: 400,
        },
        alignment: AlignmentType.CENTER,
        
    });
    const description2 = new Paragraph({ 
        children: [new TextRun({
            text: "Tabla 2 - Predimensionamiento de vigas",    
        })],
        spacing: {
            before: 400,
        },            
    });
    const description3 = new Paragraph({ 
        children: [new TextRun({
            text: "Tabla 3 - Predimensionamiento de columnas",    
        })],
        spacing: {
            before: 400,
        },            
    });
    const description4 = new Paragraph({ 
        children: [new TextRun({
            text: "Tabla 4 - Predimensionamiento de zapatas",    
        })],
        spacing: {
            before: 400,
        },            
    });
    const description5 = new Paragraph({ 
        children: [new TextRun({
            text: `Tabla 5 - Carga muerta- Último piso(piso${inputValue2}:)`   
        })],
        spacing: {
            before: 400,
        },            
    });
    const description6 = new Paragraph({ 
        children: [new TextRun({
            text: "Tabla 6 - Carga viva - Último piso",    
        })],
        spacing: {
            before: 400,
        },            
    });
    const description7 = new Paragraph({ 
        children: [new TextRun({
            text: "Tabla 7 - Carga muerta - Pisos intermedios (son todos los pisos sin tener en cuenta el ultimo ni el primero:)",    
        })],
        spacing: {
            before: 400,
        },            
    });
    const description8 = new Paragraph({ 
        children: [new TextRun({
            text: "Tabla 8 - Carga viva - Pisos intermedios (son todos los pisos sin tener en cuenta el ultimo ni el primero:)",    
        })],
        spacing: {
            before: 400,
        },            
    });
    const description9 = new Paragraph({ 
        children: [new TextRun({
            text: "Tabla 9 - Carga muerta - Primer piso",    
        })],
        spacing: {
            before: 400,
        },            
    });
    const description10 = new Paragraph({ 
        children: [new TextRun({
            text: "Tabla 10 - Carga viva - Primer piso",    
        })],
        spacing: {
            before: 400,
        },            
    });
    const description11 = new Paragraph({ 
        children: [new TextRun({
            text: "Tabla 11 - Totales de cargas",    
        })],
        spacing: {
            before: 400,
        },            
    });


    const subtitle = new Paragraph({ 
        children: [new TextRun({
            text: "01. Predimensionamiento de elementos estructurales",
            size: 24,
            bold: true,
        })],          
    });
    const subtitle2 = new Paragraph({ 
        children: [new TextRun({
            text: "02. Metrado de cargas",
            size: 24,
            bold: true,
        })], 
        spacing: {
            before: 400,
        },         
    });

    const introduction = new Paragraph({
        children: [new TextRun({
            text: "Estas dimensiones preliminares son fundamentales para permitir un Análisis Estructural que cumpla lo establecido por las normas Peruanas (José Alberto, 2022).",
            size: 24,
        })],
        spacing: {
            after: 200,
            before: 150,
        },
    });
    const introduction2 = new Paragraph({
        children: [new TextRun({
            text: "Efectuamos el metrado de cargas, calculando los pesos por pisos y para ello utilizamos la Norma de Cargas E-0.20",
            size: 24,
        })],
        spacing: {
            after: 200,
            before: 150,
        },
    });

    const table = new Table({
        columnWidths: [3505, 3505,3505,3505],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "",
                                size: 20,
                                bold: true,
                                
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Losa Aligerada",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Losa Prefabricada Pretensada",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Losa maciza",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Losa maciza Bidireccional",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Altura(h)",
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${roundedValue}cm`,
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${roundedValue2}cm`,
                                size: 20,                                    
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${roundedValue3}cm`,
                                size: 20,                                    
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${perimetroNumerico}cm`,
                                size: 20,
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                ],
            }),
            
        ],
    });
    const table2 = new Table({
        columnWidths: [3505, 3505,3505],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "viga eje x-x ",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "viga eje y-y ",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),

                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Altura(h)",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${vigax}cm`,
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${vigay}cm`,
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Base",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${vigax/2}cm`,
                                size: 20,                                    
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${vigay/2}cm`,
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),

                ],
            }),
        ],
    });
    const table3 = new Table({
        columnWidths: [3505, 3505,3505,3505],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Columna centrada",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Columna esquinada ",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Columna excéntrica",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),

                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Altura(h)",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${acolumnofinal}cm`,
                                size: 20,                                    
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${acolumnofinal2}cm`,
                                size: 20,                                    
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${acolumnofinal3}cm`,
                                size: 20,                                    
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),

                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Base",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${acolumnofinal}cm`,
                                size: 20,                                    
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${acolumnofinal2}cm`,
                                size: 20,                                    
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${acolumnofinal3}cm`,
                                size: 20,                                    
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                ],
            }),
        ],
    });
    const table4 = new Table({
        columnWidths: [3505, 3505,3505,3505],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Zapata centrada",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Zapata esquinada",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Zapata excéntrica",                                 
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),

                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Altura(h)",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "50cm",
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "50cm",
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "50cm",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),

                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Size x",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${azapatacentrada}cm`,
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${azapataesquinada}cm`,
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${azapataexcentrica}cm`,
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),

                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Size y",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${azapatacentrada}cm`,
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${azapataesquinada}cm`,
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${azapataexcentrica}cm`,
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                ],
            }),
        ],
    });
    const table5 = new Table({
        columnWidths: [3505, 3505,3505,3505],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },
                            left: {
                                style: BorderStyle.NIL,
                            },
                        
                        },
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Losa Aligerada",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Columnas",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Viga x-x",                                 
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },
                            right: {
                                style: BorderStyle.NIL,
                            },
                         },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Viga y-y",                                 
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),

                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            left: {
                                style: BorderStyle.NIL,
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "CM",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${resultado_redondeado}`,
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${resultado_redondeado2}`,
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${resultado_redondeado3}`,
                                size: 20,                                    
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            right: {
                                style: BorderStyle.NIL,
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${resultado_redondeado4}`,
                                size: 20,                                    
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),

                ],
            }),

        ],
    });
    const table6 = new Table({
        columnWidths: [3505, 3505,3505, 3505],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 5000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 5000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Techo",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "CV",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${resultado_redondeado5}`,
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),

                ],
            }),

        ],
    });
    const table7 = new Table({
        columnWidths: [3505, 3505,3505,3505],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Losa Aligerada",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Columnas",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Viga x-x",                                 
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Viga y-y",                                 
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),

                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "CM",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${resultado_redondeadop2}`,
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${resultado_redondeado2}`,
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${resultado_redondeado3}`,
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${resultado_redondeado4}`,
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),

                ],
            }),

        ],
    });
    const table8 = new Table({
        columnWidths: [3505, 3505,3505, 3505],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 5000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 5000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Techo",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "CV",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${resultadocvpinter}`,
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),

                ],
            }),

        ],
    });
    const table9 = new Table({
        columnWidths: [3505, 3505,3505,3505],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Losa Aligerada",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Columnas",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Viga x-x",                                 
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Viga y-y",                                 
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),

                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "CM",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${resultado_redondeadop2}`,
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${columnas2}`,
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${resultado_redondeado3}`,
                                size: 20,                                    
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${resultado_redondeado4}`,
                                size: 20,                                    
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),

                ],
            }),

        ],
    });
    const table10 = new Table({
        columnWidths: [3505, 3505,3505, 3505],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 5000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 5000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Techo",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "CV",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${resultadocvpinter}`,
                                size: 20,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),

                ],
            }),

        ],
    });
    const table11 = new Table({
        columnWidths: [3505, 3505,3505,3505],
        rows: [
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Ultimo Piso",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Pisos intermedios",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            }, },
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Primer piso",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),

                ],
            }),
            new TableRow({
                children: [
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 2000,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: "Cargas Totales",
                                size: 20,
                                bold: true,
                                
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${resultado_redondeado + resultado_redondeado2 + resultado_redondeado3 + resultado_redondeado4+resultado_redondeado5}`,
                                size: 20,                                    
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${resultado_redondeadop2 + resultado_redondeado2 + resultado_redondeado3 + resultado_redondeado4+resultadocvpinter}`,
                                size: 20,                                    
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),
                    new TableCell({
                        borders: {
                            top: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                                
                            },
                            
                            bottom: {
                                style: BorderStyle.THIN_THICK_LARGE_GAP,
                                size: 8,
                                color: "000000",
                            },},
                        width: {
                            size: 3505,
                            type: WidthType.DXA,
                        },
                        children: [new Paragraph({
                            children: [new TextRun({
                                text: `${resultado_redondeadop2 + columnas2 + resultado_redondeado3 + resultado_redondeado4+resultadocvpinter}`,
                                size: 20,                                    
                        })],
                        alignment: AlignmentType.CENTER,})],
                    }),

                ],
            }),
        ],
    });
    
    const doc = new Document({
        
        sections: [
            {
                properties: {},
                headers: { default: header },
                footers: { default: footer },
                children: [
                    title,
                    subtitle,
                    introduction,
                    new Paragraph({ text: "Tabla 1 - Predimensionamiento de losas" }),
                    table,
                    new Paragraph({ text: `Recomendación : en la losa aligerada para los primeros pisos asumimos ${roundedValue} cm y para el último piso consideramos ${roundedValue - 5}cm.` }),
                    description2,
                    table2,
                    description3,
                    table3,
                    description4,
                    table4,
                    new Paragraph({ text: "Recomendación : la altura de la zapata de (50cm) es una altura tentativa, verificar por punzonamiento." }),
                    subtitle2,
                    introduction2,
                    description5,
                    table5,
                    new Paragraph({ text: `Total : ${resultado_redondeado + resultado_redondeado2 + resultado_redondeado3 + resultado_redondeado4}` }),
                    description6,
                    table6,
                    new Paragraph({ text: `CV+CM : ${resultado_redondeado + resultado_redondeado2 + resultado_redondeado3 + resultado_redondeado4+resultado_redondeado5}` }),
                    description7,
                    table7,
                    new Paragraph({ text: `Total : ${resultado_redondeadop2 + resultado_redondeado2 + resultado_redondeado3 + resultado_redondeado4}` }),
                    description8,
                    table8,
                    new Paragraph({ text: `CV+CM: ${resultado_redondeadop2 + resultado_redondeado2 + resultado_redondeado3 + resultado_redondeado4+resultadocvpinter}` }),
                    description9,
                    table9,
                    new Paragraph({ text: `Total : ${resultado_redondeadop2 + columnas2 + resultado_redondeado3 + resultado_redondeado4}` }),
                    description10,
                    table10,
                    new Paragraph({ text: `CV+CM: ${resultado_redondeadop2 + columnas2 + resultado_redondeado3 + resultado_redondeado4+resultadocvpinter}` }),
                    description11,
                    table11,


                ],
            },
        ],
    });
    
    const buffer = await Packer.toBuffer(doc);
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Impacto_Calentamiento_Global.docx');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};




  return (
    <div className="border w-[750px] p-8 rounded-lg mb-6">
      <div>
        <h5 className="font2 text-sm font-medium text-white w-[88px] px-3 bg-slate-500 rounded-md">
          Resultado
        </h5>
        <h2 className="dark:text-gray-200 font2 font-black text-gray-800 text-4xl text-center items-center mt-6">
          METRADO DE CARGAS
        </h2>
        <h2 className="font2 font-medium text-center">{inputValue1}</h2>
        <p className="dark:text-gray-200 font2 text-[16px] text-gray-800 font-bold my-2 italic">
          Premisa:
        </p>
      </div>

      <div className="flex flex-wrap ">
        <p className="font2 text-sm my-4">
          Para una edificación aporticada de concreto armado de {inputValue2}{" "}
          pisos destinada para {ocupacionUso} cuyas características son: <br />
          <br />
          Peso específico del concreto: {pec} T/m^3 <br /> Altura de entrepiso
          (de piso a piso): {inputValue4}m <br />
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
            Recomendación : en la losa aligerada para los primeros pisos
            asumimos {roundedValue} cm y para el ultimo piso consideramos{" "}
            {roundedValue - 5}cm.
          </p>
          <button
            className="bg-cyan-700 hover:bg-cyan-600 text-white text-xs leading-6 font-medium py-[2px] px-3 rounded-md"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          >
            Formulas empleadas
          </button>
          <dialog
            id="my_modal_1"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Formulas para losas y vigas</h3>
              <p className="py-4 font2 text-xs mt-2 text-slate-600 dark:text-slate-300">
                Las formulas utilizadas para calcular las losas fueron las
                siguientes, para la losa aligerada: ln/25, para la Losa
                Prefabricada Pretensada: ln/28, para la losa maciza: ln/30, para
                la losa maciza bidireccional: ln x-x *2 + ln y-y*2 / 140.{" "}
              </p>
              <p className="font2 text-xs mt-2 text-slate-600 dark:text-slate-300">
                Las formulas utilizadas para calcular las vigas es ta dada por,
                para la altura: ln/10 y para la base: la altura /2, esto aplica
                para ambas direcciones.
              </p>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>

        <div className="overflow-x-auto  mt-10">
          <table className="table table-xs ">
            <thead>
              <tr>
                <th></th>
                <th>Columna centrada</th>
                <th>Columna esquinada</th>
                <th>Columna excéntrica</th>
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
            Recomendación : en la losa aligerada para los primeros pisos
            asumimos {roundedValue} cm y para el ultimo piso consideramos{" "}
            {roundedValue - 5}cm.
          </p>
          <button
            className="bg-cyan-700 hover:bg-cyan-600 text-white text-xs leading-6 font-medium py-[2px] px-3 rounded-md"
            onClick={() => document.getElementById("my_modal_2").showModal()}
          >
            Formulas empleadas
          </button>
          <dialog
            id="my_modal_2"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Formulas para columnas</h3>
              <div>
                <p className="font2 text-xs mt-2 text-slate-700 underline dark:text-slate-400">
                  Para las columnas centradas:
                </p>
                <p className="font2 text-xs mt-2 text-slate-600 dark:text-slate-300">
                  pservicio = carga de la edificacion(P)*AT - Columna
                  Centrada:*N de pisos; <br />
                  AreaColumna = (pservicio/(0.45*f´c del concreto))
                </p>
                <p className="font2 text-xs mt-2 text-slate-700 underline dark:text-slate-400">
                  Para las columnas excentricas:
                </p>
                <p className="font2 text-xs mt-2 text-slate-600 dark:text-slate-300">
                  pservicio = carga de la edificacion(P)*AT - Columna
                  excentrica:*N de pisos; <br />
                  AreaColumna = (pservicio/(0.35*f´c del concreto))
                </p>
                <p className="font2 text-xs mt-2 text-slate-700 underline dark:text-slate-400">
                  Para las columnas esquinadas:
                </p>
                <p className="font2 text-xs mt-2 text-slate-600 dark:text-slate-300">
                  pservicio = carga de la edificacion(P)*AT - Columna
                  esquinada:*N de pisos; <br />
                  AreaColumna = (pservicio/(0.35*f´c del concreto))
                </p>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>

        <div className="overflow-x-auto  mt-10">
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
            Recomendacion : la altura de la zapataq (50cm) es una altura
            tentativa, porfavor verificar por punzonamiento.
          </p>
          <button
            className="bg-cyan-700 hover:bg-cyan-600 text-white text-xs leading-6 font-medium py-[2px] px-3 rounded-md"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Formulas empleadas
          </button>
          <dialog
            id="my_modal_3"
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Formulas para zapatas</h3>
              <div>
                <p className="font2 text-xs text-cyan-600">
                  Recomendación : la altura de la zapata sera de (50cm) es una
                  altura tentativa, por favor verificar por punzonamiento.
                </p>
                <p className="font2 text-xs mt-2 text-slate-600 dark:text-slate-400">
                  La formula para calcular las zapatas es la siguiente: Area de
                  de la zapata = pservicio/(coeficiente del suelo * la carga
                  admisible)
                </p>
                <p className="font2 text-xs mt-2 text-slate-600 dark:text-slate-400">
                  Siendo pservicio, el calculo para cada tipo de columna, ejem:
                  si se requiere calcular la zapata centrada se debe utilizar el
                  pservicio de la columna centrada, este dato el programa ya lo
                  calcula y utiliza internamente, por lo que no tendría mayor
                  relevancia.
                </p>
              </div>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
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
        <button
          className="bg-cyan-700 hover:bg-cyan-600 text-white text-xs leading-6 font-medium py-[2px] px-3 rounded-md"
          onClick={() => document.getElementById("my_modal_4").showModal()}
        >
          Formulas empleadas
        </button>
        <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Formlas para el metrado de cargas
            </h3>
            <div>
              <p className="font2 text-lg font-bold mt-2 text-slate-700 dark:text-slate-400">
                Losa Aligerada = Np * Ca * Dx * Dy
              </p>
              <p className="font2 text-xs mt-2 text-slate-600 dark:text-slate-300">
                Numero de paños <br />
                Carga por área <br />
                Dimensión en x del paño <br />
                Dimensión en y del paño br
              </p>
              <p className="font2 text-lg font-bold mt-2 text-slate-700 dark:text-slate-400">
                Columnas = Nc * Pec * Dx_col * Dy_col * L_col
              </p>
              <p className="font2 text-xs mt-2 text-slate-600 dark:text-slate-300">
                Numero de columnas <br />
                Peso especifico del concreto <br />
                Dimensión en x de la columna <br />
                Dimensión en y de la columna <br />
                Longitud de la columna <br />
              </p>
              <p className="font2 text-lg font-bold mt-2 text-slate-700 dark:text-slate-400">
                Viga x-x = Nv * Pec * Dx_vg * Dy_vg * L_vg
              </p>
              <p className="font2 text-xs mt-2 text-slate-600 dark:text-slate-300">
                Numero de vigas <br />
                Peso especifico del concreto <br />
                Dimensión en x de la viga <br />
                Dimensión en y de la viga <br />
                Longitud de la viga <br />
              </p>
              <p className="font2 text-lg font-bold mt-2 text-slate-700 dark:text-slate-400">
                Viga y-y = Nv * Pec * Dx_vg * Dy_vg * L_vg
              </p>
              <p className="font2 text-xs mt-2 text-slate-600 dark:text-slate-300">
                Numero de vigas <br />
                Peso especifico del concreto <br />
                Dimensión en x de la viga <br />
                Dimensión en y de la viga <br />
                Longitud de la viga <br />
              </p>
              <p className="font2 text-lg font-bold mt-2 text-slate-700 dark:text-slate-400">
                Cv = Cv_tch * Dx * Dy
              </p>
              <p className="font2 text-xs mt-2 text-slate-600 dark:text-slate-300">
                Carga Viva <br />
                Dimensión en x <br />
                Dimensión en y <br />
              </p>
            </div>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>

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
            Total General :{" "}
            {resultado_redondeado +
              resultado_redondeado2 +
              resultado_redondeado3 +
              resultado_redondeado4 +
              resultado_redondeado5}
            .
          </p>
        </div>

        <div>
          <p className="font2 mt-4 text-sm text-red-600 font-bold">
            Pisos itermedios (son todos los pisos sin tener en cuenta el ultimo
            ni el primero:)
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
            Total General:{" "}
            {resultado_redondeadop2 +
              resultado_redondeado2 +
              resultado_redondeado3 +
              resultado_redondeado4 +
              resultadocvpinter}
            .
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
            Total General:{" "}
            {resultado_redondeadop2 +
              columnas2 +
              resultado_redondeado3 +
              resultado_redondeado4 +
              resultadocvpinter}
            .
          </p>
        </div>
        <button
          className="mt-8 bg-emerald-700 hover:bg-blue-600 p-2 rounded-lg 
        text-white font justify-center items-center flex w-full"
          onClick={generarPDF}
        >
          Descargar Informe
        </button>
        <button
          className="mt-8 bg-emerald-700 hover:bg-blue-600 p-2 rounded-lg 
        text-white font justify-center items-center flex w-full"
          onClick={downloadDocument}
        >
          Descargar docx
        </button>
      </div>
    </div>
  );
}

export default ComponentContext3;