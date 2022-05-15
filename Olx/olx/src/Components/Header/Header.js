import React from "react";
import "./Header.css";
import Logo from '../../assets/OlxLogo'
import SellButton from '../../assets/SellButton'
import SellButtonPlus from '../../assets/SellButtonPlus'
import OlxLogo from "../../assets/OlxLogo";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid w-100">
    <span class="navbar-brand" href="#"><OlxLogo/></span>
    <div className="location-search">
    <input type="text" placeholder="India" />
    <i class="fa-solid fa-magnifying-glass search"></i>
    <i class="fa-solid fa-angle-down arrow"></i>
    </div>
    <div className="items-search">
      <input type="text" />
    <i class="fa-solid fa-magnifying-glass search-items"></i>

    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Header;
 