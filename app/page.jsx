import React from 'react'
import PopularMovies from './PopularMovies'
import HorrorMovies from './HorrorMovies'
import UpcomingMovies from './UpcomingMovies'


const HomePage = () => {
  return (
    <div>
      <PopularMovies />
      <HorrorMovies />
      <UpcomingMovies />
    </div>
  )
}

export default HomePage