import React from "react";
import "./Header.css";
import SellButton from '../../assets/SellButton'
import SellButtonPlus from '../../assets/SellButtonPlus'
import OlxLogo from "../../assets/OlxLogo";
import Search from '../../assets/Search'
import Arrow from '../../assets/Arrow'

function Header() {
  return (
    <div className="container-fluid navbar-parent shadow">
      <div className="navbar-child d-flex align-items-center">
        <div className="logo mr-3">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch mr-4 d-flex align-items-center">
          <Search></Search>
          <input type="text" placeholder="Inida" className="pl-1"/>
          <Arrow></Arrow>
        </div>
        <div className="productSearch d-flex align-items-center justify-content-space-between bg-white">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction d-flex">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage ml-3 mr-3">
          <span>Login</span>
          <hr />
        </div>

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
        <i class="fa-solid fa-bars menu"></i>
      </div>
    </div>
  );
}

export default Header;
 