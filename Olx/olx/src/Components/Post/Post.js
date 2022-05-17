import React from "react";
import "./Post.css";
import Heart from "../../assets/Heart";
import bike from "../../Images/R15V3.jpg";

function Post() {
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading d-flex align-items-center">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          <div className="card col-lg-3 col-md-4 col-sm-6 col-xsm-12">
            <div className="p-3 bg-white shadow w-100 card-child">
              <div className="favorite">
                <Heart></Heart>
              </div>
              <div className="image">
                <img src={require('../../Images/R15V3.jpg')} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; 250000</p>
                <span className="kilometer">Two Wheeler</span>
                <p className="name"> YAMAHA R15V3</p>
              </div>
              <div className="date">
                <span>Tue May 04 2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
