import Document, { Head, Html, Main, NextScript } from "next/document";
import { FAVICON, SITE_TITLE } from "../constants";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="shortcut icon" href={FAVICON} />
          <meta name="og:title" content={SITE_TITLE} />
          <title>{SITE_TITLE}</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
