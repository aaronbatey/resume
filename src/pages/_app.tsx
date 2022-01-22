import Head from "next/head";
import { AppProps } from "next/app";
import { FAVICON, SITE_TITLE } from "../constants";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={FAVICON} />
        <meta name="og:title" content={SITE_TITLE} />
        <title>{SITE_TITLE}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
