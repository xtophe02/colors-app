import React from "react";
import Head from "next/head";

import Palette from "../components/Palette";
import seedColors from "../src/seedColors";
import generatePalette from "../src/colorHelpers";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Colors-APP</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:100,400,500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Palette palette={generatePalette(seedColors[5])} />
  

      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          font-family: Roboto;
        }
   
      `}</style>
    </div>
    
  );
};

export default Home;
