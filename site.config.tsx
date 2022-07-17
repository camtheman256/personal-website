import { Link } from 'theme-ui'

const siteConfig = {
    /** hacky way of doing baseURL */
    baseURL: "https://camk.co",
    /** tagline that goes under my name in Layout */
    tagline: "computer science & planning student at mit",
    /** array of options for randomly generated string at the top of Layout */
    upTo: [
        'making a website',
        'up too late again',
        'out running',
        'playing Beat Saber',
        'working on a pset',
        'reading transit Wikipedia',
        'walking around Boston',
        <>riding <Link href="https://en.wikipedia.org/wiki/MBTA_subway" target="_blank">the T</Link></>,
        'riding the subway',
        'riding a Citibike',
        'riding a Bluebike',
        'evangelizing about bikeshare',
        'identifying fonts',
        'fully Covid-19 vaccinated',
        'deep in a codebase',
        'writing TypeScript',
        'down in the tunnels',
        'playing wiffle ball in Lobby 7',
        'crawling the web',
        'making a hit meme',
        'racing around the track',
        'running in the rain',
        'getting 8 hours of sleep',
        'advocating for high speed rail in America',
        'adjusting his standing desk',
        'wandering through the park',
        'growing out his hair',
        'distracted by transit',
    ]
}

export { siteConfig as default }
