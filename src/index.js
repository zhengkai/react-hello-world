import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FacebookLogin from 'react-facebook-login';
import './index.css';

var fbResp
const responseFacebook = (response) => {
	fbResp = response;

	ReactDOM.render(
		<pre>{JSON.stringify(fbResp, null, 2)}</pre>,
		document.getElementById('abc')
	);
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);

ReactDOM.render(
	<FacebookLogin
		appId="105724702922800"
		autoLoad={true}
		fields="name,email,picture"
		callback={responseFacebook} />,
	document.getElementById('demo')
);
