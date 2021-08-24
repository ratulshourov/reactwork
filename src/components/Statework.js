import React ,{Component}from 'react';
class Statework extends Component {
    constructor() {
        super();
        this.state={
            name:'shourov',
            profession:'software engineer'
        }
    }
    render() {
        return(
            <div>
               <h1> Name:{this.state.name}</h1>
               <h1> profession:{this.state.profession}</h1>
            </div>
        )
    }
}

export default Statework;