import React, { Component } from 'react';

class Formwork extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }
  eventhandler = (event) => {

    var formname = event.target.name;
    var formvalue = event.target.value;
    this.setState({ name: formvalue });
  }
  formsubmit=()=>{
    alert(this.state.name);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.formsubmit}>
        Name:<h1>{this.state.name}</h1>
          <input name="username" onChange={this.eventhandler} type="text" placeholder="Enter name" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Formwork;