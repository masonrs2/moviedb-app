"use client"
import { use, useState } from 'react'
import { requests, leftSlider, rightSlider } from '../assets/constants'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import Image from 'next/image'

async function fetchPopularMovies() {

  const apiKey = '6259a38ecc880ab73db793a33df58313'
  const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`

  const res = await fetch(url)
  const data = await res.json()

  console.log("data: " , data)

  return data.results;
}

const dataPromise = fetchPopularMovies();

const PopularMovies = () => {
  const [movieRow, setMovieRow] = useState("1")
  const movies =  use(dataPromise)

  return (
    <div className=" px-10 xl:px-32 pt-8 pb-4">
       <div className="flex flex-col">
          <h1 className="text-black font-medium text-2xl mb-3">
              Top Rated Movies
          </h1>

          <div className="flex">

            <MdChevronLeft onClick={leftSlider} className="bg-black left-[-50px] rounded-full mr-1 xl:ml-32 top-[29%] absolute opacity-50 hover:opacity-75 active:opacity-100 cursor-pointer z-10" size={40} />
          </div>

          <div id={'slider'} className="flex gap-4 relative w-full overflow-x-scroll scroll-smooth scrollbar-hide group ">
              {
                movies.map((movie, index) => (
                  <div className="hover:bg-gray-300/30 hover:border border px-6 pt-6 active:bg-gray-300/50 hover:border-gray-500/30 cursor-pointer rounded-lg" key={index}>
                    <div className="flex flex-col rounded-lg w-40 group relative">
                        <img 
                          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
                          className="object-cover w-40 rounded-lg h-[220px] alt={item?.title} "
                          />
                      <h1 className="text-black font-semibold mt-3 ">{movie?.original_title}</h1>
                      <h4 className="text-gray-500 text-sm pt-[1px]">Debut: {movie?.release_date}</h4>
                    </div>
                  </div>
                ))
              }
          </div>
              <MdChevronRight onClick={() => rightSlider(movieRow)} className="bg-black top-[29%] right-20 rounded-full absolute opacity-50 hover:opacity-75 active:opacity-100 cursor-pointer z-10" size={40} />
       </div>
    </div>
  )
}

export default PopularMovies