var React = require('react');
var ReactDOM = require('react-dom');

var LoginForm = require('./login-form');

ReactDOM.render(
    <LoginForm redirect="statistic" />,
    document.getElementById('login-form')
);

