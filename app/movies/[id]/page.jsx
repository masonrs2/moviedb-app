
import React from 'react'
import SimilarMovies from '../SimilarMovies';
import MovieCast from '../MovieCast';

async function fetchMovie(movieId) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=6259a38ecc880ab73db793a33df58313&language=en-US`);
    const data = await res.json();
    console.log(data)

    return data
}

async function fetchSimilarMovies(movieId) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=6259a38ecc880ab73db793a33df58313&language=en-US&page=1`);
    const data = await res.json();
    console.log(data)

    return data.results 
}

const page = async ({ params }) => {
    const movie = await fetchMovie(params.id)
    const similarMovies = await fetchSimilarMovies(params.id)
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
                src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
                alt={movie?.title}
            />

            <div className="absolute w-full top-[20%] p-4 md:p-8 px-10 xl:px-32">
                <div className="flex flex-row gap-10 w-full">

                    <img    
                        src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} 
                        className="w-76 h-[450px] object-cover rounded-lg bottom-10 relative " 
                        alt={movie?.title}
                    />

                    <div className="flex flex-col relative bottom-5">
                        
                        <h1 className="text-white text-3xl md:text-5xl font-bold mb-2">
                            {movie?.title}
                        <span className="text-gray-300 text-3xl md:text-5xl font-light"> ({movie?.release_date.split('-')[0]})</span>
                        </h1>
        
                        <div className="flex flex-row text-gray-300">
                            <p>{movie?.release_date}</p>
                            <p className="ml-[2px]">({movie?.production_companies[1]?.origin_country ? movie?.production_companies[1]?.origin_country : "US"}) •</p>
                            <div className="flex ml-1">
                                {movie.genres.map((item, index) => (
                                    <div key={movie.title} className={`${index ==1 ? `ml-[3px]`: ""}`}>
                                        {
                                            index === movie.genres.length - 1 ?
                                            <p>{item.name}</p>
                                            :
                                            <p>{item.name},{" "}</p>
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="text-gray-400 font-light italic text-lg my-1">{movie?.tagline}</p>
                        <div className="flex items-center gap-2">
                            <div className="bg-gradient-to-r rounded-full from-emerald-300 via-black to-teal-600 w-[63px] h-[63px] items-center flex justify-center ">
                            <div className="rounded-full w-14 h-14 font-bold items-center flex justify-center text-gray-500 bg-gray-900 rotate-[-17deg]">{movie?.vote_average?.toFixed(1)}/10</div>
                            </div>
                            <div className="flex-col text-gray-400 font-medium">
                                <p>User</p>
                                <p>Score</p>
                            </div>

                           
                        </div>
                        <div className="flex flex-col gap-1 mt-1">
                            <h2 className="font-medium text-xl mb-[2px] mt-2">Overview</h2>
                            <p className="w-full font-light text-gray-200 text-sm md:text-lg mb-1">{movie?.overview}</p>
                        </div>
                        </div>
                    </div>
                </div>

                <MovieCast movie={movie} />
                <SimilarMovies movies={similarMovies} />
        </div>
    </div>
  )
}

export default page