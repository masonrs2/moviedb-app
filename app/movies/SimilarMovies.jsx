"use client"
import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Link from 'next/link'

const SimilarMovies = ({ movies }) => {

    const leftSlider = () => {
        var slider = document.getElementById('slider')
        slider = slider.scrollLeft -= 500
    }
    
    const rightSlider = () => {
        var slider = document.getElementById('slider')
        slider = slider.scrollLeft += 500
    }
  return (
    <div className="w-full bg-white px-10 xl:px-32 py-8 relative">
       <div className="flex flex-col">
          <h1 className="text-black font-medium text-2xl mb-4">
              Related Movies You May Enjoy
          </h1>

          <div className="flex">

            <MdChevronLeft onClick={leftSlider} className="bg-black left-[-40px] top-[50%] rounded-full mr-1 xl:ml-32 absolute opacity-50 hover:opacity-75 active:opacity-100 cursor-pointer z-10" size={40} />
          </div>

          <div id={'slider'} className="flex gap-4 relative w-full overflow-x-scroll scroll-smooth scrollbar-hide group ">
              {
                movies.map((movie, index) => (
                  <div className=" hover:bg-gray-300/30 px-6 pt-6 active:bg-gray-300/50 cursor-pointer rounded-lg" key={index}>
                    <Link href={`/movies/${movie.id}`}>
                        <div className="flex flex-col rounded-lg w-64 group relative">
                            <img 
                            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
                            className="object-cover w-64 rounded-lg h-40 items-center " alt={movie?.title}
                            />
                            <h1 className="text-black font-semibold mt-3 flex w-full justify-center">{movie?.original_title}</h1>
            
                        </div>
                    </Link>
                  </div>
                ))
              }
          </div>
              <MdChevronRight onClick={rightSlider} className="bg-black top-[50%] right-20 rounded-full absolute opacity-50 hover:opacity-75 active:opacity-100 cursor-pointer z-10" size={40} />
       </div>
      
    </div>
  )
}

export default SimilarMovies