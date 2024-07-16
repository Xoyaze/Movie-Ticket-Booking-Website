import React from 'react'
import Header from '../components/HomePageComp/Header'
import Banner from '../components/HomePageComp/Banner'
import MovieSection from '../components/HomePageComp/MovieSection'

const HomePage = () => {
  return (
    <div className='h-screen w-screen bg-theme-dark text-gray-400'>
        <Header />
        <Banner />
        <MovieSection />
    </div>
  )
}

export default HomePage
