import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";
type HomepageProps = {};

const Homepage: React.FC<HomepageProps> = () => {
  return (
    <div className="homepage__container">
      <div className="home__heading">Index: React.JS Notes</div>
      <div className="home__index">
        <Link className="index__link" to="/components">
          Functional & Class Components
        </Link>
        <Link className="index__link" to="/state">
          States & Props
        </Link>
        <Link className="index__link" to="/lifecycle">
          Component Lifecycle
        </Link>
        <Link className="index__link" to="/routing">
          Routing & Navigation
        </Link>
      </div>
    </div>
  );
};
export default Homepage;
