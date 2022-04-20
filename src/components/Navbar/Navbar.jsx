import React, { useState } from "react";
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }
  return (
    <nav className="nav absolute left-0 top-0 right-0 z-10">
      <div className="container w-full py-4 lg:py-6 xl:py-8 flex items-center justify-between mx-auto">
        {/* navbar left - brand logo  */}
        <div className="brand-logo">
          <h4>Navbar</h4>
        </div>
        {/* navbar right - nav menu  */}
        <div className="nav-right hidden md:block">
          <ul className="flex justify-between">
            <li className="px-4">
              <a href="#">Work</a>
            </li>
            <li className="px-4">
              <a href="#">About me</a>
            </li>
            <li className="px-4">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        {/* navbar right - burger menu  */}
        <button onClick={toggleMenu} className="md:hidden">
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
        <div
          className={`burger-menu absolute top-0 bottom-0 right-0 w-screen h-screen md:hidden bg-black z-50 ${
            !isMenuOpen ? "hidden" : ""
          }`}
        >
          <button onClick={toggleMenu} className="absolute top-8 right-8">
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
          <ul className="h-full w-full flex flex-col justify-center items-center">
            <li className="px-4">
              <a href="#" className="h2">
                Work
              </a>
            </li>
            <li className="px-4">
              <a href="#" className="h2">
                About me
              </a>
            </li>
            <li className="px-4">
              <a href="#" className="h2">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
