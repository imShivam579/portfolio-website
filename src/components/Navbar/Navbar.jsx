import React from "react";

function Navbar() {
  return (
    <nav className="nav flex items-center justify-between p-8 m-auto">
      {/* navbar left - brand logo  */}
      <h4>Navbar</h4>
      {/* navbar right - burger menu  */}
      {/* navbar right - nav menu  */}
      <div className="nav-right">
        <ul className="flex justify-between">
          <li className="px-4 fs-link-rg">
            <a href="#">Work</a>
          </li>
          <li className="px-4 fs-link-rg">
            <a href="#">About me</a>
          </li>
          <li className="px-4 fs-link-rg">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
