import React from 'react'
import NavBar from './components/NavBar'
import Menu from './components/Menu'
import CardOne from './components/CardOne';
import Carrosel from './components/CardTwo';

function DashBoard() {
  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="flex">
          <Menu />
          <div className="flex">
            
            <Carrosel />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoard