import React from 'react'
import { Link } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';
import Supermarkets from '../pages/Supermarkets';
import Products from '../pages/Products';

import {
	Router,
	Routes,
	Route
 } from "react-router-dom";

function Navbar() {
  return (
	<div className="navbar">
		<span>search</span>
		<ul className="navbar__list">
			<li className="navbar__list-item"><Link to="/markets">Markets</Link></li>
			<li className="navbar__list-item"><Link to="/products" >Products</Link></li>
			<li className="navbar__list-item"><Link to="/compare" >Compare</Link></li>
			<li className="navbar__list-item"><Link to="/my-list" >My list</Link></li>
		</ul>
	</div>
  )
}

export default Navbar
