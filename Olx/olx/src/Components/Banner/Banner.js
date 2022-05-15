import React from 'react'
import './Banner.css'
import Arrow from '../../assets/Arrow'
function Banner() {
  return (
    <div className="container=fluid banner-container">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu row">
            <span>ALL CATEGORIES</span>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions ml-3">
            <span>Cars</span>
            <span>Motorcycle</span>
            <span>Smart Phone</span>
            <span>Apartment</span>
            <span>Scooter</span>
            <span>Commercial</span>
            <span>House</span>
          </div>
        </div>
        <div className="banner">
          <img
            src="../../../Images/banner copy.png"
            alt=""
          />
        </div>
      </div>
      
    </div>
  )
}

export default Banner