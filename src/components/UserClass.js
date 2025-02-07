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
    const { login, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h1>Name : {login}</h1>
        <h3>{bio}</h3>
      </div>
    );
  }
}

export default UserClass;
