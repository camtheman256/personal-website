/** @jsxImportSource theme-ui */
import { keyframes } from "@emotion/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  useThemeUI
} from "theme-ui";
import siteConfig from "../site.config";

function ColorBar() {
  const { theme } = useThemeUI();

  const animateBar = keyframes({
    from: {
      backgroundPositionX: "0%",
    },
    to: {
      backgroundPositionX: "200%",
    },
  });

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to right, ${theme.colors.secondary}, ${theme.colors.accent}, ${theme.colors.secondary})`,
        height: 10,
        backgroundSize: "200% 100%",
        animation: `${animateBar} 10s linear infinite`,
      }}
    />
  );
}

function StatusBox() {
  const [upTo, setUpTo] = useState<ReactNode>();

  useEffect(() => {
    setUpTo(
      siteConfig.upTo[Math.floor(Math.random() * siteConfig.upTo.length)]
    );
  }, []);

  if (!upTo) return null;

  return (
    <Box sx={{ p: 3, color: "muted", fontSize: "body" }}>
      Cameron Kleiman is {upTo}
    </Box>
  );
}

function HeadBar() {
  return (
    <header>
      <ColorBar />
      <StatusBox />
    </header>
  );
}

function Header() {
  return (
    <>
      <Flex
        sx={{ alignItems: "center", flexDirection: ["column", "row"] }}
        mb={4}
        itemScope
        itemType="https://schema.org/Person"
      >
        <Avatar
          src="profile2.jpg"
          mr={[0, 4]}
          mb={[3, 0]}
          sx={{ width: [125, 125, 150] }}
          itemProp="image"
        />
        <Box sx={{ textAlign: ["center", "left"] }}>
          <Heading
            sx={{ fontSize: ["subheading", "display-2", "display"] }}
            itemProp="name"
          >
            Cameron Kleiman
          </Heading>
          <Heading sx={{ color: "accent" }} itemProp="description">
            {siteConfig.tagline}
          </Heading>
        </Box>
      </Flex>
    </>
  );
}

export default function Layout({ children, meta }) {
  const router = useRouter();

  const pageTitle = meta.title + " | Cameron Kleiman";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={siteConfig.baseURL + (meta.image || "/profile.jpg")}
        />
        <meta property="og:url" content={siteConfig.baseURL + router.asPath} />
        {meta.description && (
          <meta
            name="description"
            property="og:description"
            content={meta.description}
          />
        )}
      </Head>
      <HeadBar />
      <Container p={[3, 4]}>
        <Header />
        {children}
      </Container>
    </>
  );
}
