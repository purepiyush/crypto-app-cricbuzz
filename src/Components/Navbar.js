import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ setSearch }) => {
  return (
    <div className="navbar">
      <ul className="list">
        <li>
          <h3>CryptoHolic</h3>
        </li>
        <li>
          <div className="box">
            <div className="search">
              <input
                type="text"
                placeholder="search your crypto here"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button>
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
