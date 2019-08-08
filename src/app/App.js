import React from "react";
import "./App.css";

import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/heroSection/heroSection";
import HomeCategories from "./components/homeCategories/homeCategories";
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
        <HomeCategories />
      </div>
    );
  }
}

export default App;
