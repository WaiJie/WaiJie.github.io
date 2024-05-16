import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  // Check if the current pathname is the project details page
  const isProjectDetailsPage = location.pathname.includes('/project/');

  // Conditionally render the links
  const renderLinks = () => {
    if (isProjectDetailsPage) {
      // Render different links or actions for the project details page
      return (
        <ul>
          <li>
            <Link to="/">Back to Home</Link>
          </li>
          {/* Add more links as needed */}
        </ul>
      );
    } else {
      // Render the default links for other pages
      return (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/academics">Academic Results</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      );
    }
  };

  return (
    <nav className="navbar">
      {renderLinks()}
    </nav>
  );
};

export default Navbar;