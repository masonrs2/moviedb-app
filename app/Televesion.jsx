"use client"
import React, { use } from 'react'
import Image from 'next/image'
import ShowCard from './ShowCard'

async function fetchTvShows() {
    const res = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=6259a38ecc880ab73db793a33df58313&language=en-US&page=1`)
    const data = await res.json()

    return data.results;
}

const dataPromise = fetchTvShows();


const Televesion = () => {
    const shows = use(dataPromise)
  return (
    <div className="w-full bg-gradient-to-r from-emerald-500 via-teal-600 to-teal-700">
        <div className="text-black px-10 xl:px-32 py-4 flex flex-col ">
            <h1 className="text-white items-center mt-1 font-medium text-2xl">Trending TV Shows</h1>

            <div className="mt-3 overflow-x-scroll flex relative w-full scroll-smooth scrollbar-hide group ">
                {
                    shows.map((show, index) => (
                        <div className="flex flex-col px-4 gap-2 hover:scale-105 duration-300 cursor-pointer py-4 " key={show.title} >
                            <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block mx-2 ">
                                <Image 
                                    src={`https://image.tmdb.org/t/p/original/${show?.backdrop_path}`} 
                                    className=" w-full object-cover rounded-lg"
                                    width={300}
                                    height={150}
                                    alt={show?.title}
                                /> 

                                <h2 className="text-white text-sm md:text-lg font-medium mt-3 w-full items-center flex justify-center ">{show?.name}</h2>
                                <h3 className="text-white text-xs md:text-sm font-light mt-1 w-full items-center flex justify-center ">First Air Date: {show?.first_air_date}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}



export default Televesion