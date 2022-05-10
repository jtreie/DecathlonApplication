import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Multievents
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/decathlon">
                  Decathlon
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/heptathlon">
                  Heptathlon
                </NavLink>
                <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">
                  Log Out
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/reset">
                  Reset password
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;