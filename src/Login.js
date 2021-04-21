import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';
function Login() {
    return (
        <div className="login">
            {/*spotify loo*/}
            <img src="https://www.gliopinionisti.it/wp-content/uploads/2018/11/spotify.gif" alt=""/>
            {/*spotify login*/}
            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
