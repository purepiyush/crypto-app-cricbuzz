import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
        <ul className="list">
            <li><h3>CryptoHolic</h3></li>
            
            <li>
                <div className="box">
                    <div className="search">
                        <input type="text" placeholder='search your crypto here'/>
                        <button type="submit"><i className="fa fa-search"></i></button>
                    </div>
                    <span>your Favourites</span>
                </div>
            </li> 
        </ul>
    </div>
  )
}

export default Navbar
