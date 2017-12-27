import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './game/Game';
import GameRoom from './gameroom/GameRoom'
import Register from './register/Register'
import Login from './login/Login'
import Home from './home/Home'
import {
	AppBar,
	Drawer,
	List,
	ListItem,
	IconButton,
	IconMenu,
	MenuItem,
	FlatButton,
	Toggle,
} from 'material-ui';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class OptLogin extends Component {
	static muiName = 'FlatButton';

	render() {
		return (
			<FlatButton {...this.props} label="Entrar" />
		);
	}
}

const Logged = (props) => (
	<IconMenu
		{...props}
		iconButtonElement={
			<IconButton><MoreVertIcon /></IconButton>
		}
		targetOrigin={{ horizontal: 'right', vertical: 'top' }}
		anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
	>
		<MenuItem linkButton
			containerElement={<Link to="/login" />} primaryText="Entrar" />
		<MenuItem linkButton
			containerElement={<Link to="/register" />} primaryText="Cadastro" />
		<MenuItem linkButton
			containerElement={<Link to="/gameroom" />} primaryText="Lista de jogos" />

	</IconMenu>
);

Logged.muiName = 'IconMenu';

/**
 * App component.
 */
class App extends Component {

	handleChange = (event, logged) => {
		this.setState({ logged: logged, drawerOpen: false });
	};
	componentWillMount() {
		this.setState({ drawerOpen: false, logged: false });
	}
	handleOpen = () => { this.setState({ drawerOpen: true, logged: false }); };
	handleClose = () => { this.setState({ drawerOpen: false, logged: false }); };

	render() {
		return <Router>
			<div>
				<Drawer
					docked={false}
					open={this.state.drawerOpen}
					containerStyle={{ top: 64 }}
					onRequestChange={this.handleClose}
				>
					<List>
						<ListItem
							primaryText='Item 1'
							nestedItems={
								[<ListItem
									key='0'
									primaryText="Login"
									containerElement={<Link to="/contact" />}
									onClick={this.handleClose}
								/>
									, <ListItem
									key='1'
									primaryText="About"
									containerElement={<Link to="/about" />}
									onClick={this.handleClose}
								/>
								]
							}
						/>
						<ListItem
							primaryText='Item 2'
							nestedItems={
								[<ListItem
									key='0'
									primaryText="Home"
									containerElement={<Link to="/" />}
									onClick={this.handleClose}
								/>
									, <ListItem
									key='1'
									primaryText="topics"
									containerElement={<Link to="/topics" />}
									onClick={this.handleClose}
								/>
								]
							}
						/>
						<ListItem
							primaryText='Item 3'
							nestedItems={
								[<ListItem key='0' value="V3-1" primaryText="T3-1" onClick={this.handleClose} />
									, <ListItem key='1' value="V3-2" primaryText="T3-2" onClick={this.handleClose} />
								]
							}
						/>
					</List>
				</Drawer>
				<Toggle
					label="Logged"
					defaultToggled={true}
					onToggle={this.handleChange}
					labelPosition="right"
					style={{ margin: 20 }}
				/>
				<AppBar
					title="Jogo da velha Multiplayer"
					onLeftIconButtonClick={this.handleOpen}
					iconElementRight={this.state.logged ? <Logged /> : <OptLogin />}
				/>

				<Route exact path="/" component={Home} />
				<Route path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/gameroom" component={GameRoom} />
			</div>
		</Router>;
	}
}

export default App;