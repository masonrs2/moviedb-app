import React from 'react'

const JoinToday = () => {
  return (
    <div className="w-full bg-blue-900 my-4">
        <div className="px-10 xl:px-32 py-4 flex flex-col">
            <h1 className="font-semibold text-2xl md:text-3xl mt-4">Join Today</h1>
            <div className="grid grid-cols-2 pt-4 gap-10">
                <div className="flex flex-col gap-6 mb-6">
                    <p>Get access to maintain your own <span className="text-gray-400 italic">custom personal lists, track what you've seen and search and filter for what to watch next</span>—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Amazon Prime Video, Disney Plus, and Apple TV Plus.</p>

                    <p className="text-gray-200 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ab et, earum beatae exercitationem fuga assumenda eaque adipisci esse maxime odio soluta nobis placeat, ullam blanditiis deleniti dolores, itaque rem?</p>

                </div>
                <div className="flex flex-col h-full mt-10 ml-4 xl:mt-0 justify-center items-center">

                    <ul className="text-sm text-gray-300 list-disc space-y-1 h-full ">
                        <li>Enjoy TMDB ad free</li>
                        <li>Maintain a personal watchlist</li>
                        <li>Filter by your subscribed streaming services and find something to watch</li>
                        <li>Log the movies and TV shows you've seen</li>
                        <li>Build custom lists</li>
                        <li>Contribute to and improve our database</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JoinToday