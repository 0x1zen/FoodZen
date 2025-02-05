import React from "react";
import { GITHUB_API } from "../utils/constants";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
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
  }

  render() {
    const { name, location, bio,avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>location : {location}</h3>
        <h4>bio: {bio}</h4>
        <img src={avatar_url}></img>
      </div>
    );
  }
}

export default UserClass;
