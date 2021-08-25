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
    var imgid=document.getElementById("imageid");
    reactDom.findDOMNode(imgid).src="https://via.placeholder.com/150/0000FF/808080C/O https://placeholder.com/";
  }
  render() {
    return (
      <div>
        <button onClick={this.updatename}>Update Name By React DOm</button>
        <h1 id="name">My Name is Ratul</h1>
        <img id="imageid" onClick={this.updatename} src="https://via.placeholder.com/300.png/09f/fffC/O https://placeholder.com/"></img>
      </div>
    );
  }
}
export default Reactdomwork;