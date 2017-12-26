import React, { Component } from 'react';
import logo from './logo.svg';

class Register extends Component() {
    render() {
        <div>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Cadastro</h1>
                </header>
                <div className="Content">
                    <form role="form" action="/auth/local/register" method="post">
                        <div class="form-group">
                            <label>Email</label>
                            <input type="email" class="form-control" name="email" />
                        </div>
                        <div class="form-group">
                            <label>Username</label>
                            <input type="text" class="form-control" name="username" />
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" name="password" />
                        </div>

                        <button type="submit" class="btn btn-warning btn-lg">Entrar</button>
                    </form>


                    <p>Already have an account? <a href="/login">Login</a></p>
                    <p>Or go <a href="/">Home</a>.</p>
                </div>
            </div>
        </div>
    }
}

export default Register;
