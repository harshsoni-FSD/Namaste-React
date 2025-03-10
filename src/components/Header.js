import { LOGO_URL } from "../utils/constants";
import React from "react";
import { useState ,useEffect} from "react";
import { Link } from "react-router";

const Header=()=>{
    const [btnName,setBtnName]= useState("Login");

    useEffect(()=>{

    })

    return(
        <div className="header">
            <div>
                <img className="logo" 
                src={LOGO_URL} />
         </div>
        <div className="nav-items">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
               
                <button className="login" onClick={()=> btnName==="Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
               
            </ul>

        </div>
        </div>
    )
}
export default Header;