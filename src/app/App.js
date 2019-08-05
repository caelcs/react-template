import React from "react";
import "./App.css";

import Navbar from "../products/components/navbar/navbar";

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
      </div>
    );
  }
}

export default App;
