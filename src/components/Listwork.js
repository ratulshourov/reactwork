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
                    <h1>My List</h1>
                   {countylist}
                </ol>
            </div>
        );
    }
}
export default Listwork;