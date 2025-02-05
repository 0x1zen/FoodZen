import User from "./User.js";
import UserClass from "./UserClass.js";
import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>About Us</h1>
        <User name={"Raj Dubal"} location="Mumbai" contact={"@0x1zen"} />
        <UserClass name={"Raj Dubal"} location="Mumbai" contact={"@0x1zen"} />
      </div>
    );
  }
}

export default About;
