import React from 'react'
import '../global/global.css'
import { Helmet } from 'react-helmet'
import { Header } from '../components/Header'
import { Main } from '../components/Main'


export default function Index() {

  return (
    <div>
      <Helmet>
        <title>Valorant</title>
        <link href="https://pbs.twimg.com/profile_images/1267717099864104961/55xF1ahU_400x400.png" rel="icon" type="image/x-icon" />
      </Helmet>
      <Header />
      <Main />
    </div>
  )
}