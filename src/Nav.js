import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://png2.cleanpng.com/sh/17668f7d31e7f59f3f0993bf30df8e73/L0KzQYm3VsI6N6l4iJH0aYP2gLBuTf5mfJdxgeo2c4T1dbL0if5oNZ5qfNtqLYTofLb9igNqd58yi9p4dz3vf7j2Tf5mfJdxgeo2bHBqf368gsM2amE4etQ9ZUnnQHAAVcM3OWQ1SqMAM0C1RIa4V8k4PGIziNDw/kisspng-netflix-streaming-media-television-show-logo-netflix-logo-5b35b03bb4e9d0.753613021530245179741.png"
          alt=""
        />
        <img
          className="nav__avatar"
          src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
