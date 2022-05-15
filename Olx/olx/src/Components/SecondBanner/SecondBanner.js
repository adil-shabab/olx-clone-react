import React from 'react'
import './SecondBanner.css'
import BannerImg from '../../Images/b16.jpg'
import Playstore from '../../Images/play.jpg'
import Appstore from '../../Images/app.jpg'


function SecondBanner() {
  return (
    <div className='container-fluid row p-0'>
        <div className='col-xlg-8 col-lg-8 col-md-8 col-sm-8 col-12'>
        <img className='w-100' src={BannerImg} alt='second banner'/>
        </div>
        <div className='download col-xlg-4 col-lg-4 col-md-4 col-sm-4 col-4'>
            <h5>Download App</h5>
            <img src={Playstore} alt='play store icon'/>
            <img src={Appstore} alt='app store icon'/>
        </div>
    </div>
  )
}

export default SecondBanner