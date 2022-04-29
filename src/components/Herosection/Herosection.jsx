import React from "react";

function Herosection() {
  return (
    <div className="heroSection h-max  w-screen relative bg-black-100">
      <div className="bg-video absolute top-0 right-0 left-0 bottom-0 -z-10">
        <video
          className="w-screen h-screen object-cover -z-10 saturate-0	"
          autoPlay="true"
          loop="true"
          muted="true"
          typeof="video/mp4"
          poster="./images/bg-videoPoster.png"
        >
          <source src="./videos/bg-video2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="wrapper relative">
        <div className="hero-content relative left-0 text-left pointer-events-none">
          <h4 className="text-gray-200 h4">Shivam sharma</h4>
          <h1 className="text-gray-50 relative">
            <span className="line block">Web Developer</span>
            <span className="line block">Designer</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Herosection;
