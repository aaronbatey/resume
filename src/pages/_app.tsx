import favicon from "../public/favicon.ico";
import Head from "next/head";
import { AppProps } from "next/app";
import { SITE_TITLE } from "../constants";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "../assets/styles.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={favicon.src} />
        <meta name="og:title" content={SITE_TITLE} />
        <title>{SITE_TITLE}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
