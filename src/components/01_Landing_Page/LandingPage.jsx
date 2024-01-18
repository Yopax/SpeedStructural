import React from 'react'
import BotonLogin from './components/BotonLogin'
import BotonDashboard from './components/BotonDashboard'
import NavBar from './components/NavBar'
import PresentacionHome from './components/PresentacionHome'
import Descripcion from './components/Descripcion'
import Footer from './components/Footer'

function LandingPage() {
  return (
    <>
    <NavBar />
    <PresentacionHome />
    <Descripcion    />
    <Footer />
    </>
  )
}

export default LandingPage