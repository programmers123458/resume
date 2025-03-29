import React from 'react'
import './Home.css'
import MainHome from '../../components/MainHome/MainHome'
import SliderGamesHome from '../../components/SliderGamesHome/SliderGamesHome'

const Home = () => {
  return (
    <div>
      <MainHome />
      <SliderGamesHome />
    </div>
  )
}

export default Home