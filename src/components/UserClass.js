import React from "react";
import { GITHUB_API } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(" child constructor callled");
    this.state = {
      userInfo: {
        name: "dummy name",
        location: "dummy location",
        bio: "dummy bio",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch(GITHUB_API);
    const response = await data.json();
    this.setState({ userInfo: response });
    console.log(" child componentDidMount callled");
  }
  componentDidUpdate() {
    console.log(" child component did update called");
  }
  componentWillUnmount() {
    console.log("Component WIll unmount called");
  }

  render() {
    const { name, location, bio, avatar_url } = this.state.userInfo;
    console.log(" child page render called");
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h1>Name : {name}</h1>
        <h2>location : {location}</h2>
        <h3>bio: {bio}</h3>
      </div>
    );
  }
}

export default UserClass;
