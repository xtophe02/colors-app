import React from "react";
import App from "next/app";
import Head from "next/head";

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Colors-APP</title>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,400,500&display=swap"
            rel="stylesheet"
          ></link>
        </Head>

        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;
