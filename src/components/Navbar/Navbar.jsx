import React, { useState } from "react";
import {
  wrapper,
  navbar,
  navbar_wrapper,
  navbar_brandLogo,
  navbar_mainMenu,
  navbar_menuBG,
  navbar_mobileMenu,
  navbar_menuItems,
  navbar_mobileMenuUL,
} from "../CustomClassName";
function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  function toggleMenu() {
    setMenuOpen(!isMenuOpen);
  }
  return (
    <nav className={`${navbar}`}>
      <div className={`${wrapper} ${navbar_wrapper}`}>
        {/* navbar left - brand logo  */}
        <a className={`${navbar_brandLogo}`} href="#">
          <h4 className="h4">Navbar</h4>
        </a>
        {/* navbar right - nav menu  */}
        <div className={navbar_mainMenu}>
          <ul className="flex justify-between text-gray-200">
            <li className="">
              <a className="" href="#">
                Work
              </a>
            </li>
            <li className="">
              <a className="" href="#">
                About me
              </a>
            </li>
            <li className="">
              <a className="" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* navbar right - burger menu  */}
        <div className={navbar_mobileMenu}>
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
          <div className={`${navbar_menuBG} menu-bg-1`}></div>
          <div className={`${navbar_menuBG} menu-bg-2`}></div>
          <div className={`${navbar_menuItems} ${!isMenuOpen ? "hidden" : ""}`}>
            <ul className={`${navbar_mobileMenuUL}`}>
              <li>
                <a className="link" href="#">
                  Work
                </a>
              </li>
              <li>
                <a className="link" href="#">
                  About me
                </a>
              </li>
              <li>
                <a className="link" href="#">
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
