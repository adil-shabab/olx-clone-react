import React from 'react'
import './Footer.css'
import playStore from '../../Images/play.jpg'
import appStore from '../../Images/app.jpg'

function Footer() {
  return (
    <div>
        <div className="footerParentDiv row m-0">
      <div className='content container-fluid p-1 mt-2 mb-2 pt-3 col-xlg-2 col-lg-3 col-md-3 col-sm-6 col-xsm-12'>
      <div className="box pt-3 shadow w-100">
          <div className="heading d-flex align-items-center justify-content-center">
            <p>POPULAR LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>kolkata</li>
              <li>Mumbai</li>
              <li>Chennai</li>
              <li>Pune</li>
            </ul>
          </div>
      </div>
      </div>
      <div className="content container-fluid mt-2 mb-2 pt-3 col-xlg-2 col-lg-3 col-md-3 col-sm-6 col-xsm-12">
          <div className='box pt-3 shadow w-100'>
          <div className="heading d-flex align-items-center justify-content-center">
            <p>TRENDING LOCATIONS</p>
          </div>
          <div className="list">
            <ul>
              <li>Bhubaneshwar</li>
              <li>Hyderabad</li>
              <li>Chandigarh</li>
              <li>Nashik</li>
            </ul>
          </div>
          </div>
      </div>
      <div className="content container-fluid mt-2 mb-2 pt-3 col-xlg-2 col-lg-3 col-md-3 col-sm-6 col-xsm-12">
          <div className='box pt-3 shadow w-100'>
          <div className="heading d-flex align-items-center justify-content-center">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About OLX Group</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Waah Jobs</li>
            </ul>
          </div>
          </div>
      </div>
      <div className="content container-fluid  mt-2 mb-2 pt-3 col-xlg-2 col-lg-3 col-md-3 col-sm-6 col-xsm-12">
          <div className='box pt-3 shadow w-100'>
          <div className="heading d-flex align-items-center justify-content-center">
            <p>OLX</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy Information</li>
              <li>Blog</li>
            </ul>
          </div>
          </div>
      </div>
      <div className="content container-fluid  mt-2 mb-2 pt-3 col-xlg-2 col-lg-3 col-md-3 col-sm-6 col-xsm-12">
          <div className='box pt-3 shadow w-100'>
          <div className="heading d-flex align-items-center justify-content-center">
            <p>FOLLOW US</p>
          </div>
          <div className="list">
            <ul className='d-flex'>
              <li className='mr-2'><i class="fa-brands fa-facebook"></i></li>
              <li className='mr-2'><i class="fa-brands fa-instagram"></i></li>
              <li className='mr-2'><i class="fa-brands fa-twitter"></i></li>
              <li className='mr-2'><i class="fa-solid fa-play"></i></li>
            </ul>
            <ul className='d-flex'>
                <li><img src={playStore} alt="playstore icon" /></li>
                <li><img src={appStore} alt="appstore icon"/></li>
            </ul>
          </div>
          </div>
      </div>
    </div>
    <div className="footer">
    <p>Other Countries Pakistan - South Africa - Indonesia</p>
    <p>Free Classifieds in India. © 2006-2021 OLX</p>
  </div>
    </div>
  )
}

export default Footer