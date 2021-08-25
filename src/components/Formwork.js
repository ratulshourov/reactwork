import React, { Component } from 'react';

class Formwork extends Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      lname: '',
      email: '',
      address: ''
    }
  }
  eventhandler = (event) => {

    var formname = event.target.name;
    var formvalue = event.target.value;
    this.setState({ [formname]: formvalue });
  }
  formsubmit=()=>{
    alert(this.state.name);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.formsubmit}>
        Name:<h1>{this.state.fname}</h1>
        lname:<h1>{this.state.lname}</h1>
        email:<h1>{this.state.email}</h1>
        address:<h1>{this.state.address}</h1>
          <input name="fname" onChange={this.eventhandler} type="text" placeholder="Enter name" /> <br></br>
          <input name="lname" onChange={this.eventhandler} type="text" placeholder="Enter name" />  <br></br>
          <input name="email" onChange={this.eventhandler} type="text" placeholder="Enter name" />  <br></br>
          <input name="address" onChange={this.eventhandler} type="text" placeholder="Enter name" />  <br></br>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Formwork;