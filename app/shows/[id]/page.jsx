
import React from 'react'
import SimilarShows from '../SimilarShows';
import ShowCast from '../ShowCast';

async function fetchShow(showId) {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${showId}?api_key=6259a38ecc880ab73db793a33df58313&language=en-US`);
    const data = await res.json();
    console.log("show", showId)

    return data
}

async function fetchSimilarShows(showId) {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${showId}/similar?api_key=6259a38ecc880ab73db793a33df58313&language=en-US&page=1`);
    const data = await res.json();
    console.log(data)

    return data.results 
}

const ShowPage = async ({ params }) => {
    const show = await fetchShow(params.id)
    const similarShows = await fetchSimilarShows(params.id)
    const truncateText = (text, size) => {
        if(text?.length > size) return text.slice(0, size) + "..."
        else return text
    }

  return (
    <div className="w-full h-screen text-white">
        <div className="w-full h-[600px] flex-col absolute" >
            <div className="absolute w-full h-[600px] bg-gradient-to-r from-black via-black/90 to-black/50"></div>
            <img 
                className="w-full h-[600px] object-cover opacity-50" 
                src={`https://image.tmdb.org/t/p/original/${show?.backdrop_path}`} 
                alt={show?.title}
            />

            <div className="absolute w-full top-[20%] p-4 md:p-8 px-10 xl:px-32">
                <div className="flex flex-row gap-10 w-full">

                    <img    
                        src={`https://image.tmdb.org/t/p/original/${show?.poster_path}`} 
                        className="w-76 h-[450px] object-cover rounded-lg bottom-10 relative " 
                        alt={show?.title}
                    />

                    <div className="flex flex-col relative bottom-5">
                        

                        <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">
                            {show?.name}
                        <span className="text-gray-300 text-3xl md:text-5xl font-light"> ({show?.first_air_date?.split('-')[0]})</span>
                        </h1>
        
                        <div className="flex flex-row text-gray-300">
                            <p>{show?.first_air_date}</p>
                            <p className="ml-[2px]">({show?.origin_country ? show?.origin_country : "US"}) •</p>
                            <div className="flex ml-1">
                                {show.genres.map((item, index) => (
                                    <div key={show.title} className={`${index ==1 ? `ml-[3px]`: ""}`}>
                                        {
                                            index === show.genres.length - 1 ?
                                            <p>{item.name}</p>
                                            :
                                            <p>{item.name},{" "}</p>
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-400 font-light italic text-lg my-1">Popularity: {show?.popularity.toFixed(0)} (Popular Votes)</p>
                        <div className="flex items-center gap-2">
                            <div className="bg-gradient-to-r rounded-full from-emerald-300 via-black to-teal-600 w-[63px] h-[63px] items-center flex justify-center ">
                            <div className="rounded-full w-14 h-14 font-bold items-center flex justify-center text-gray-500 bg-gray-900 rotate-[-17deg]">{show?.vote_average?.toFixed(1)}/10</div>
                            </div>
                            <div className="flex-col text-gray-400 font-medium">
                                <p>User</p>
                                <p>Score</p>
                            </div>

                           
                        </div>
                        <div className="flex flex-col gap-1 mt-1">
                            <h2 className="font-medium text-xl mb-[2px] mt-2">Overview</h2>
                            <p className="w-full font-light text-gray-200 text-sm md:text-lg mb-1">{show?.overview}</p>
                        </div>
                        </div>
                    </div>
                </div>

                <ShowCast show={show} />
                <SimilarShows shows={similarShows} />
        </div>
    </div>
  )
}

export default ShowPage