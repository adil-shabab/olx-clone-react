import React from 'react'
import Banner from '../Components/Banner/Banner'
import BannerImage from '../Components/BannerImage/BannerImage'
import Header from '../Components/Header/Header'

function Home() {
  return (
    <div>
      <Header />
      <Banner/>
      <BannerImage/>
    </div>
  )
}

export default Home