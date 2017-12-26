import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './game/Game';
import GameRoom from './gameroom/GameRoom'
import Register from './register/Register'
import Login from './login/Login'
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'


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
						<div class="container" style="padding-top:80px;">
							<div class="jumbotron text-center">
								<h1><span class="fa fa-lock"></span> Jogo da velha Multiplayer</h1>
								<p>Entrar ou se Cadastrar: </p>

								<Router>
									<div>
										<ul>
											<li><Link to="/login">Entrar</Link></li>
											<li><Link to="/register">Cadastro</Link></li>
											<li><Link to="/gameroom">Lista de saldas</Link></li>
										</ul>

										<hr />

										<Route path="/login" component={Login} />
										<Route path="/register" component={Register} />
										<Route path="/gameroom" component={GameRoom} />
									</div>
								</Router>


							</div>
						</div>
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
