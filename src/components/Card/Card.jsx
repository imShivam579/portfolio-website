import React from "react";

function Card({ imgPath }) {
  return (
    <a
      className={`work-card flex flex-col sm:flex-row-reverse md:flex-col`}
      href="#"
    >
      <div
        className={`thumb overflow-hidden rounded-xl bg-gray-800 relative w-full`}
      >
        <img
          className="object-cover h-full w-full  absolute top-0 left-0 right-0"
          src={imgPath}
          alt=""
        />
      </div>
      <div className="card-wrapper pr-10 md:p-0">
        <div className="tag-wrapp"></div>
        <div className="card-text" style={{ minWidth: "240px" }}>
          <div className="title h4 mt-8 lg:mt-12">Pharaon Capital</div>
          <p className="mt-2 lg:mt-4">Website & branding</p>
        </div>
      </div>
    </a>
  );
}

export default Card;
