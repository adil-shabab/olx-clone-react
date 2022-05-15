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
    </div>
    <div className="footer">
    <p>Other Countries Pakistan - South Africa - Indonesia</p>
    <p>Free Classifieds in India. © 2006-2021 OLX</p>
  </div>
    </div>
  )
}

export default Footer