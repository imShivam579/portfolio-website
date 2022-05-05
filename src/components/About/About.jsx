import "./about.css";
function About() {
  return (
    <div id="about">
      <div className="wrapper">
        <div className="content">
          <p className="big">
            I have a passion for creating user experiences that are seamless,
            meaningful and impactful.
          </p>
          <a href="#" className="button">
            About me
          </a>
        </div>
        <div className="images">
          <div className="img img-1">
            <img src="./images/card-img.png" alt="" />
          </div>
          <div className="img img-2">
            <img src="./images/card-img.png" alt="" />
          </div>
          <div className="img img-3">
            <img src="./images/card-img.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
