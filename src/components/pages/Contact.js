import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';
class Contact extends Component {
   componentDidMount(){
       axios.get("https://restcountries.eu/rest/v2/all")
       .then(response=>{
           console.log(response.data);
       })
       .catch(error=>{
        console.log(error);
       })
   }
    render() {
        
        return (
            <div>
                  <h1 style={{color:"red", fontSize:"45px"}}>Contact</h1>
                
            </div>
        );
    }
}
export default Contact;