import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <div className="footerParentDiv row">
      <div className="content container-fluid pt-3 col-lg-2 col-md-3 col-sm-6">
          <div className="heading">
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
      <div className="content container-fluid pt-3 col-lg-2 col-md-3 col-sm-6">
          <div className="heading">
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
      <div className="content container-fluid pt-3 col-lg-2 col-md-3 col-sm-6">
          <div className="heading">
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
      <div className="content container-fluid pt-3 col-lg-2 col-md-3 col-sm-6">
          <div className="heading">
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
      <div className="content container-fluid pt-3 col-lg-2 col-md-3 col-sm-6">
          <div className="heading">
            <p>FOLLOW US</p>
          </div>
          <div className="list">
            <ul className='d-flex'>
              <li><i class="fa-brands fa-facebook"></i></li>
              <li><i class="fa-brands fa-instagram"></i></li>
              <li><i class="fa-brands fa-twitter"></i></li>
              <li><i class="fa-solid fa-play"></i></li>
            </ul>
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