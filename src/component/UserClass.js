import React from "react";
class UserClass extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      count1: 0,
    };
  }
  render() {
    return (
      <div className="info-card">
        <h3>Name:Akash Lande</h3>
        <h4>Gmail:akashlande97@gmail.com</h4>
        <h5>Location:Pune</h5>
        <h6>{this.props.Roll}</h6>
        <p>{this.state.count}</p>
        <p>{this.state.count1}</p>
        <button onClick={()=>
        {
         this.setState({
            count:this.state.count+1,
            count1:this.state.count1+1,
         })
        }}>Increace Count</button>
      </div>
    );
  }
}

export default UserClass;
