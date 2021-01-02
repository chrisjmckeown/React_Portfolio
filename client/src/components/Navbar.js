import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {
  return (
    <header className='header'>
      <div className='banner'>
        <div className='name'>
          <h1>Chris Mckeown - Portfolio</h1>
        </div>
        <div className='logo'>
          <img src='./Assets/Images/logo_header.png' alt='KiwiCodes Logo' />
        </div>
      </div>
      <div className='menu'>
        <ul>
          <li>
            <Link
              to='/home'
              className={window.location.pathname === "/home" ? "active" : ""}
              onClick={() => {
                window.location.href = "/home";
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/education'
              className={
                window.location.pathname === "/education" ? "active" : ""
              }
              onClick={() => {
                window.location.href = "/education";
              }}
            >
              Education
            </Link>
          </li>
          <li>
            <Link
              to='/portfolio'
              className={
                window.location.pathname === "/portfolio" ? "active" : ""
              }
              onClick={() => {
                window.location.href = "/portfolio";
              }}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to='/kiwicodes'
              className={
                window.location.pathname === "/kiwicodes" ? "active" : ""
              }
              onClick={() => {
                window.location.href = "/kiwicodes";
              }}
            >
              KiwiCodes
            </Link>
          </li>
          <li>
            <Link
              to='/architecture'
              className={
                window.location.pathname === "/architecture" ? "active" : ""
              }
              onClick={() => {
                window.location.href = "/architecture";
              }}
            >
              Architecture
            </Link>
          </li>
          <li>
            <Link
              to='/hobbies'
              className={
                window.location.pathname === "/hobbies" ? "active" : ""
              }
              onClick={() => {
                window.location.href = "/hobbies";
              }}
            >
              Hobbies
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              className={
                window.location.pathname === "/contact" ? "active" : ""
              }
              onClick={() => {
                window.location.href = "/contact";
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
