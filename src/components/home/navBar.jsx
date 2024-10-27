import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo1 from '../../assets/camera2.png';

const NavItem = ({ label, section, isActive, handleScroll }) => (
  <button
    className={`relative py-2 px-4 rounded ${isActive(section) ? 'bg-green-500 text-green font-bold text-xl' : 'text-green'} text-lg transition duration-300`} // Updated to include green background for active state
    onClick={() => handleScroll(section)}
  >
    <span style={{ marginBottom: '4px', display: 'block' }}>{label}</span>
    {isActive(section) && (
      <span
        className="absolute left-0 right-0 bottom-0 h-1"
        style={{
          backgroundColor: '#2E8B57', // Sea green color
          marginTop: '2px',
          zIndex: 10,
          height: '2px', // Height of the underline
          width: '100%', // Make sure it spans the full width
        }} 
      />
    )}
  </button>
);

const NavBar = ({ activeSection }) => {
  const [navbarBg, setNavbarBg] = useState('transparent');
  const location = useLocation();

  useEffect(() => {
    setNavbarBg(location.pathname === '/' ? 'transparent' : 'black');
  }, [location]);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (section) => {
    console.log(`Checking active section: ${section}, Active: ${activeSection}`);
    return activeSection === section;
  };

  return (
    <header
      className="fixed top-0 left-0 w-full py-4 custom-shadow z-50 transition-all duration-500"
      style={{ backgroundColor: navbarBg }}
    >
      <nav className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center justify-center mt-4 space-x-3">
          <Link to="/">
            <img src={Logo1} alt="Logo" style={{ width: '80px', height: '60px' }} />
          </Link>
          <h1 className="text-3xl font-bold italic flex items-center" style={{ fontFamily: 'Georgia, serif', color: '#6B4226', textShadow: '1px 1px 2px white' }}>
            <span style={{ color: '#6B4226', marginRight: '4px' }}>BTG</span>
            <span style={{ color: '#4CAF50', textShadow: '1px 1px 2px white' }}>Identification</span>
          </h1>
        </div>

        <div className="hidden lg:flex space-x-4 sm:space-x-6 lg:space-x-8">
          <NavItem label="Home" section="main-banner" isActive={isActive} handleScroll={handleScroll} />
          <NavItem label="About" section="about" isActive={isActive} handleScroll={handleScroll} />
          <NavItem label="Grades" section="grades" isActive={isActive} handleScroll={handleScroll} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
