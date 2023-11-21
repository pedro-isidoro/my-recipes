// import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Bio from '../bio/Bio'
import Footer from '../footer/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Bio />
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
