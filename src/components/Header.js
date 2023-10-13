
import { LOGO_URL } from "../utils/constants";
import { useState,} from "react";
import { Link  } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("login");

  const onlineStatus = useOnlineStatus();
    return(

      <div className='header'>
        <div className='logo-container'>
          <img className='logo'
          src= {LOGO_URL} alt='hifoodies'></img>
  
        </div>
        <div className='nav-items'>
          <ul>
            <li> Onlinestatus: {onlineStatus ? "green": "red"} </li>
            <li><Link to="/">Home </Link></li>
            <li> <Link to="/about">About us</Link></li>
            <li> <Link to="/grocery">Grocery</Link></li>
            <li> <Link to="/contact">Contact us </Link></li>
            <li>Cart</li>
            <button className="login" onClick = {() => {btnNameReact === "login"? setbtnNameReact("logout"): setbtnNameReact("login");}}>
            {btnNameReact}
            </button>
        
          </ul>
        </div>
      </div>
    )
  }

  export default Header; 
  