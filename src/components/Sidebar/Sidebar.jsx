import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="sidebar__inner">
        <li className="sidebar__item">
          <NavLink className="sidebar__url" to="/profile">
            Profile
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__url" to="/dialogs">
            Messages
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__url" to="/news">
            News
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__url" to="/music">
            Music
          </NavLink>
        </li>
        <li className="sidebar__item">
          <NavLink className="sidebar__url" to="/settings">
            Settigs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
