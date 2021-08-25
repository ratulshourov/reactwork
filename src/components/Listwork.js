import React, { Component } from 'react';
class Listwork extends Component {
    render() {
        const country = ["bd", "aus", "uk"];
        const countylist = country.map((dt) => {
            return  <li> {dt}</li> ;
        })
        return (
            <div>
                <ol>
                   
                   {countylist}
                </ol>
            </div>
        );
    }
}
export default Listwork;