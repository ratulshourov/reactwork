import { getQueriesForElement } from '@testing-library/react';
import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
class Product extends Component {
   
    render() {
        const objectcss={
        backgroundColor:"red",
        fontSize:"40px"
        }
        return (
            <div>
               <h1 style={objectcss}>Product</h1>
               <Button variant="primary">Primary</Button>

           
     

            </div>
        );
    }
}
export default Product;