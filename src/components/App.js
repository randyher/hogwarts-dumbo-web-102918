import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";

class App extends Component {
  state = {
    hogs: hogs,
    onlyGrease: false,
    byName: false,
    byWeight: false
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

  toggleGrease = () => {
    this.setState({
      onlyGrease: !this.state.onlyGrease
    });
  };

  toggleName = () => {
    this.setState({
      byName: !this.state.byName
    });
  };

  toggleWeight = () => {
    this.setState({
      byWeight: !this.state.byWeight
    });
  };

  filteredHogList = () => {
    let newPigs = [...this.state.hogs];
    let weight =
      "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";

    if (this.state.onlyGrease === true) {
      newPigs = newPigs.filter(hog => hog.greased === true);
    }

    if (this.state.byName === true) {
      newPigs = newPigs.sort(function(a, b) {
        return a.name.localeCompare(b.name);
      });
    }

    if (this.state.byWeight === true) {
      newPigs = newPigs.sort(function(a, b) {
        return a[weight] - b[weight];
      });
    }

    return newPigs;
  };

  render() {
    console.log("render");

    return (
      <div className="App">
        <button onClick={this.toggleGrease}>Sort by Grease</button>
        <button onClick={this.toggleName}>Sort by Name</button>
        <button onClick={this.toggleWeight}>Sort by Weight</button>
        <Nav hogs={this.filteredHogList()} infoHandler={this.infoHandler} />
      </div>
    );
  }
}
export default App;
