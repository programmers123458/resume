import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import HowItWorks from './components/HowItWorks/HowItWorks'
import Properties from './components/Properties/Properties'

const App = () => {
  return (
    <div>
      <Header />
      <HowItWorks />
      <Properties />
    </div>
  )
}

export default App