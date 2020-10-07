import React from "react";
import Navbar from 'react-bootstrap/Navbar';


import { Link } from "react-router-dom";
const Nav = ({cardItem}) => {
  return (
    <Navbar bg="dark" expand="lg">
      <Link className="nav-link text-success" to="/">Home</Link>
      <Link className="nav-link text-warning" to="/products">Product</Link>
      <h4 style={{color: "white"}}>Cart items : {cardItem} </h4>
    </Navbar>
  );
};
export default Nav;
