import React from 'react'
import './ViewPost.css'
import bike from '../../Images/R15V3.jpg'

function ViewPost() {
  return (
    <div className="view-container container-fluid row">
      <div className="imageShowDiv col-xlg-8 col-lg-8 col-md-12 col-sm-12 col-12">
        <img
          src={bike}
          alt=""
        />
      </div>
      <div className="rightSection col-xlg-4 col-lg-4 col-md-12 col-sm-12 col-12">
        <div className="productDetails pl-4">
          <p>&#x20B9; 250000 </p>
          <span>YAMAHA R15V3</span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
        <div className="pl-4 contactDetails">
          <p>Seller details</p>
          <p>No name</p>
          <p>1234567890</p>
        </div>
      </div>
    </div>
  )
}

export default ViewPost