import Image from 'next/image'

async function fetchShowDetails(showId) {
    const res = await fetch(`https://api.themoviedb.org/3/tv/${showId}?api_key=6259a38ecc880ab73db793a33df58313&language=en-US`)
    const data = await res.json()
    console.log(data)
    return data
}


async function ShowCard({ show }) {
    const showDetails = await fetchShowDetails(show.id)

    return (
        <div className="flex flex-col px-4 gap-2 hover:scale-105 duration-300 cursor-pointer py- " key={show.title} >
                            <div className="w-96 mx-2">
                                <Image 
                                    src={`https://image.tmdb.org/t/p/original/${show?.backdrop_path}`} 
                                    className=" w-full object-cover rounded-lg"
                                    width={300}
                                    height={150}
                                    alt={show?.title}
                                /> 

                                <h2 className="text-white font-medium mt-3 w-full items-center flex justify-center ">{show?.name}</h2>
                                <h3 className="text-white font-light mt-1 w-full items-center flex justify-center ">Current Season: {showDetails.last_episode_to_air.name}</h3>
                            </div>
                        </div>
    )
}

export default ShowCard