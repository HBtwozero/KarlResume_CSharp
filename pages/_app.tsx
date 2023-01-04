import * as React from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../config/theme";
import createEmotionCache from "../config/createEmotionCache";
import "../styles/global.css";
import MainLayout from "../components/Layout/main";
import DefaultLayout from "../components/Layout/default";
import { appWithTranslation } from "next-i18next";
/**
 *
 * component prop for typescript would be React.ComponentType
 *
 */

// import theme from "../config/theme";
// import createEmotionCache from "../config/createEmotionCache";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  pageProps,

  // locale,
  // locales,
  // defaultLocale,
  emotionCache = clientSideEmotionCache,
}) {
  const Layout = Component.Layout || DefaultLayout;

  // console.log(locale);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="theme-color" content="#000000" />
        <meta property="og:site_name" content="Karl Angrand" />
        <meta name="twitter:title" content="Karl Angrand" />
        <meta name="description" content="Karl Angrand" />

        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <MainLayout>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </MainLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}
export default appWithTranslation(MyApp);
