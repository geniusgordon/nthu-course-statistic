var React = require('react');
var $ = require('jquery');

var LoginTextField = require('./login-text-field');
var LoginAuthImg = require('./login-auth-img');

var LoginForm = React.createClass({
    submit(e) {
        e.preventDefault();
        var data = $('form').serialize() + '&fnstr=' + this.state.pwdstr;
        $.ajax({
            url: 'api/login',
            method: 'POST',
            data: data,
            success: function(data) {
                window.location = this.props.redirect;
            }.bind(this),
            error: function() {
                this.setState({
                    err: 'login error'
                });
            }.bind(this)
        })
    },
    getInitialState() {
        return {
            pwdstr: null,
            err: ''
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
            <form className="form-horizontal" onSubmit={this.submit}>
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
                    <div className="col-sm-offset-2 col-sm-2">
                        <button type="submit" className="btn btn-default">Sign in</button>
                    </div>
                    <div className="col-sm-8">
                        <p>{this.state.err}</p>
                    </div>
                </div>
            </form>
		);
    }
});

module.exports = LoginForm;

