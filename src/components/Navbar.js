import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Create this CSS file for navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">NGO Donation</h1>
        <ul className="nav-links">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Donate</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
