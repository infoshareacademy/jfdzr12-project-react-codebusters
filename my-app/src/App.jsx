import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { LandingPage } from './Components/LandingPage/LandingPage'
import { Portfolio } from './Components/Portfolio/Portfolio'
import { Pricing } from './Components/Pricing/Pricing'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LandingPage />
      <Portfolio />
      <Pricing />
    </>
  )
}

export default App
