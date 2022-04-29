import React from "react";
import Card from "../Card/Card";

function Projects() {
  return (
    <div id="work" className="bg-gay-900">
      <div className="wrapper">
        <h2 className="text-left inline-flex items-start flex-col absolute top-0 left-0 z-10">
          <span className="line relative top-0 left-0">Selected</span>
          <span className="line relative">Projects</span>
        </h2>
        {/* Projects wrapper  */}
        <div className="work-group ">
          <Card imgPath="https://cdn.sanity.io/images/72m24xcw/production/167bb166684004ea63dfc268fa32e3d99a403f56-1600x1200.jpg?rect=0,0,1599,1200&w=1366&h=1025&auto=format" />
          <Card imgPath="https://cdn.sanity.io/images/72m24xcw/production/6ded3dc0db824dccffd00e20375c0e3dc858ccdc-1200x900.jpg?w=1200&h=900&auto=format" />
          <Card imgPath="https://cdn.sanity.io/images/72m24xcw/production/ad5e087672d92383dc7b7665ce7aed17e39b75d9-1500x917.jpg?w=1366&h=835&auto=format" />
          <Card imgPath="https://cdn.sanity.io/images/72m24xcw/production/849d155a17ad725ae1b1f396586deb8614c4aedb-1366x768.jpg?w=1366&h=768&auto=format" />
        </div>
        {/* link  */}
        <span className="block mt-18 text-center">
          <a href="#">View All</a>
        </span>
      </div>
    </div>
  );
}

export default Projects;
