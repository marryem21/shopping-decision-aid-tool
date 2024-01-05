import React from 'react';
import Button from './components/Button';
import './styles/main.scss'

function App() {
  return (
    <div className="App home">
		<h1 className="h1">Welcome to shop aid</h1>
		<div className="home__buttons">
			<Button text="Login"/>
			<Button text="Signup"/>
		</div>
    </div>
  );
}

export default App;
