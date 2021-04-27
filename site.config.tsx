import { Link } from 'theme-ui'

const siteConfig = {
    /** hacky way of doing baseURL */
    baseURL: "https://new.camk.co",
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
        'identifying fonts',
        'blundering chess pieces',
        'fully Covid-19 vaccinated',
    ]
}

export { siteConfig as default }