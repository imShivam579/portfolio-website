import React from "react";

function Card({ imgPath }) {
  return (
    <a className={`work-card`} href="#">
      <div
        className={`thumb overflow-hidden rounded-xl bg-gray-800 relative w-full`}
      >
        <img
          className="object-cover h-full w-full  absolute top-0 left-0 right-0"
          src={imgPath}
          alt=""
        />
      </div>
      <div className="card-content">
        <div className="title" style={{ minWidth: "240px" }}>
          <h3 className="h3">Pharaon Capital</h3>
          <div className="arr">
            <img src="./images/arrow.svg" alt="arrow" srcset="" />
          </div>
        </div>
        <span className="mt-2 lg:mt-4 text-gray-500">Website & branding</span>
      </div>
    </a>
  );
}

export default Card;
