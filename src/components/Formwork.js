import React, { Component } from 'react';

class Formwork extends Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      lname: '',
      email: '',
      address: '',
      des: ''
    }
  }
  eventhandler = (event) => {

    var formname = event.target.name;
    var formvalue = event.target.value;
    this.setState({ [formname]: formvalue });
    var emailpattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (formname === "email") {
      if (!emailpattern.test(formvalue)) {
        this.setState({ email: 'Invalid Email' });
      }
    }
    var descriptionvalue = event.target.value;
    this.setState({ des: descriptionvalue })
  }
  formsubmit = () => {
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
          <input name="lname" onChange={this.eventhandler} type="text" placeholder="Enter Lastname" />  <br></br>
          <input name="email" onChange={this.eventhandler} type="text" placeholder="Enter email" />  <br></br>
          <input name="address" onChange={this.eventhandler} type="text" placeholder="Enter address" />  <br></br>
          <h1>{this.state.des}</h1>
          <textarea onChange={this.eventhandler} name="description" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Formwork;