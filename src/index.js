import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Link, BrowserRouter as Router } from '../node_modules/react-router-dom';
import Product from './components/pages/Product';
import Contact from './components/pages/Contact';
import './bootstrap.min.css';
const myrouter = (
  <Router>
    <div>
      <ul>
        <Link to="/Product">Product</Link>
        <Link to="/Contact">Contact</Link>
      </ul>
      <Route path="/product" component={Product}></Route>
      <Route path="/Contact" component={Contact}></Route>
    </div>
  </Router>


)
ReactDOM.render(
  myrouter,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
