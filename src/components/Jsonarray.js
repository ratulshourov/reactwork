import React, { Component } from 'react';
class Jsonarray extends Component {
    render() {
        const city = [
            {
                name: "dhaka-13",
                code: "1207"
            },
            {
                name: "dhaka-14",
                code: "1208"
            },
            {
                name: "dhaka-15",
                code: "1209"
            },
        ];
        const citylist = city.map((dt) => {
            return <option id={dt.code}>{dt.name}</option>;
        })
        return (
            <div>
                <select>
                    {citylist}
                </select>
            </div>
        );
    }
}
export default Jsonarray;