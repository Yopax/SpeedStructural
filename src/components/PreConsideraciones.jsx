"use client";
import React from 'react'
import ComponentContext2 from './ComponentContextPredi'

function PreConsideraciones() {
  return (
    <>
    <div className='mx-[160px] mt-[120px]  '>
      <p className='text-xs text-justify text-slate-700 dark:text-slate-300'>
        Importante: Este análisis se aplicara solo a estructuras con distribuciones homogéneas. <br />
        Asimismo se recomienda utilizar otros métodos estructurales con el fin de contrastar  información.
      </p>
        <p className="text-lg text-emerald-700 font-bold my-4">01. Predimensionamiento de Elementos Estructurales</p>
          <p className="text-sm my-4 text-justify text-slate-700 dark:text-slate-300">La importancia del predimensionamiento, un proceso crucial 
          que determina las dimensiones iniciales de los elementos estructurales. Estas dimensiones 
          preliminares son fundamentales para permitir un Análisis Estructural que cumpla lo establecido por las
          las normas Peruanas (José Alberto, 2022). Como dijo el ingeniero Alberto el predimensionamiento es darle
          dimensiones tentativas a los elementos estructurales, si realizamos un buen predimensionamiento podemos lograr 
          que las dimensiones tentativas sean las finales, y así ahorrar tiempo, esto dependerá mucho de la 
          experiencia del Ingeniero. Ademas, se emplearon formulas y criterios del ingeniero
Antonio Blanco Blasco de su libro `Estructuración y diseño de edificaciones de concreto armado`.
          </p>
          <ComponentContext2/>
    </div>

    </>
  )
}

export default PreConsideraciones