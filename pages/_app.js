import { ApolloProvider } from "@apollo/client";
import client from "../libs/apollo";
import Head from "next/head";
import Script from "next/script";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
