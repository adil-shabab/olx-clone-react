import React,{useState} from "react";
import "./Header.css";
import OlxLogo from '../../assets/OlxLogo'
import Search from '../../assets/Search'
import Arrow from '../../assets/Arrow'

function Header({active,setActive}) {

  return (
    <div className="wrapper shadow">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-brand nav-logo ">
            <OlxLogo/>
          </div>
          <div className={`place-search ${active}`}>
              <Search/>
              <input onClick={()=>{
                  setActive("border")
              }} placeholder="India" className="ml-3 search-input"  type="text" />
              <Arrow/>
          </div>
          <div className="items-search">
              <input type="text" placeholder="Find car,mobile phone and more..." />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  hello
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#s">
                      Action
                    </a>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
