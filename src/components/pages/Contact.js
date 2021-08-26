import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';
class Contact extends Component {
    constructor() {
        super();
        this.state={
            countryarray:[]
        }
    }
   componentDidMount(){
       axios.get("https://restcountries.eu/rest/v2/all")
       .then(response=>{
           this.setState({countryarray:response.data})
           console.log(response.data);
       })
       .catch(error=>{
        console.log(error);
       })
   }
    render() {
        const datalist=this.state.countryarray;
        const countylist =datalist.map((dt) => {
            return  <li> {dt.name}</li> ;
        })
        return (
            <div>
                 <ul>
                     {countylist}
                 </ul>
                
            </div>
        );
    }
}
export default Contact;