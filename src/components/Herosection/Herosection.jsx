import React from "react";
import { wrapper } from "../CustomClassName";
function Herosection() {
  return (
    <div className="heroSection overflow-hidden xLg:py-96 py-[calc(var(--gap-12)+var(--nav-height))] h-max  w-full relative bg-black-100">
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
      <div className={`${wrapper}`}>
        <div className="hero-content relative left-0 text-left pointer-events-none xLg:left-40">
          <h4 className="text-gray-200 h4">Shivam sharma</h4>
          <h1 className="text-gray-50 relative sm:mt-8 lg:mt-12 mt-4 left-0 md:left-3 z-1">
            <span className="line block">Web Developer</span>
            <span className="line block lg:left-100 md:left-98 sm:left-96 left-1/3 relative">
              Designer
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
}
export default Herosection;
