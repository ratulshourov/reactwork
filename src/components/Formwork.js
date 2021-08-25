import React, { Component } from 'react';

class Formwork extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
  }
  eventhandler = (event) => {

    var formname = event.target.value;
    this.setState({ name: formname });
  }
  render() {
    return (
      <div>
        <form>
        Name:<h1>{this.state.name}</h1>
          <input onChange={this.eventhandler} type="text" placeholder="Enter name" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default Formwork;