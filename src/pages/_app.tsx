import { Fragment } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Global } from '@emotion/react';
import globalStyles from 'src/styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My GIF Portal</title>
        <meta name="title" content="GIF Portal" />
        <meta name="description" content="Create a GIF collection with the Metaverse!" />

        <link rel="icon" href="/favicon.ico" />

        {/* Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://buildspace.so/" />
        <meta property="og:title" content="GIF Portal" />
        <meta property="og:description" content="Create a GIF collection with the Metaverse!" />
        <meta
          property="og:image"
          content="https://s3.amazonaws.com/cdn.buildspace.so/courses/web3-solana-app/metadata.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://buildspace.so/" />
        <meta property="twitter:title" content="GIF Portal" />
        <meta
          property="twitter:description"
          content="Create a GIF collection with the Metaverse!"
        />
        <meta
          property="twitter:image"
          content="https://s3.amazonaws.com/cdn.buildspace.so/courses/web3-solana-app/metadata.png"
        />
      </Head>

      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
