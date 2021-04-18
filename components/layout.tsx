/** @jsxImportSource theme-ui */
import { Avatar, Box, Container, Flex, Heading, Link, useThemeUI } from 'theme-ui'
import Head from 'next/head'
import { useRouter } from 'next/router'
import siteConfig from '../site.config'

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
    'blundering chess pieces',
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

export default function Layout({ children, meta }) {
  const router = useRouter()

  const pageTitle = meta.title + " | Cameron Kleiman"

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={siteConfig.baseURL + (meta.image || "/profile.jpg")} />
        <meta property="og:url" content={siteConfig.baseURL + router.asPath} />
        {meta.description && <meta property="og:description" content={meta.description} />}
      </Head>
      <HeadBar />
      <Container p={[3, 4]}>
        <Header />
        {children}
      </Container>
    </>
  )
}