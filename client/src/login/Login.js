import React, { Component } from 'react';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
        this.handleFBLogin = this.handleFBLogin.bind(this);
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
            if (result.authResponse) {
                return this.http.post(`http://localhost:3000/api/v1/auth/facebook`, { access_token: result.authResponse.accessToken })
                    .toPromise()
                    .then(response => {
                        var token = response.headers.get('x-auth-token');
                        if (token) {
                            localStorage.setItem('id_token', token);
                        }
                        resolve(response.json());
                    })
                    .catch(() => reject());
            } else {
                reject();
            }
        }, { scope: 'public_profile,email' })
    }

    logout() {
        localStorage.removeItem('id_token');
    }

    isLoggedIn() {
        return new Promise((resolve, reject) => {
            this.getCurrentUser().then(user => resolve(true)).catch(() => reject(false));
        });
    }

    getCurrentUser() {
        return new Promise((resolve, reject) => {
            return this.http.get(`http://localhost:3000/api/v1/auth/me`).toPromise().then(response => {
                resolve(response.json());
            }).catch(() => reject());
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
