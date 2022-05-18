import React from 'react'
import './Loader.css'

function Loader() {
  return (
    <div className="main">
          <div class="preloader">
            <div class="preloader__square"></div>
            <div class="preloader__square"></div>
            <div class="preloader__square"></div>
            <div class="preloader__square"></div>
          </div>
          <div class="status">
            Uploading<span class="status__dot">.</span>
            <span class="status__dot">.</span>
            <span class="status__dot">.</span>
          </div>
        </div>
  )
}

export default Loader