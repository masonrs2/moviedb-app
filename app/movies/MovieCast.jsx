"use client"
import React, { use } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Link from 'next/link'

const leftSlider = () => {
    var slider = document.getElementById('slider')
    slider = slider.scrollLeft -= 500
}

const rightSlider = () => {
    var slider = document.getElementById('slider')
    slider = slider.scrollLeft += 500
}

// const dataPromise = fetchCredits(movie.id)

async function fetchCredits(movieId) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=6259a38ecc880ab73db793a33df58313&language=en-US`)
    const data = await res.json();
    console.log("movieId: ", data)

    return data.cast;
}

const MovieCast =  ({ movie }) => {
    const credits = use(fetchCredits(movie.id))
    return (
        <div className=" px-10 xl:px-32 pt-8 pb-4">
           <div className="flex flex-col">
              <h1 className="text-black font-medium text-2xl mb-3">
                  Movie Cast
              </h1>
    
              <div className="flex">
    
                <MdChevronLeft onClick={leftSlider} className="bg-black rounded-full mr-1 xl:ml-32 top-[29%] absolute opacity-50 hover:opacity-75 active:opacity-100 cursor-pointer z-10" size={40} />
              </div>
    
              <div id={'slider'} className="flex gap-4 relative w-full overflow-x-scroll scroll-smooth scrollbar-hide group ">
                  {
                    credits.map((movie, index) => (
                      <div className="hover:bg-gray-300/30 hover:border border px-6 pt-6 active:bg-gray-300/50 hover:border-gray-500/30 cursor-pointer rounded-lg" key={index}>
                        <Link href={`/movies/${movie.id}`}>
                          <div className="flex flex-col rounded-lg w-40 group relative">
                              <img 
                                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
                                className="object-cover w-40 rounded-lg h-[220px] alt={item?.title} "
                                />
                            <h1 className="text-black font-semibold mt-3 ">{credits?.name}</h1>
                            
                          </div>
                        </Link>
                      </div>
                    ))
                  }
              </div>
                  <MdChevronRight onClick={() => rightSlider(movieRow)} className="bg-black top-[29%] right-20 rounded-full absolute opacity-50 hover:opacity-75 active:opacity-100 cursor-pointer z-10" size={40} />
           </div>
        </div>
      )
}

export default MovieCast