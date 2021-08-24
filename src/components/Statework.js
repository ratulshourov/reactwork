import React ,{Component}from 'react';
class Statework extends Component {
    constructor() {
        super();
        this.state={
            name:'shourov',
            profession:'software engineer',
            skill:['php','java'],
            framework:{
                php:"laravel",
                js:"Vue js"
            }
        }
    }
    render() {
        return(
            <div>
               <h1> Name:{this.state.name}</h1>
               <h1> profession:{this.state.profession}</h1>
               <h1> skill:{this.state.skill[0]}</h1>
               <h1> framework:{this.state.framework.js}</h1>
            </div>
        )
    }
}

export default Statework;