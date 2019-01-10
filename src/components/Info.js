import React, { Component } from "react";

class Info extends Component {
  render() {
    console.log(this.props.greased);
    return (
      <div>
        <span>Weight: {this.props.weight}</span>
        <br />
        <span>Specialty: {this.props.specialty}</span>
        <br />
        <span>Medal: {this.props.medal}</span>
        <br />
        <span>Grease: {this.props.greased ? "true" : "false"}</span>
      </div>
    );
  }
}

export default Info;
