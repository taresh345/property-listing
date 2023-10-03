import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Heading from './components/Heading'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {


  return (

    <>

<div
className='
  h-screen
  grid
  grid-cols-1
  grid-rows-[.35fr_.15fr_1fr]


'
>
      <Heading/>
      <Navbar/>
      <Outlet/>
      {/* <Hero/> */}
  
</div>

    </>
  )
}

export default App
