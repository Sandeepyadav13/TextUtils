import React from "react";
// import {Link} from "react-router-dom";
// bg-body-tertiary
export default function Navbar(props) {

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          TextUtile
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/About">
                  About
                </a>
              </li> */}
            </ul>
          </div>
          <div className="form-check form-switch" toggle>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
            <label
              className={`form-check-label  text-${props.mode==='light'?'dark':'light'}`}
              htmlFor="flexSwitchCheckDefault" 
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}
