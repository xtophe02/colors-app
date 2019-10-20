import React from 'react'
import Head from 'next/head'

import Palette from '../components/Palette'
import seedColors from '../src/seedColors'
import generatePalette from "../src/colorHelpers"

const Home = () => {
  return(
  <div>
    <Head>
      <title>Colors-APP</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Palette pallete={generatePalette(seedColors[5])}/>

  </div>
)}

export default Home
