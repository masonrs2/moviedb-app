export const navItems = [
    {
        id: "home",
        content: "Home",
        href: "/",
    },
    {
        id: "movies",
        content: "Movies",
        href: "/movies",
    },
    {
        id: "shows",
        content: "TV Shows",
        href: "/shows",
    },
    {
        id: "people",
        content: "People",
        href: "/people",
    },
    
   
]

const apiKey = '6259a38ecc880ab73db793a33df58313'

export const requests = {
        requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`,
        requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`,
        requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=2`,
        requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=horror&page=1&include_adult=false`,
        requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`,
};

export const freeSubscription = [
    {
        id: 1,
        content: "1 Article / Day",
    },
    {
        id: 2,
        content: "Advanced Analytics",
    },
    {
        id: 3,
        content: "Minimal Personalization",
    },
    {
        id: 4,
        content: "3rd Party Integrations",
    },
    {
        id: 5,
        content: "10,000 Visitors",
    },
    {
        id: 6,
        content: "Widget A/B Testing",
    },
]

export const proSubscription = [
    {
        id: 1,
        content: "Unlimited Article Access",
    },
    {
        id: 2,
        content: "All in Starter Plan",
    },
    {
        id: 3,
        content: "Website Personalization",
    },
    {
        id: 4,
        content: "Access to content on multiple devices",
    },
    {
        id: 5,
        content: "Limited Advertisements",
    },
    {
        id: 6,
        content: "Priority Support",
    },
]

export const leftSlider = (movieRow) => {
    var slider = document.getElementById('slider' + movieRow)
    slider = slider.scrollLeft -= 500
}

export const rightSlider = (movieRow) => {
    var slider = document.getElementById('slider' + movieRow)
    slider = slider.scrollLeft += 500
}