import React from 'react'
import './BannerImage.css'
import img1 from '../../Images/banner.png'


function BannerImage() {
  return (
    <div className='banner-image-container'>
        <img className='banner-image' src={img1} alt='banner' />
    </div>
  )
}

export default BannerImage