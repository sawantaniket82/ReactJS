import React from "react";
import homepage from "./images/homepage.jpg";

import "./styles.css";

export default function Home() {
  return (
    <div className="container">
      <div className="container2">
        <img src={homepage} alt="" />
        <div className="overimage">
          <span filter-content="S">Utopia</span>
          <p className="homepara">
            Technological Utopia refers to a world in which technological
            advancement would enhance the living conditions in an almost utopian
            or idealistic manner. ... Technological advances are driving
            creativity, enhancing productivity and making the world a better
            place.
          </p>
        </div>
      </div>
    </div>
  );
}
