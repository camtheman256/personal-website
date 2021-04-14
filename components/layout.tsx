import { Box, Link } from 'theme-ui'

function Header() {
  const upTo = [
    'making a website',
    'up too late again',
    'out running',
    'playing Beat Saber',
    'working on a pset',
    'reading transit Wikipedia',
    'walking around Boston',
    <>riding <Link href="https://en.wikipedia.org/wiki/MBTA_subway" target="_blank" rel="noopener">the T</Link></>,
    'identifying fonts',
  ]

  return (
    <header>
      <Box sx={{p: 3, color: 'muted'}}>Cameron Kleiman is {upTo[Math.floor(Math.random()*upTo.length)]}</Box>
    </header>
  )
}

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}