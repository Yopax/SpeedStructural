import React from 'react'
import CardNormaOne from './components/CardNormaOne'


function Normas() {
  return (
    <>
      <div className='grid grid-cols-4 space-x-4 mx-40'>
        <CardNormaOne  norma="Norma ACI 318-14" description="dasdas" />
        <CardNormaOne  norma="Norma ASCE SEI 41-13" description="dasdas" />
        <CardNormaOne  norma="Norma ASCE SEI 41-17" description="dasdas" />
        <CardNormaOne  norma="Norma e-0.10" description="dasdas" />
        <CardNormaOne  norma="Norma e-0.20" />
        <CardNormaOne  norma="Norma e-0.30 (2018)"/>
        <CardNormaOne  norma="Norma e-0.31"/>
        <CardNormaOne  norma="Norma e-0.40"/>
        <CardNormaOne  norma="Norma e-0.50"/>
        <CardNormaOne  norma="Norma e-0.60"/>
        <CardNormaOne  norma="Norma e-0.70"/>
        <CardNormaOne  norma="Norma e-0.80"/>
        <CardNormaOne  norma="Norma e-0.90" />
        <CardNormaOne  norma="Norma e-0.100"/>
      </div>
    </>
  );
}

export default Normas