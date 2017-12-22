import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './game/Game';


class App extends Component {
	render() {
		return (
			<div>
				<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<h1 className="App-title">Jogo da velha em React</h1>
					</header>
					<div className="Content">
						<Game></Game>
					</div>
				</div>
				<footer>
					<strong><a href="https://github.com/LucasHenriqueAbreu">Lucas Henrique de Abreu</a></strong>
					lucasigual14@gmail.com
				</footer>
			</div>
		);
	}
}
export default App;
