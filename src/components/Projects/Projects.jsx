import React from "react";
import Card from "../Card/Card";

function Projects() {
  return (
    <div className="container mx-auto">
      <div className="title">Selected Projects</div>
      {/* Projects wrapper  */}
      <div className="wrapper grid gap-16 grid-cols-2 grid-rows-2 justify-items-stretch items-baseline">
        <Card alignCard="start" />
        <Card alignCard="end" />
        {/* card  */}
        {/* card  */}
        {/* card  */}
        {/* card  */}
      </div>
      {/* link  */}
      <span className="block">
        <a href="#">View All</a>
      </span>
    </div>
  );
}

export default Projects;
