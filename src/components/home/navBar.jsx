import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // This can be used for routing

const NavItem = ({ label, section, isActive, handleScroll }) => {
  return (
    <button
      className={`py-2 px-4 rounded ${isActive(section) ? 'bg-gray-700' : 'bg-transparent'}`}
      onClick={() => handleScroll(section)}
    >
      {label}
    </button>
  );
};

const NavBar = ({ activeSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling to the section
      setMenuOpen(false); // Close the menu if it's open
    }
  };

  const isActive = (section) => activeSection === section;

  return (
    <header className="fixed top-0 left-0 w-full bg-[background: #12121233] py-4 custom-shadow z-50">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="text-lg font-semibold">
          <Link to="/">
            <img
              src="mylogo.png"
              alt="Logo"
              style={{ width: '97.47px', height: '45.78px' }}
            />
          </Link>
        </div>

        <div className="hidden lg:flex space-x-4 sm:space-x-6 lg:space-x-8">
          <NavItem label="Home" section="home" isActive={isActive} handleScroll={handleScroll} />
          <NavItem label="About" section="about" isActive={isActive} handleScroll={handleScroll} />
          <NavItem label="Grades" section="grades" isActive={isActive} handleScroll={handleScroll} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
