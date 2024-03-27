import React from 'react'
import NavBar from './components/NavBar'
import PresentacionHome from './components/PresentacionHome'
import Descripcion from './components/Descripcion'
import Footer from './components/Footer'
import MyModal from './components/MyModal'

function LandingPage() {
  return (
    <>
    <NavBar />
    <PresentacionHome />
    <Descripcion    />
    <MyModal />
    <Footer />
    </>
  )
}

export default LandingPage