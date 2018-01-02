import React, { Component } from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        //this.handleFBLogin = this.handleFBLogin.bind(this);
    }

    loadFbLoginApi() {

        window.fbAsyncInit = function () {
            /*global FB*/
            FB.init({
                appId: 1957892444499542, //FB_APP_ID,
                cookie: true,  // enable cookies to allow the server to access
                // the session
                xfbml: true,  // parse social plugins on this page
                version: 'v2.5' // use version 2.1
            });
        };

        console.log("Loading fb api");
        // Load the SDK asynchronously
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    componentDidMount() {
        this.loadFbLoginApi();
    }

    fbLogin() {
        FB.login(result => {
            console.log(result);
            if (result.authResponse) {
                axios.post(`http://localhost:3001/auth/facebook`, { access_token: result.authResponse.accessToken })
                    .then(response => {
                        let token = response.headers.get('x-auth-token');
                        if (token) {
                            localStorage.setItem('id_token', token);
                        }
                        console.log(response.json());
                    })
                    .catch(() => {
                        console.log("erro ao logar");
                    });
            } else {
                console.log("Não teve resposta do login");
            }
        }, { scope: 'public_profile,email' })
    }

    logout() {
        localStorage.removeItem('id_token');
    }

    getCurrentUser() {
        axios.get(`http://localhost:3001/auth/me`).then(response => {
            console.log(response.json());
        }).catch(() => {
            console.log("Não foi possível retornar o usuário");
        });
    }

    render() {
        return (
            <div>
                <RaisedButton classNames="btn-facebook"
                    id="btn-social-login"
                    onClick={this.fbLogin} label="Sign in with Facebook" primary={true} />
            </div>
        );
    }
}

export default Login;
