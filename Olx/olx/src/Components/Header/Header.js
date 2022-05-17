import React,{useState, useContext} from "react";
import {useNavigate} from 'react-router-dom'
import "./Header.css";
import SellButton from '../../assets/SellButton'
import SellButtonPlus from '../../assets/SellButtonPlus'
import OlxLogo from "../../assets/OlxLogo";
import Search from '../../assets/Search'
import Arrow from '../../assets/Arrow'
import { AuthContext, FirebaseContext } from "../../store/Context";


function Header() {
  const [logout, setLogout] = useState(false)
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate()
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
          <div onClick={()=>{
            setLogout((prevState)=>{
              if(prevState==true){
                return false
              }else{
                return true
              }
            })
          }}>
          <Arrow></Arrow>
          </div>
          {logout && <div className="logout">
            <button onClick={()=>{
              firebase.auth().signOut().then(navigate('/login'))

            }} className="btn">Logout</button>
          </div>}
        </div>
        <div className="loginPage ml-4 mr-3 d-flex flex-column">
          <span className="welcome">{user && "welcome"}</span>
          <span className="login-user">{user ?  user.displayName : "Login"}</span>
          <hr />
        </div>

        <div className="sellMenu mr-4">
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
 