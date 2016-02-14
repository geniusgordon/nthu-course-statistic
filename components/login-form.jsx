var React = require('react');
var $ = require('jquery');

var LoginTextField = require('./login-text-field');
var LoginAuthImg = require('./login-auth-img');

var LoginForm = React.createClass({
    getInitialState() {
        return {
            pwdstr: null
        }
    },
    componentDidMount() {
        $.ajax({
            url: 'api/login',
            method: 'GET',
            success: function(data) {
                this.setState({
                    pwdstr: data.pwdstr
                });
            }.bind(this)
        })
    },
    render() {
		return (
            <form className="form-horizontal">
                <LoginTextField
                    type="text"
                    id="account"
                    name="account"
                    label="Username"
                />
                <LoginTextField
                    type="password"
                    id="passwd"
                    name="passwd"
                    label="Password"
                />
                <LoginAuthImg
                    type="text"
                    id="passwd2"
                    name="passwd2"
                    label="Captcha"
                    pwdstr={this.state.pwdstr}
                />

                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-default">Sign in</button>
                    </div>
                </div>
            </form>
		);
    }
});

module.exports = LoginForm;

