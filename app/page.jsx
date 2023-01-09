import React from 'react'
import PopularMovies from './PopularMovies'
import HorrorMovies from './HorrorMovies'
import UpcomingMovies from './UpcomingMovies'
import Televesion from './Televesion'
import JoinToday from './JoinToday'


const HomePage = () => {
  return (
    <div className=" shadow-inner shadow-lg">
      <PopularMovies />
      <HorrorMovies />
      <Televesion />
      <UpcomingMovies />
      <JoinToday />
    </div>
  )
}

export default HomePage