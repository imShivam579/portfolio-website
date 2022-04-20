import React from "react";

function Herosection() {
  return (
    <div className="heroSection h-max  w-screen relative pt-60 pb-60 bg-black-100">
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
      <div className="wrapper">
        <div className="hero-content relative left-0 text-left">
          <h4 className="text-gray-200 h4">Shivam sharma</h4>
          <h1 className="text-gray-50 mt-8 relative left-0">
            <span className="block relative left-0">Web Developer</span>
            <span className="block relative left-1/3">Designer</span>
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Herosection;
