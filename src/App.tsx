import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
	BrowserRouter,
	Routes,
	Route, Router
 } from "react-router-dom";

import './styles/main.scss';
import Dashboard from './pages/Dashboard';
import Markets from './pages/Supermarkets';
import Products from './pages/Products';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import { Outlet } from 'react-router';
import Navbar from './components/Navbar';

function App() {

  return (
		<BrowserRouter>
			<Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          element={
            <>
              <Navbar />
              <Outlet />
            </>
          }
        >
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/markets" element={<Markets />}></Route>
        </Route>
      </Routes>
		</BrowserRouter>
  );
}

export default App;
