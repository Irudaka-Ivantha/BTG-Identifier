import React from 'react';

function Navbar() {
  return (
    <nav className="bg-green-500 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="text-lg font-bold flex items-center">
          <i className="fas fa-leaf mr-2"></i> BTG Identifier
        </span>
        <div className="flex space-x-4">
          <a href="#home" className="tab">Home</a>
          <a href="#about" className="tab">About</a>
          <a href="#services" className="tab">Services</a>
          <a href="#contact" className="tab">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// Add this CSS to style the tabs
<style jsx>{`
  .tab {
    padding: 10px 15px;
    border-radius: 4px;
    transition: background-color 0.3s;
  }

  .tab:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .tab:focus {
    outline: none;
  }
`}</style>
