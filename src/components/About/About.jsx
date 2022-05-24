import { wrapper } from "../CustomClassName";
import "./about.css";
function About() {
  return (
    <div id="about">
      <div className={`${wrapper}`}>
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
            <img
              src="https://rekhchandsahu.com/static/67afdefe456856b00ffe388a1f508830/67ee3/about-1.avif"
              alt=""
            />
          </div>
          <div className="img img-2">
            <img
              src="https://rekhchandsahu.com/static/fbbf2e9f55bb6ec691e4c99c78838acc/15b54/about-2.avif"
              alt=""
            />
          </div>
          <div className="img img-3">
            <img
              src="	https://rekhchandsahu.com/static/a80f1159929a9f69fe6e6eff4e11d39a/cbebc/about-3.avif"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
