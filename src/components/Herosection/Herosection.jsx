import React from "react";

function Herosection() {
  return (
    <div className="heroSection-container flex items-center justify-center p-8 h-screen w-screen relative">
      <div className="bg-video absolute top-0 right-0 left-0 bottom-0 -z-10">
        <video
          className="w-screen h-screen object-cover -z-10"
          autoPlay="true"
          loop="true"
          muted="true"
          typeof="video/mp4"
          poster="./images/bg-videoPoster.png"
        >
          <source src="./videos/bg-video.mp4" type="video/mp4" />
        </video>
      </div>
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
