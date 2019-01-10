import piggy from "../porco.png";
import React from "react";
import HogTile from "./Hog.js";

const Nav = props => {
  let displayHogs = props.hogs.map(hog => {
    return (
      <HogTile
        key={hog.name}
        name={hog.name}
        specialty={hog.specialty}
        greased={hog.greased}
        weight={
          hog[
            "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
          ]
        }
        medal={hog["highest medal achieved"]}
        image={hog.image}
        display={hog.display}
        infoHandler={props.infoHandler}
      />
    );
  });

  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
          <img src={piggy} className="App-logo" alt="piggy" />
        </a>
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <br />
      <br />
      <select
        type="checkbox"
        name="grease"
        value="All"
        onChange={this.displayGrease}
      >
        <option value="">Greased</option>
        <option value="">Un-Greased</option>
        <option value="">All Hogs</option>
      </select>

      <br />
      <div className="ui grid container">{displayHogs}</div>
    </div>
  );
};

export default Nav;
