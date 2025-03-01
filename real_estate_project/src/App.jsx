import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Properties from './components/Properties/Properties'
import Agents from './components/Agents/Agents'
import TheBest from './components/TheBest/TheBest'
import Services from './components/Services/Services'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Header />
      <HowItWorks />
      <Properties />
      <Agents />
      <TheBest />
      <Services />
      <Testimonials />
    </div>
  )
}

export default App