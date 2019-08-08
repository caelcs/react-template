import React from "react";
import "./App.css";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import HeroSection from "./components/heroSection/heroSection";
import HomeCategories from "./components/homeCategories/homeCategories";
class App extends React.Component {
  componentDidMount() {
    const { fetchConfiguration } = this.props;
    fetchConfiguration();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <HeroSection />
        <HomeCategories />
        <Footer />
      </div>
    );
  }
}

export default App;
