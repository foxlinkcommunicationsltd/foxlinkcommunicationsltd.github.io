import React from 'react';
import logo from './logo.png'; // Use './' because the file is in the same directory

export function Logo() {
  return (
    <a href="/">
    <div className="flex items-center space-x-2">
      <img
        src={logo} // Use the imported logo here
        alt="Foxlink Communications Logo"
        className="h-12 w-auto" // Adjust the size of the logo as needed
      />
      <span className="text-xl font-bold text-white">
        Foxlink <span className="text-brand-light">Communications</span>
      </span>
    </div>
    </a>
  );
}
