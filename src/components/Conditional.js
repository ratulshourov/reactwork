import React,{Component} from 'react';

class Conditional extends Component {
   
    constructor() {
        super();
        this.state = {
            flag: false,
            
        }
    }
    

    render() {
        if(this.state.flag==true) {
            return(
                <button>Logout Button</button>
            );
        }
        else{
            return(
                <button>Login</button>
            );
        }
    }
}
export default Conditional;