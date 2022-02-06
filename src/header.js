import React from "react";
import { Link } from "react-router-dom";

import Home from "./home";
import logo from "../src/images/logo_size.jpg";
import "./styles.css";
export default function Header() {
  return (
    <div className="header">
      {/* <a href={<Home />}> */}
      <img src={logo} alt="logo" />
      {/* </a> */}

      <div className="menu">
        <ul>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/carrer">Carrer</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
