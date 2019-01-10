import React, { Component } from "react";
import Info from "./Info.js";

class HogTile extends Component {
  render() {
    return (
      <div className="ui eight wide column">
        <h2>{this.props.name}</h2>
        <img
          onClick={e => this.props.infoHandler(e)}
          src={this.props.image}
          name={this.props.name}
          alt=""
        />
        <div>
          {this.props.display === true ? (
            <Info
              weight={this.props.weight}
              greased={this.props.greased}
              specialty={this.props.specialty}
              medal={this.props.medal}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default HogTile;
