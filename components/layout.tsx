/** @jsxImportSource theme-ui */
import { Avatar, Box, Container, Flex, Heading, Link, useThemeUI } from 'theme-ui'

function ColorBar() {
  const { theme } = useThemeUI();

  return (
    <Box sx={{
      background: `linear-gradient(to right, ${theme.colors.secondary}, ${theme.colors.accent})`,
      height: 10,
    }} />
  )
}

function HeadBar() {
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
      <ColorBar />
      <Box sx={{p: 3, color: 'muted', fontSize: 'body'}}>Cameron Kleiman is {upTo[Math.floor(Math.random()*upTo.length)]}</Box>
    </header>
  )
}

function Header() {
  return (<>
    <Flex sx={{alignItems: 'center', flexDirection: ['column', 'row']}} mb={4}>
      <Avatar src="profile.jpg" mr={[0, 4]} mb={[3,0]} sx={{width: [125, 125, 150]}} />
      <Box sx={{textAlign: ['center', 'left']}}>
        <Heading sx={{fontSize: ['subheading', 'display-2', 'display']}}>Cameron Kleiman</Heading>
        <Heading sx={{color: 'accent'}}>computer science &amp; planning student at mit</Heading>
      </Box>
    </Flex>
    </>
  )
}

export default function Layout({ children }) {
  return (
    <>
      <HeadBar />
      <Container p={[3, 4]}>
        <Header />
        {children}
      </Container>
    </>
  )
}