import React,{Component} from 'react';

class Variableelements extends Component {
   
    constructor() {
        super();
        this.state = {
            flag: true,
            
        }
    }
    

    render() {
      return(
        this.state.flag ?
        (
           <h1>Logout</h1> 
        ):
        (
            <h1>login</h1> 
         )
      );
    }
}
export default Variableelements;