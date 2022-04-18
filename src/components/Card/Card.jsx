import React from "react";

function Card(props) {
  return (
    <div className={`col flex  h-96 border-red-100 border-2`}>
      <div className={`card h-fit border-2 border-red-500`}>
        <div
          className={`img-wrapper overflow-hidden rounded-xl ${
            props.alignCard === "end" ? "h-16" : null
          }`}
        >
          <img
            className="object-cover w-full h-full"
            src="./images/card-img.png"
            alt=""
          />
        </div>
        <div className="card-wrapper">
          <div className="tag-wrapp"></div>
          <div className="card-text">
            <div className="title h3">Project Name</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis nostrum quo, illo molestias incidunt esse!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
