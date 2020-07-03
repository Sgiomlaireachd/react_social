import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  const onLogout = () => {
    props.logout();
  };

  return (
    <header className="header">
      <h1 className="header__logo">MYSocial</h1>
      <div className="login-info">
        {props.isLoggedIn ? (
          <>
            <span className="login-info__username">
              Hello, <b>{props.login}</b>
            </span>
            <span className="login-info__logout" onClick={onLogout}>
              Logout
            </span>
          </>
        ) : (
          <NavLink to={"/login"} className="login-info__login">
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
