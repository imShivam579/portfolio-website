import React from "react";

function Herosection() {
  return (
    <div className="heroSection-container flex items-center justify-center p-8 h-screen w-screen">
      <div className="bg-video"></div>
      <div className="text-wrapper h-fit max-w-fit">
        <h2 className="text-right text-6xl">
          <span className="fs-ol-rg block text-left">Shivam sharma</span>
          Front-end Developer <br /> and Designer.
        </h2>
      </div>
    </div>
  );
}

export default Herosection;
