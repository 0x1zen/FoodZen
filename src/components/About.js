import User from "./User.js";
import UserClass from "./UserClass.js";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor called");
  }
  componentDidMount(){
    console.log("parent componentDidMount called");
  }
  render() {
    console.log("parent render called");
    return (
      <div>
        <h1>About Us</h1>
        <User name={"Raj Dubal"} location="Mumbai" contact={"@0x1zen"} />
        <UserClass name={"Raj Dubal"} location="Mumbai" contact={"@0x1zen"} />
        <UserClass name={"Raj Dubal2"} location="Mumbai" contact={"@0x1zen"} />
        <UserClass name={"Raj Dubal3"} location="Mumbai" contact={"@0x1zen"} />
      </div>
    );
  }
}

export default About;
