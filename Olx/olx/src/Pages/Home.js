import React from 'react'
import Banner from '../Components/Banner/Banner'
import BannerImage from '../Components/BannerImage/BannerImage'
import Header from '../Components/Header/Header'
import Post from '../Components/Post/Post'

function Home() {
  return (
    <div>
      <Header />
      <Banner/>
      <BannerImage/>
      <Post/>
    </div>
  )
}

export default Home