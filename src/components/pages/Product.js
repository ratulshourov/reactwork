import { getQueriesForElement } from '@testing-library/react';
import React, { Component } from 'react';
class Product extends Component {
   
    render() {
        const objectcss={
        backgroundColor:"red",
        fontSize:"40px"
        }
        return (
            <div>
               <h1 style={objectcss}>Product</h1>
            </div>
        );
    }
}
export default Product;