import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const onLogout = () => {
    props.logout();
  };

  return (
    <header className="header">
      <h1>MYSocial</h1>
      <div className="login-info">
        {props.isLoggedIn ? (
          <div>
            <span className="login-info__username">Hello, {props.login}</span>
            <span className="login-info__logout" onClick={onLogout}>
              Logout
            </span>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
