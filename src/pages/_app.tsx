import favicon from "../public/favicon.ico";
import Head from "next/head";
import { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material";
import { SITE_TITLE } from "../constants";
import "../assets/styles.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const theme = createTheme({
  palette: {
    primary: {
      light: "#b6ffff",
      main: "#81d4fa",
      dark: "#4ba3c7",
    },
    secondary: {
      light: "#ffffb3",
      main: "#ffe082",
      dark: "#caae53",
    },
    success: {
      light: "#ffeeff",
      main: "#f8bbd0",
      dark: "#c48b9f",
    },
    info: {
      light: "#e6ceff",
      main: "#b39ddb",
      dark: "#836fa9",
    },
  },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={favicon.src} />
        <meta name="og:title" content={SITE_TITLE} />
        <title>{SITE_TITLE}</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
