import React from "react";

import "./heroSection.css";

export default class HeroSection extends React.Component {
  render() {
    return (
      <div className="heroContainer">
        <div className="heroTitle">SIT STAND LAPTOP</div>
        <button className="heroButton">VIEW PRODUCT</button>
      </div>
    );
  }
}
