import React, { Component } from 'react';
import logo from './logo.svg';
class Login extends Component() {
    render() {
        <div>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Entrar</h1>
                </header>
                <div className="Content">
                    <form role="form" action="/auth/local" method="post">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="text" class="form-control" name="identifier" />
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" name="password" />
                        </div>

                        <button type="submit" class="btn btn-warning btn-lg">Login</button>
                    </form>

                    <p>Precisa de conta? <a href="/register">Cadastro</a></p>
                    <p>Or go <a href="/">Home</a>.</p>
                </div>
            </div>
        </div>
    }
}

export default Login;
