import React from "react";
import "./card.css";
function Card({ imgPath }) {
  return (
    <a
      className="work-card xLg:basis-[calc(50%-4rem)] md:basis-[calc(50%-2rem)]"
      href="#"
    >
      <div
        className={`thumb before:content-[''] before:block before:pt-[100%] overflow-hidden rounded-xl bg-gray-800 relative w-full`}
      >
        <img
          className="object-cover h-full w-full  absolute top-0 left-0 right-0"
          src={imgPath}
          alt=""
        />
      </div>
      <div className="card-content sm:pr-12 md:pr-0 w-full sm:w-[240px] md:w-full sm:-order-1 md:order-2">
        <div
          className="title flex items-center justify-between md:mt-[var(--gap-4)] sm:-mt-16 mt-8 relative"
          style={{ minWidth: "240px" }}
        >
          <h3 className="relative z-1">Pharaon Capital</h3>
          <div className="arr">
            <img src="./images/arrow.svg" alt="arrow" srcset="" />
          </div>
        </div>
        <span className="project-info inline-block text-[1.6rem] font-normal mt-2 lg:mt-4 text-gray-500 z-1">
          Website & branding
        </span>
      </div>
    </a>
  );
}

export default Card;
