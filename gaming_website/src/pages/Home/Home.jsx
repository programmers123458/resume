import React from 'react'
import './Home.css'
import MainHome from '../../components/MainHome/MainHome'
import SliderGamesHome from '../../components/SliderGamesHome/SliderGamesHome'
import Discover from '../../components/Discover/Discover'

const Home = () => {
  return (
    <div>
      <MainHome />
      <SliderGamesHome />
      <Discover />
    </div>
  )
}

export default Home