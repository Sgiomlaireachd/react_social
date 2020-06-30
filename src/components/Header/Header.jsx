import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="header">
      <h1>MYSocial</h1>
      <div className="login-info">
        {props.isLoggedIn ? (
          <span className="login-info__username">Hello, {props.login}</span>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
