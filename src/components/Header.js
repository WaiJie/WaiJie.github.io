// components/Header.js
import React from 'react';
import Navbar from './Navbar';
import TypingEffect from './Typing';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  // Check if the current pathname is the project details page
  const isProjectDetailsPage = location.pathname.includes('/project/');

  // Conditionally render the links
  const renderHeaderContent = () => {
    if (isProjectDetailsPage) {
      return null; // Return null to hide the component
    } else {
      return (
        <div className="header-content">
          <h1>Wai Jie</h1>
          <p><br/></p>
          <p>Analyst | SAS Developer</p>
          <p><br/></p>
          <div>
            <p>Aspiring to take on a new role focusing on Data Analytics.</p>
            <TypingEffect text="Explore some projects on Data Analytics and Automation below!" />
          </div>
        </div>
      );
    }
  };

  // Conditionally apply the new class to the header
  const headerClass = isProjectDetailsPage ? 'header header-bg header-no-content' : 'header header-bg';

  return (
    <header className={headerClass}>
      <Navbar />
      {renderHeaderContent()}
    </header>
  );
};

export default Header;