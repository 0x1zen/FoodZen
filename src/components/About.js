import React, { Component } from "react";
import UserClass from "./UserClass.js";

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="flex justify-center items-center min-h-screen min-w-full bg-gray-50 p-6">
        <UserClass />
      </div>
    );
  }
}

export default About;
