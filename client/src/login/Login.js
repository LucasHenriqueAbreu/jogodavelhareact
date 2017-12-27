import React, { Component } from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Entrar</h1>
                    </header>
                    <div className="Content">
                        <form role="form">
                            <TextField
                                type="text"
                                hintText="usuário"
                                errorText="Usuário é necessário"
                                floatingLabelText="informe seu usuário"
                            /><br />
                            <TextField
                                type="password"
                                hintText="Senha"
                                errorText="Senha é necessário"
                                floatingLabelText="Informe sua senha"
                            /><br />
                            <RaisedButton onClick={this.login} label="Login" primary={true} />
                        </form>

                        <p>Precisa de conta? <a href="/register">Cadastro</a></p>
                        <p>Or go <a href="/">Home</a>.</p>
                    </div>
                </div>
            </div>
        )
    }

    login() {
        axios.post(`http://192.168.3.209:1337/auth/local`, )
            .then(res => {
                console.log(res);
                // this.setState({ posts });
            });
    }
}

export default Login;
