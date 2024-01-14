import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header/Header'
import { LandingPage } from './Components/LandingPage/LandingPage'
import { Portfolio } from './Components/Portfolio/Portfolio'
import { Pricing } from './Components/Pricing/Pricing'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <LandingPage />
      <Portfolio />
      <Pricing />
    </>
  )
}

export default App
