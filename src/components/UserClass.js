import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2:0,
    };
  }
  render() {
    const { name, location, contact } = this.props;
    const {count}=this.state;
    const {count2}=this.state;
    console.log("component re-rendered");
    return (
      <div className="user-card">
        <h1>{count}</h1>
        <h2>{count2}</h2>
        <button onClick={()=>{
        this.setState({count:count+1,count2:count2+1});
        }}>Count Increase</button>
        <h2>{name}</h2>
        <h3>{location}</h3>
        <h4>{contact}</h4>
      </div>
    );
  }
}

export default UserClass;
