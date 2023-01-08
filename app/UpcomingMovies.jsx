"use client"
import { use, useState } from 'react'
import { requests } from '../assets/constants'
import Image from 'next/image'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { leftSlider, rightSlider } from '../assets/constants'

async function fetchPopularMovies() {

  const apiKey = '6259a38ecc880ab73db793a33df58313'
  const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
  const res = await fetch(url)
  const data = await res.json()

  console.log("data: " , data)

  return data.results;

}

const dataPromise = fetchPopularMovies();

const UpcomingMovies = () => {
    const [movieRow, setMovieRow] = useState(3)
  const movies =  use(dataPromise)

  return (
    <div className=" px-10 xl:px-32 py-8">
       <div className="flex flex-col">
          <h1 className="text-black font-medium text-2xl mb-3">
              Upcoming Movies
          </h1>

          <div className="flex">

            <MdChevronLeft onClick={leftSlider} className="bg-black left-[-50px] top-[1130px] rounded-full mr-1 xl:ml-32 absolute opacity-50 hover:opacity-75 active:opacity-100 cursor-pointer z-10" size={40} />
          </div>

          <div id={'slider' + movieRow} className="flex gap-4 relative w-full overflow-x-scroll scroll-smooth scrollbar-hide group ">
              {
                movies.map((movie, index) => (
                  <div className=" " key={index}>
                    <div className="flex flex-col rounded-lg w-40 group relative">
                        <img 
                          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
                          className="object-cover w-40 rounded-lg h-[220px] alt={item?.title} "
                          />
                      <h1 className="text-black font-semibold mt-3 ">{movie?.original_title}</h1>
                      <h4 className="text-gray-500 text-sm pt-[1px]">{movie?.release_date}</h4>
                    </div>
                  </div>
                ))
              }
          </div>
              <MdChevronRight onClick={rightSlider} className="bg-black top-[29%] right-20 rounded-full absolute opacity-50 hover:opacity-75 active:opacity-100 cursor-pointer z-10" size={40} />
       </div>
      
    </div>
  )
}

export default UpcomingMovies