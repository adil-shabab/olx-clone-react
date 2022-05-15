import React from 'react'
import './Banner.css'
// import Arrow from '../../assets/Arrow'
function Banner() {
  return (
    <div className="banner-container container">
      <div className="banner-child">
        <div className="menuBar">
          <div className="categoryMenu row">
            <span>ALL CATEGORIES</span>
            <i className="fa-solid fa-angle-down pt-1 arrow"></i> 
          </div>
          <div className="options ml-3">
            <span>Cars</span>
            <span>Motorcycle</span>
            <span>Smart Phone</span>
            <span>Apartment</span>
            <span>Scooter</span>
            <span>House</span>
            <span>Rent House</span>
            <span>Smart Watch</span>
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