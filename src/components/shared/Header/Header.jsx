import React from 'react';
import {ImTicket} from 'react-icons/im';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-bg">
     <div className="container">
    <a className="navbar-brand" href="#">
    <img src="https://pixner.net/boleto/demo/assets/images/logo/logo.png"></img>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Contact</a>
        </li>
      </ul>
      <div className="btn-container">
      <a href="/sign" className="btn btn-primary float-end">Join Us</a>
      </div>
    </div>
    </div>
  </nav>
  );
}

export default Header;
