import React, { Component } from 'react';
import logo from './logo.svg';
import Game from './Game';
import './App.css';

class App extends Component {
	render() {
		console.log(Game.login());

		return (
			<div className="App">
				<div className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h2>Welcome to React</h2>
				</div>
				<p className="App-intro">
					To get started, edit <code>src/App.js</code> and save to reload.
				</p>
				<div id="abc" className="facebook">
					Yes RPG 1
				</div>
				<div>
					<button>login game</button>
				</div>
			</div>
		);
	}
}

export default App;
