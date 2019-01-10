import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";

class App extends Component {
  state = {
    hogs
  };

  infoHandler = e => {
    let newArr = [...this.state.hogs];
    newArr.forEach(hog => {
      if (hog.name === e.target.name) {
        hog.display ? (hog.display = false) : (hog.display = true);
      }
    });

    this.setState({
      hogs: newArr
    });
  };

  render() {
    return (
      <div className="App">
        <Nav hogs={this.state.hogs} infoHandler={this.infoHandler} />
      </div>
    );
  }
}
export default App;
