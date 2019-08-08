import React from "react";

import "./heroSection.css";

export default class HeroSection extends React.Component {
  render() {
    return (
      <div>
        {window.innerWidth < 768 ? (
          <div>
            <img
              src={require("./assets/background-image-mobile.jpg")}
              className="heroContainer"
              alt=""
            />
            <div className="heroTitle">SIT STAND LAPTOP</div>
            <button className="heroButton">VIEW PRODUCT</button>
          </div>
        ) : (
          <div className="heroContainer">
            <div className="heroTitle">SIT STAND LAPTOP</div>
            <button className="heroButton">VIEW PRODUCT</button>
          </div>
        )}
      </div>
    );
  }
}
