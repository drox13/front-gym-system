import React  from "react";
import { Link } from "react-router-dom";
import './NavBar.css'
const NavBar =()=>{  
    return(
        <nav className="navBar">
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <div className="buttons">
                    <Link to={"/login"}>
                <button className="button-3">Log In</button>
                    </Link>
                </div>
            </ul>
        </nav>
)   
}
export default NavBar;