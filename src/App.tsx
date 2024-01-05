import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
	createBrowserRouter,
	Routes,
	Route, Link, Router
 } from "react-router-dom";
import './styles/main.scss';
import Button from './components/Button';
import Dashboard from './pages/Dashboard';
import Markets from './pages/Supermarkets';
import Products from './pages/Products';
import SignIn from './pages/Login';
import SignUp from './pages/Signup';

function App() {

	const router = createBrowserRouter([
		{
		  path: "/",
		  element: <div>Hello world!</div>,
		},
	 ]);

  return (
	<div>
		<div className="App home">
			<h1 className="h1">Welcome to shop aid</h1>
			<div className="home__buttons">
				<Button text="Login" to="/login"/>
				<Button text="Signup" to="/signup"/>
				<Button text="Be a guest" to="/dashboard"/>
			</div>
		</div>
	</div>
  );
}

export default App;
