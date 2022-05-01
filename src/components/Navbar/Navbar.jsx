import React, { useState } from "react";
import "./navbar.css";
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }
  return (
    <nav className="navbar absolute left-0 top-0 right-0 z-10">
      <div className="wrapper h-full w-full py-6 xl:py-8 flex items-center justify-between mx-auto">
        {/* navbar left - brand logo  */}
        <a className="brand-logo text-gray-100 hover:text-gray-200" href="#">
          <h4 className="h4">Navbar</h4>
        </a>
        {/* navbar right - nav menu  */}
        <div className="main-menu flex">
          <ul className="flex justify-between">
            <li className="px-4">
              <a className="text-gray-200 hover:text-gray-50" href="#">
                Work
              </a>
            </li>
            <li className="px-4">
              <a className="text-gray-200 hover:text-gray-50" href="#">
                About me
              </a>
            </li>
            <li className="px-4">
              <a className="text-gray-200 hover:text-gray-50" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* navbar right - burger menu  */}
        <div className={`mobile-menu hidden bg-black z-50 `}>
          <button onClick={toggleMenu} className="relative inline-flex z-20">
            <svg
              width="32"
              height="32"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L21 17"
                stroke="#8E95A9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 12H18"
                stroke="#8E95A9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7 7H21"
                stroke="#8E95A9"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div className="menu-bg menu-bg-1"></div>
          <div className="menu-bg menu-bg-2"></div>
          <div
            className={`menu-items absolute top-0 left-0 h-screen w-full bg-primary-100 ${
              !isMenuOpen ? "hidden" : ""
            }`}
          >
            <ul className="h-full w-full flex flex-col justify-center items-center">
              <li className="px-4">
                <a className="text-gray-200 hover:text-gray-50 h2" href="#">
                  Work
                </a>
              </li>
              <li className="px-4">
                <a className="text-gray-200 hover:text-gray-50 h2" href="#">
                  About me
                </a>
              </li>
              <li className="px-4">
                <a className="text-gray-200 hover:text-gray-50 h2" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
