import React from "react";
import "./App.css";

import Navbar from "./components/navbar/navbar";
import HeroSection from "./components/heroSection/HeroSection";
import Footer from "./components/footer/footer";
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
        <Footer />
      </div>
    );
  }
}

export default App;
