import React, { use } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import Link from 'next/link'


async function fetchCredits(showId) {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${showId}/credits?api_key=6259a38ecc880ab73db793a33df58313&language=en-US`)
    const data = await res.json();
    console.log("cast: ", data.cast)

    return data.cast;
}

const ShowCast =  async ({ show }) => {
    const credits = await fetchCredits(show.id)

    return (
        <div className=" px-10 xl:px-32 pt-8 pb-4 bg-white w-full">
           <div className="flex flex-col">
              <h1 className="text-black font-medium text-2xl mb-3">
                  Movie Cast
              </h1>
    
              <div id={'slider'} className="flex gap-4 relative w-full overflow-x-scroll scroll-smooth scrollbar-hide group ">
                  {
                    credits.map((credit, index) => (
                      <div key={index} className="hover:bg-gray-300/30 hover:border border px-6 pt-6 active:bg-gray-300/50 hover:border-gray-500/30 cursor-pointer rounded-lg" >
                
                          <div className="flex flex-col rounded-lg w-40 group relative">
                              <img 
                                src={`https://image.tmdb.org/t/p/original/${credit?.profile_path}`} 
                                className="object-cover w-40 rounded-lg h-[220px] alt={item?.title} "
                                alt={show?.title}
                                />
                            <h2 className="text-black font-semibold mt-3 w-full justify-center items-center flex ">{credit?.name}</h2>
                            <h3 className="text-gray-600 text-xs font-semibold mt-3 w-full justify-center items-center flex ">{credit?.character}</h3>
                            
                          </div>
                      </div>
                    ))
                  }
              </div>
                
           </div>
        </div>
      )
}

export default ShowCast