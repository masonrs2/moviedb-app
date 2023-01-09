"use client"
import { use } from 'react'
import { requests } from '../assets/constants'
import Image from 'next/image'

async function fetchPopularMovies() {

  const apiKey = '6259a38ecc880ab73db793a33df58313'
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=horror&page=1&include_adult=false`

  const res = await fetch(url)
  const data = await res.json()

  console.log("data: " , data)

  return data.results;

}

const dataPromise = fetchPopularMovies();

const PopularMovies = () => {
  const movies =  use(dataPromise)

  return (
    <div className=" px-10 xl:px-32 py-4">
       <div className="flex flex-col">
          <h1 className="text-black font-medium text-2xl mb-3">
              Horror Movies
          </h1>

          <div className="flex gap-4 w-full overflow-x-scroll scroll-smooth scrollbar-hide ">
              {
                movies.map((movie, index) => (
                  <div className="hover:bg-gray-300/30 hover:border border px-6 pt-6 active:bg-gray-300/50 hover:border-gray-500/30 rounded-lg cursor-pointer" key={index}>
                    <div className="flex flex-col rounded-lg w-40 group">
                        <img 
                          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
                          className="object-cover w-40 rounded-lg h-[220px] alt={item?.title} "
                          />
                      <h1 className="text-black font-semibold mt-3 ">{movie?.original_title}</h1>
                      <h4 className="text-gray-500 text-sm pt-[1px]">Debut: {movie?.release_date}</h4>
                      <h4 className="text-gray-500 text-sm pt-[1px] ">Rating: {movie?.vote_count}</h4>
                    </div>
                  </div>
                ))
              }
          </div>
       </div>
    </div>
  )
}

export default PopularMovies