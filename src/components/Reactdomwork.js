import React, { Component } from 'react';
import reactDom from 'react-dom';
class Reactdomwork extends Component {

  updatename = () => {
    var container = document.getElementById("name");
    var element = <h1> RATUL SHOUROV</h1>;
    var callback = function () {
      alert("Ok");
    }
    reactDom.render(element, container, callback);
  }
  render() {
    return (
      <div>
        <button onClick={this.updatename}>Update Name By React DOm</button>
        <h1 id="name">My Name is Ratul</h1>
      </div>
    );
  }
}
export default Reactdomwork;