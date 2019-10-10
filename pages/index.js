import React from 'react'
import Head from 'next/head'

import Palette from '../components/Palette'
import seedColors from '../src/seedColors'

const Home = () => (
  <div>
    <Head>
      <title>Colors-APP</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Palette {...seedColors[4]}/>

  </div>
)

export default Home
