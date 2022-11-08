import { MDXProvider, useMDXComponents } from "@mdx-js/react";
import { useThemedStylesWithMdx } from "@theme-ui/mdx";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ThemeProvider } from "theme-ui";
import { pageview } from "../lib/ga";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const componentsWithStyles = useThemedStylesWithMdx(useMDXComponents());

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={componentsWithStyles}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
}

export default MyApp;
