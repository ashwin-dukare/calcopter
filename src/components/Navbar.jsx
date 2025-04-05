import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 w-full">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          Calcopter
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/flight-time-battery"
            className="px-3 py-1 rounded-md text-sm font-medium text-white hover:text-blue-200"
          >
            Battery Based
          </Link>
          <Link
            to="/flight-time-mtow"
            className="px-3 py-1 rounded-md text-sm font-medium text-white hover:text-blue-200"
          >
            MTOW Based
          </Link>
          <Link
            to="/flight-time-motor"
            className="px-3 py-1 rounded-md text-sm font-medium text-white hover:text-blue-200"
          >
            Motor Based
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-3 bg-blue-700">
          <Link
            to="/flight-time-battery"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-200"
          >
            Battery Based
          </Link>
          <Link
            to="/flight-time-mtow"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-200"
          >
            MTOW Based
          </Link>
          <Link
            to="/flight-time-motor"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-blue-200"
          >
            Motor Based
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
