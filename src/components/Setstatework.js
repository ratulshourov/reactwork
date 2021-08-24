import React, { Component } from 'react';
class Setstatework extends Component {
    constructor() {
        super();
        this.state = {
            name: 'shourov',
        }
    }
     updatename=(updatename)=>{
this.setState({name:updatename})
    }
    render() {
        return (
            <div>
                <h1>Name:{this.state.name}</h1>
                <button onClick ={this.updatename.bind(this,"Md.Ratul Uddin Ashraf")}>Change Name</button>
            </div>
        )
    }
}

export default Setstatework;