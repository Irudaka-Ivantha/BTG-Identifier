import React from 'react';

function Navbar() {
  return (
    <nav className="bg-green-500 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <span className="text-lg font-bold flex items-center">
          <i className="fas fa-leaf mr-2"></i> TRI Identifier
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
