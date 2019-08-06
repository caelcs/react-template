import React from "react";
import "./App.css";

import Navbar from "../products/components/navbar/navbar";
import HeroSection from "../products/components/heroSection/HeroSection";
class App extends React.Component {
  componentDidMount() {
    const { fetchConfiguration } = this.props;
    console.log("componentDidMount");
    fetchConfiguration();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <HeroSection />
      </div>
    );
  }
}

export default App;
