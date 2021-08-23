import React, { Component } from "react";

class About extends Component {
    test(){
        alert("From Class Component");
    }
    render() {
        return (
            <div>
                <button onClick={this.test.bind(this,"Function From ")}>From Class </button>
                <h2>Address:{this.props.address}</h2>
            </div>
        );
    }
}
export default About;